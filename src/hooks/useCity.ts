import { CityContext } from '@contexts/CityContext'
import { useContext } from 'react'

export function useCity() {
  const context = useContext(CityContext)

  return context
}
