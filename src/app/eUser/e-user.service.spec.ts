import { TestBed } from '@angular/core/testing';

import { EUserService } from './e-user.service';

describe('EUserService', () => {
  let service: EUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EUserService);
  });

  it('should create', () => {
    expect(EUserService).toEqual(EUserService);
  });

});
