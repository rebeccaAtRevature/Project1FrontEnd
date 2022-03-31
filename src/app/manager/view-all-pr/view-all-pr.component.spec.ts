import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPRComponent } from './view-all-pr.component';

describe('ViewAllPRComponent', () => {
  let component: ViewAllPRComponent;
  let fixture: ComponentFixture<ViewAllPRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllPRComponent ]
    })
    .compileComponents();
  });


  it('should create', () => {
    expect(ViewAllPRComponent).toEqual(ViewAllPRComponent);
  });

});
