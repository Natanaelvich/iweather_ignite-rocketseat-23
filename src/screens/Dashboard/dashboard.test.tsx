import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse"
import { act, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@__tests__/utils/customRender"
import { api } from "@services/api"
import { Dashboard } from "@screens/Dashboard"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse"

describe("Screen: Dashboard", () => {
  const originalDate = Date;
  const mockDayDate = new Date('2023-07-30T14:00:00');
  const mockNightDate = new Date('2023-07-30T02:00:00');
    
  beforeAll(async () => {
    const city = {
      id: '1',
      name: 'Rio do Sul, BR',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(city)
  })

  afterAll(() => {
    global.Date = originalDate;
  });

  it('should be show city weather is day', async () => {
    global.Date = class extends Date {
        constructor() {
            super()
          return mockDayDate;
        }
      } as any;

    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });
    
    render(<Dashboard />)

    const cityName = await waitFor(() => screen.findByText(/rio do sul/i));
    expect(cityName).toBeTruthy() 
  })

  it('should be show city weather is night', async () => {
    global.Date = class extends Date {
        constructor() {
            super()
          return mockNightDate;
        }
    } as any;

    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });

    render(<Dashboard />)

    const cityName = await waitFor(() => screen.findByText(/rio do sul/i));
    expect(cityName).toBeTruthy()
  })

  it('should be show another selected weather city', async () =>{

    jest.spyOn(api, 'get')
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityAPIResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })

    render(<Dashboard />)

    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'))

    const cityName = 'São Paulo'

    await waitFor(() => act(() => {
      const search = screen.getByTestId('search-input')
      fireEvent.changeText(search, cityName)
    }))

    await waitFor(() => act(() => {
      fireEvent.press(screen.getByText(cityName, { exact: false }))
    }))

    expect(screen.getByText(cityName, { exact: false })).toBeTruthy()

  })
})