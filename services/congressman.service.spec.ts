/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CongressmanService } from './congressman.service';

describe('Service: Congressman', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CongressmanService]
    });
  });

  it('should ...', inject([CongressmanService], (service: CongressmanService) => {
    expect(service).toBeTruthy();
  }));
});
