import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElogoutComponent } from './elogout.component';

describe('ElogoutComponent', () => {
  let component: ElogoutComponent;
  let fixture: ComponentFixture<ElogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElogoutComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    expect(ElogoutComponent).toEqual(ElogoutComponent);
  });

});
