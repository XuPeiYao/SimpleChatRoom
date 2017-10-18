import { Injectable } from '@angular/core';

@Injectable()
export class ChatroomSocketService {

  constructor() { }

  public getSocket(): WebSocket {
    return new WebSocket(`ws://localhost:54395/chatroom`);
    // return new WebSocket(`ws://${location.host}/chatroom`);
  }
}
