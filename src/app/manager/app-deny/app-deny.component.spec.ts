import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDenyComponent } from './app-deny.component';

describe('AppDenyComponent', () => {
  let component: AppDenyComponent;
  let fixture: ComponentFixture<AppDenyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDenyComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    expect(AppDenyComponent).toEqual(AppDenyComponent);
  });

});
