import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  /**
   * 是否為目前使用者自身送出的訊息，如果是則對話框箭頭在右
   */
  @Input() isSelf = true;

  /**
   * 聊天訊息
   */
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
