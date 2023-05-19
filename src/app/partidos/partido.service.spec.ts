/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PartidoService } from './partido.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Partido', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PartidoService]
    });
  });

  it('should ...', inject([PartidoService], (service: PartidoService) => {
    expect(service).toBeTruthy();
  }));
});
