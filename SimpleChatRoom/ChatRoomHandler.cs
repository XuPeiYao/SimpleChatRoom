using EzCoreKit.AspNetCore.WebSockets;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Net.WebSockets;
using System.Text;

namespace SimpleChatRoom
{
    public class ChatRoomHandler : WebSocketHandler
    {
        Dictionary<string, WebSocket> webSocketInstances
            = new Dictionary<string, WebSocket>();

        public ChatRoomHandler() : base("/chatroom")
        {
            OnConnected += ChatRoomHandler_OnConnected;
            OnReceived += ChatRoomHandler_OnReceived;
            OnDisconnected += ChatRoomHandler_OnDisconnected;
        }

        private void ChatRoomHandler_OnConnected(HttpContext context, System.Net.WebSockets.WebSocket socket) 
        {
            var id = Guid.NewGuid().ToString();
            webSocketInstances.Add(id, socket);
            Parallel.ForEach(webSocketInstances.Values.Where(x => x != socket), x => {
                //未確認訊息情況下直接廣播
                x.SendTextAsync("使用者: " + id + " 登入").GetAwaiter().GetResult();
            });
            socket.SendTextAsync("使用者: " + id + " 歡迎").GetAwaiter().GetResult();
        }

        private void ChatRoomHandler_OnReceived(System.Net.WebSockets.WebSocket socket, System.Net.WebSockets.WebSocketMessageType messageType, byte[] receiveMessage)
        {
            if (receiveMessage.Length == 0) return;
            var recInstance = webSocketInstances.Where(x => x.Value == socket).First();
            
            Parallel.ForEach(webSocketInstances.Values.Where(x => x != socket),x => {
                //未確認訊息情況下直接廣播
                x.SendTextAsync(recInstance.Key + ": " + Encoding.UTF8.GetString(receiveMessage)).GetAwaiter().GetResult();
            });
        }

        private void ChatRoomHandler_OnDisconnected(HttpContext context, System.Net.WebSockets.WebSocket socket) 
        {
            var removeInstance = webSocketInstances.Where(x => x.Value == socket).First();
            webSocketInstances.Remove(removeInstance.Key);
            Parallel.ForEach(webSocketInstances.Values, x => {
                //未確認訊息情況下直接廣播
                x.SendTextAsync("使用者: " + removeInstance.Key + " 登出").GetAwaiter().GetResult();
            });
        }
        
        protected override bool AcceptConditions(HttpContext context) 
        {
            return true;
        }
    }
}
