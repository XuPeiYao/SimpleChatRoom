using EzCoreKit.AspNetCore.WebSockets;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Net.WebSockets;

namespace SimpleChatRoom
{
    public class ChatRoomHandler : WebSocketHandler {
        List<WebSocket> webSocketInstances = new List<WebSocket>();

        /// <summary>
        /// 取得所有連線中的WebSocket
        /// </summary>
        public IReadOnlyList<WebSocket> WebSocketInstances => webSocketInstances.AsReadOnly();

        public ChatRoomHandler() : base("/chatroom") {
            OnConnected += ChatRoomHandler_OnConnected;
            OnReceived += ChatRoomHandler_OnReceived;
            OnDisconnected += ChatRoomHandler_OnDisconnected;
        }

        private void ChatRoomHandler_OnConnected(HttpContext context, System.Net.WebSockets.WebSocket socket) {
            webSocketInstances.Add(socket);
        }

        private void ChatRoomHandler_OnReceived(System.Net.WebSockets.WebSocket socket, System.Net.WebSockets.WebSocketMessageType messageType, byte[] receiveMessage) {
            Parallel.ForEach(webSocketInstances.Where(x => x != socket),x => {
                //未確認訊息情況下直接廣播
                x.SendAsync(receiveMessage, messageType, true).GetAwaiter().GetResult();
            });
        }

        private void ChatRoomHandler_OnDisconnected(HttpContext context, System.Net.WebSockets.WebSocket socket) {
            webSocketInstances.Remove(socket);
        }
        
        protected override bool AcceptConditions(HttpContext context) {
            return true;
        }
    }
}
