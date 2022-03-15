import {
  CREATE_HERO,
  RETRIEVE_HERO,
  UPDATE_HERO,
  DELETE_HERO,
} from "../actions/types";

const initialState = [];

const heroReducer = (hero = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_HERO:
      return [...hero, payload];

    case RETRIEVE_HERO:
      return payload;

    case UPDATE_HERO:
      return hero.map((tutorial) => {
        if (tutorial.id === payload.id) {
          return {
            ...tutorial,
            ...payload,
          };
        } else {
          return tutorial;
        }
      });

    case DELETE_HERO:
      return hero.filter(({ id }) => id !== payload.id);

    default:
      return hero;
  }
};

export default heroReducer;