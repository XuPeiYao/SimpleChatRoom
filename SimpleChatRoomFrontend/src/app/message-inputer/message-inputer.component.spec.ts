import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInputerComponent } from './message-inputer.component';

describe('MessageInputerComponent', () => {
  let component: MessageInputerComponent;
  let fixture: ComponentFixture<MessageInputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageInputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageInputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
