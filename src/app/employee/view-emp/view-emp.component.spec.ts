import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpComponent } from './view-emp.component';

describe('ViewEmpComponent', () => {
  let component: ViewEmpComponent;
  let fixture: ComponentFixture<ViewEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmpComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    expect(ViewEmpComponent).toEqual(ViewEmpComponent);
  });

});
