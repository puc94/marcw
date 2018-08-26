import { TestBed, inject } from '@angular/core/testing';

import { AdminLayoutService } from './admin-layout.service';

describe('AdminLayoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminLayoutService]
    });
  });

  it('should be created', inject([AdminLayoutService], (service: AdminLayoutService) => {
    expect(service).toBeTruthy();
  }));
});
