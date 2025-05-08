import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCatagoryComponent } from './view-catagory.component';

describe('ViewCatagoryComponent', () => {
  let component: ViewCatagoryComponent;
  let fixture: ComponentFixture<ViewCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCatagoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
