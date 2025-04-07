import { TestBed } from '@angular/core/testing';

import { SeminairesService } from './seminaires.service';

describe('SeminairesService', () => {
  let service: SeminairesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeminairesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
