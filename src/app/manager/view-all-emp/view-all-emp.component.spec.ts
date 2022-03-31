import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEmpComponent } from './view-all-emp.component';

describe('ViewAllEmpComponent', () => {
  let component: ViewAllEmpComponent;
  let fixture: ComponentFixture<ViewAllEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllEmpComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    expect(ViewAllEmpComponent).toEqual(ViewAllEmpComponent);
  });

});
