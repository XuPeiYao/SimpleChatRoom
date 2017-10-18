import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-inputer',
  templateUrl: './message-inputer.component.html',
  styleUrls: ['./message-inputer.component.css']
})
export class MessageInputerComponent implements OnInit {
  _text: string;
  @Input()
  public set text(str: string){
    this._text = str;
    this.textChange.emit(str);
  }

  @Output()
  public textChange: EventEmitter<any> = new EventEmitter<any>();
  public get text(){
      return this._text;
  }

  @Output() onSend = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  public enter(): void {
    this.onSend.emit(this.text);
  }
}
