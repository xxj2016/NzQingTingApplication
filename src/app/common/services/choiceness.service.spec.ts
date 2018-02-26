import { TestBed, inject } from '@angular/core/testing';

import { ChoicenessService } from './choiceness.service';

describe('ChoicenessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChoicenessService]
    });
  });

  it('should be created', inject([ChoicenessService], (service: ChoicenessService) => {
    expect(service).toBeTruthy();
  }));
});
