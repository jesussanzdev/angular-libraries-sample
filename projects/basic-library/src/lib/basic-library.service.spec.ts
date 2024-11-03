import { TestBed } from '@angular/core/testing';

import { BasicLibraryService } from './basic-library.service';

describe('BasicLibraryService', () => {
  let service: BasicLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
