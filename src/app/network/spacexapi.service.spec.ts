import { TestBed } from '@angular/core/testing';
import { SpacexapiService } from './spacexapi.service';

describe('SpacexapiService', () => {
  let s: SpacexapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    s = TestBed.inject(SpacexapiService);
  });

  it('should be created', () => {
    expect(s).toBeTruthy();
  });
});
