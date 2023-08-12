import clearDay from '@assets/clear_day.svg'
import { Day } from '@components/Day'
import { render, screen } from '@testing-library/react-native'

describe('Component: Day', () => {
  it('should be render day', () => {
    render(
      <Day
        data={{
          day: '18/07',
          min: '30°c',
          max: '34°c',
          icon: clearDay,
          weather: 'Céu limpo',
        }}
      />,
    )

    expect(screen.getByText('18/07')).toBeTruthy()
  })
})
