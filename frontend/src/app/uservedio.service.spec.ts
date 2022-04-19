import { TestBed } from '@angular/core/testing';

import { UservedioService } from './uservedio.service';

describe('UservedioService', () => {
  let service: UservedioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UservedioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
