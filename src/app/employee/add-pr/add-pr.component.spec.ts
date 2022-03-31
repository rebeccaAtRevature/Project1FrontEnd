import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrComponent } from './add-pr.component';

describe('AddPrComponent', () => {
  let component: AddPrComponent;
  let fixture: ComponentFixture<AddPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrComponent ]
    })
    .compileComponents();
  });


  it('should create', () => {
    expect(AddPrComponent).toEqual(AddPrComponent);
  });

});
