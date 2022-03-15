import {
  CREATE_HERO,
  RETRIEVE_HERO,
  UPDATE_HERO,
  DELETE_HERO,
} from "./types";

import HeroService from "../services/HeroService";

export const createHero = (name, realName, firstAppearance, publisher, images) => async (dispatch) => {
  try {
    const res = await HeroService.create({ name, realName, firstAppearance, publisher, images });

    dispatch({
      type: CREATE_HERO,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveHero = () => async (dispatch) => {
  try {
    const res = await HeroService.getAll();

    dispatch({
      type: RETRIEVE_HERO,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateHero = (id, data) => async (dispatch) => {
  try {
    const res = await HeroService.update(id, data);

    dispatch({
      type: UPDATE_HERO,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteHero = (id) => async (dispatch) => {
  try {
    await HeroService.remove(id);

    dispatch({
      type: DELETE_HERO,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const findHeroByName = (name) => async (dispatch) => {
  try {
    const res = await HeroService.findByName(name);

    dispatch({
      type: RETRIEVE_HERO,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
