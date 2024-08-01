import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastNotifyComponent } from './toast-notify.component';

describe('ToastNotifyComponent', () => {
  let component: ToastNotifyComponent;
  let fixture: ComponentFixture<ToastNotifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastNotifyComponent]
    });
    fixture = TestBed.createComponent(ToastNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
