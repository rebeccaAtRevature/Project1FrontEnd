import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpRComponent } from './view-emp-r.component';

describe('ViewEmpRComponent', () => {
  let component: ViewEmpRComponent;
  let fixture: ComponentFixture<ViewEmpRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmpRComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    expect(ViewEmpRComponent).toEqual(ViewEmpRComponent);
  });

});
