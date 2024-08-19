import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropzoneImageComponent } from './dropzone-image.component';

describe('DropzoneImageComponent', () => {
  let component: DropzoneImageComponent;
  let fixture: ComponentFixture<DropzoneImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropzoneImageComponent]
    });
    fixture = TestBed.createComponent(DropzoneImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
