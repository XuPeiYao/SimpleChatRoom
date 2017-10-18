import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ChatroomSocketService } from './chatroom-socket.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

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
  scrollToSource: Subject<number>;
  constructor(private socketService: ChatroomSocketService) {
    this.scrollToSource = new Subject<number>();
    this.scrollToSource.switchMap(targetYPos => {
      return Observable.interval(5)
          .scan((acc, curr) =>  acc + 5, this.messageViewer.scrollTop)
          .do(position => this.messageViewer.scrollTo(0, position))
          .takeWhile(val => val < targetYPos);
    }).subscribe();
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
    this.scrollToSource.next(this.messageViewer.clientHeight);
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
