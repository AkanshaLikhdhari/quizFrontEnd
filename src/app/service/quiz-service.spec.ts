import { TestBed } from '@angular/core/testing';

import { QuizService } from './quiz-service';

describe('QuizServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizService = TestBed.get(QuizService);
    expect(service).toBeTruthy();
  });
});
