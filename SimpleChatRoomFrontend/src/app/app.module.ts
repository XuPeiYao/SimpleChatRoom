import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { ChatroomSocketService } from './chatroom-socket.service';
import { MessageInputerComponent } from './message-inputer/message-inputer.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageBoxComponent,
    MessageInputerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChatroomSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
