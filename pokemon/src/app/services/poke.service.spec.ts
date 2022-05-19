import { HttpClient } from '@angular/common/http';
import { map, of } from 'rxjs';
import { mapPokeDetailsServer } from '../helpers/pokeDetails.helper';
import {
  pokeDetailsMock,
  pokeDetailsServerMock,
  pokeServerResultMock,
} from '../interfaces/mock-data';
import { PokeDetails } from '../interfaces/poke-details';
import { PokeDetailsServer, PokeServerResult } from '../interfaces/server';
import { PokeService } from './poke.service';

describe('PokeService', () => {
  const httpClientMock: Partial<HttpClient> = { get: jest.fn() };

  it('should be created', () => {
    const service = new PokeService(httpClientMock as HttpClient);
    expect(service).toBeTruthy();
  });

  it('should return all pokemon', (done) => {
    const httpClientMock: Partial<HttpClient> = {
      get: jest.fn().mockImplementation(() => of(pokeServerResultMock)),
    };
    const service = new PokeService(httpClientMock as HttpClient);
    service.getAll().subscribe((value) => {
      expect(value).toStrictEqual([
        { id: 0, ...pokeServerResultMock.results[0] },
      ]);
      done();
    });
  });

  it('should return poke-details', (done) => {
    const httpClientMock: Partial<HttpClient> = {
      get: jest.fn().mockImplementation(() => of(pokeDetailsServerMock)),
    };
    const service = new PokeService(httpClientMock as HttpClient);
    service.getPokeDetailsByUrl('some-url').subscribe((value) => {
      expect(value).toStrictEqual(pokeDetailsMock);
      done();
    });
  });
});
