import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCatagoryComponent } from './manage-catagory.component';

describe('ManageCatagoryComponent', () => {
  let component: ManageCatagoryComponent;
  let fixture: ComponentFixture<ManageCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCatagoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
