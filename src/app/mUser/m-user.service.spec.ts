import { TestBed } from '@angular/core/testing';

import { MUserService } from './m-user.service';

describe('MUserService', () => {
  let service: MUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MUserService);
  });

  it('should create', () => {
    expect(MUserService).toEqual(MUserService);
  });

});
