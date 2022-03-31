import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlogoutComponent } from './mlogout.component';

describe('MlogoutComponent', () => {
  let component: MlogoutComponent;
  let fixture: ComponentFixture<MlogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlogoutComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    expect(MlogoutComponent).toEqual(MlogoutComponent);
  });

});
