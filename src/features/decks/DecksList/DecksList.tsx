import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { decksApi } from '../decks-api.ts'
import type { Deck } from '../decks-api.types.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import s from './DecksList.module.css'

export const DecksList = () => {
  const decks = useAppSelector((state) => state.decksReducer.decks)

  const dispatch = useAppDispatch()

  useEffect(() => {
    decksApi.fetchDecks().then((res) => dispatch(setDecksAC(res.data.items)))
  }, [])

  return (
    <ul className={s.list}>
      {decks.map((deck: Deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
    </ul>
  )
}
