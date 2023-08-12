import { SelectList } from '@components/SelectList'
import { fireEvent, render, screen } from '@testing-library/react-native'

describe('Component: SelectList', () => {
  it('should be return city details selected', async () => {
    const data = [
      { id: '1', name: 'Campinas', latitude: 123, longitude: 456 },
      { id: '2', name: 'Campo grande', latitude: 789, longitude: 487 },
    ]

    const onPress = jest.fn()

    render(<SelectList data={data} onPress={onPress} />)

    const selectedCity = screen.getByText(/campo/i)
    fireEvent.press(selectedCity)

    expect(onPress).toBeCalledWith(data[1])
  })

  it('not should be show options when data props is empty', () => {
    render(<SelectList data={[]} />)

    const options = screen.getByTestId('options')

    expect(options.children).toHaveLength(0)
  })
})
