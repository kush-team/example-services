import { TestBed } from '@angular/core/testing';

import { CongressmenEventService } from './congressmen-event.service';

describe('CongressmenEventService', () => {
  let service: CongressmenEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongressmenEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
