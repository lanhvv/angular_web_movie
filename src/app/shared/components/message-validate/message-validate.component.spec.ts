import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageValidateComponent } from './message-validate.component';

describe('MessageValidateComponent', () => {
  let component: MessageValidateComponent;
  let fixture: ComponentFixture<MessageValidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageValidateComponent]
    });
    fixture = TestBed.createComponent(MessageValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
