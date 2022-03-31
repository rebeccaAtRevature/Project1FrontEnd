import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MheaderComponent } from './mheader.component';

describe('MheaderComponent', () => {
  let component: MheaderComponent;
  let fixture: ComponentFixture<MheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MheaderComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    expect(MheaderComponent).toEqual(MheaderComponent);
  });

});
