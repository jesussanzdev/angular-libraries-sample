import { TestBed } from '@angular/core/testing';

import { OptimizedLibraryService } from './optimized-library.service';

describe('OptimizedLibraryService', () => {
  let service: OptimizedLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptimizedLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
