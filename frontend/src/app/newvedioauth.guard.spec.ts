import { TestBed } from '@angular/core/testing';

import { NewvedioauthGuard } from './newvedioauth.guard';

describe('NewvedioauthGuard', () => {
  let guard: NewvedioauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewvedioauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
