import { TestBed } from '@angular/core/testing';

import { AuthntenticatService } from './authntenticat.service';

describe('AuthntenticatService', () => {
  let service: AuthntenticatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthntenticatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
