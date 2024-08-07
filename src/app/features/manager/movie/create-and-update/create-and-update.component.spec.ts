import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndUpdateComponent } from './create-and-update.component';

describe('CreateAndUpdateComponent', () => {
  let component: CreateAndUpdateComponent;
  let fixture: ComponentFixture<CreateAndUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAndUpdateComponent]
    });
    fixture = TestBed.createComponent(CreateAndUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
