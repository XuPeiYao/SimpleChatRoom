import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ChatroomSocketService } from './chatroom-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  messages = [];
  socket: WebSocket;
  messageViewer: Element;
  inputText: string;
  constructor(private socketService: ChatroomSocketService) {

  }

  public sendMessage(message: string) {
    if (message.trim().length === 0) {
      return;
    }
    this.socket.send(message);
    this.messages.push({
      message: message,
      isSelf: true
    });
    this.inputText = '';
  }

  ngAfterViewChecked(): void {
    this.messageViewer.scrollTop = this.messageViewer.scrollHeight * 2;
  }

  ngOnInit(): void {
    this.socket = this.socketService.getSocket();
    this.messageViewer = document.getElementById('messageViewer');

    const THIS = this;
    this.socket.addEventListener('message', function (event: MessageEvent) {
      THIS.messages.push({
        message: event.data,
        isSelf: false
      });
    });
  }
}
