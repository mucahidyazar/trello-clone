import { ADD_BOARD } from '../../types'

export const addBoard = (data) => ({
  type: ADD_BOARD,
  payload: data,
})
