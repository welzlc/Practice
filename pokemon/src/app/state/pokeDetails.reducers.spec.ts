import {
  pokeDetailsMock,
  pokeDetailsStateMock,
  pokeStateMock,
} from '../interfaces/mock-data';
import {
  loadPokeDetails,
  loadPokeDetailsFailed,
  loadPokeDetailsSuccess,
} from './poke.actions';
import { pokeDetailsReducer } from './pokeDetails.reducers';
import { PokeDetailsState } from './pokeDetails.state';

describe('pokeDetails.reducers.ts', () => {
  describe('loadPokeDetails', () => {
    it('should return loading state', () => {
      const input: PokeDetailsState = pokeDetailsStateMock;
      const expected: PokeDetailsState = {
        ...input,
        isLoading: true,
        isError: false,
      };
      const actual = pokeDetailsReducer(
        input,
        loadPokeDetails({ url: 'some-url' })
      );
      expect(actual).toStrictEqual(expected);
    });
  });
  describe('loadPokeDetailsSuccess', () => {
    it('should return loaded state', () => {
      const input: PokeDetailsState = {
        ...pokeDetailsStateMock,
        isLoading: true,
        isError: false,
      };
      const expected: PokeDetailsState = {
        ...input,
        isLoading: false,
        isError: false,
        pokeDetails: pokeDetailsMock,
      };
      const actual = pokeDetailsReducer(
        input,
        loadPokeDetailsSuccess({ pokeDetails: pokeDetailsMock })
      );
      expect(actual).toStrictEqual(actual);
    });
  });
  describe('loadPokeDetailsFailed', () => {
    it('should return failed state', () => {
      const input: PokeDetailsState = {
        ...pokeDetailsStateMock,
        isLoading: true,
        isError: false,
      };
      const expected: PokeDetailsState = {
        ...input,
        isLoading: false,
        isError: true,
      };
      const actual: PokeDetailsState = pokeDetailsReducer(
        input,
        loadPokeDetailsFailed()
      );
      expect(actual).toStrictEqual(expected);
    });
  });
});
