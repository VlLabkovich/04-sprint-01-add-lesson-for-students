import type { Deck } from './decks-api.types.ts'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS': {
      return {
        ...state,
        decks: action.payload,
      }
    }

    default:
      return state
  }
}
export const setDecksAC = (payload: Deck[]) => {
  return {
    type: 'SET-DECKS',
    payload,
  } as const
}

type DecksActions = ReturnType<typeof setDecksAC>
