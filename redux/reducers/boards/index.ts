import { ADD_BOARD } from '../../types'

import {
  backgrounds,
  personal,
  recentlyViewed,
  templates,
} from '../../../config/dummy/boards'

const INITIAL_STATE = {
  backgrounds,
  personal,
  recentlyViewed,
  templates,
}

export const BoardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_BOARD:
      return {
        ...state,
        personal: [...state.personal, action.payload],
      }
    default:
      return state
  }
}
