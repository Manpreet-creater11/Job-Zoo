import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCatagoryComponent } from './update-catagory.component';

describe('UpdateCatagoryComponent', () => {
  let component: UpdateCatagoryComponent;
  let fixture: ComponentFixture<UpdateCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCatagoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
