import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchMeals, fetchMealById } from '../actions';
import { FETCH_MEALS, SELECT_MEAL } from '../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_MEALS when fetching meals has been done', () => {
    fetchMock.getOnce('https://www.themealdb.com/api/json/v1/1/search.php?s=A', {
      body: { meals: ['do something'] },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_MEALS, payload: ['do something'] },
    ];
    const store = mockStore({ meals: [] });

    return store.dispatch(fetchMeals()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates SELECT_MEAL when fetching meals by id', () => {
    fetchMock.getOnce('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52959', {
      body: {
        meals: [{
          strMeal: 'Baked salmon with fennel & tomatoes',
          idMeal: '52959',
        }],
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: SELECT_MEAL,
        payload: {
          strMeal: 'Baked salmon with fennel & tomatoes',
          idMeal: '52959',
        },
      },
    ];
    const store = mockStore({ meals: [] });

    return store.dispatch(fetchMealById(52959)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
