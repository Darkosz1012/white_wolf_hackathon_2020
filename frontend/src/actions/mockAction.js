import { FETCH_MOCK } from './types';

export const fetchMock = () => dispatch => {
  fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(recipes => dispatch({
      type: FETCH_MOCK,
      payload: recipes
    })
  );
};
