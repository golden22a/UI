import { TestBed, inject } from '@angular/core/testing';

import { AllTodosService } from './all-todos.service';

describe('AllTodosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllTodosService]
    });
  });

  it('should be created', inject([AllTodosService], (service: AllTodosService) => {
    expect(service).toBeTruthy();
  }));
});
