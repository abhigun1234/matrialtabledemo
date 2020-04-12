import { TestBed } from '@angular/core/testing';

import { FetchcourseService } from './fetchcourse.service';

describe('FetchcourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchcourseService = TestBed.get(FetchcourseService);
    expect(service).toBeTruthy();
  });
});
