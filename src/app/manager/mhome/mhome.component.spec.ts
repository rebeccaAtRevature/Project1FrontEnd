import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhomeComponent } from './mhome.component';

describe('MhomeComponent', () => {
  let component: MhomeComponent;
  let fixture: ComponentFixture<MhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MhomeComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    expect(MhomeComponent).toEqual(MhomeComponent);
  });

});
