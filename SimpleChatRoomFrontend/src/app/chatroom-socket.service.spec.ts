import { TestBed, inject } from '@angular/core/testing';

import { ChatroomSocketService } from './chatroom-socket.service';

describe('ChatroomSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatroomSocketService]
    });
  });

  it('should be created', inject([ChatroomSocketService], (service: ChatroomSocketService) => {
    expect(service).toBeTruthy();
  }));
});
