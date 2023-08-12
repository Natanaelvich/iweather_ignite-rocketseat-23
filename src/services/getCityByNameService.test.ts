import { mockCityAPIResponse } from '@__tests__/mocks/api/mockCityAPIResponse'

import { api } from './api'
import { getCityByNameService } from './getCityByNameService'

describe('Service: getCityByNameService', () => {
  it('should return city details', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockCityAPIResponse })

    const response = await getCityByNameService('São Paulo')

    expect(response.length).toBeGreaterThan(0)
  })

  it('should return empty array if city is not found', async () => {
    jest.spyOn(api, 'get').mockRejectedValue({})

    const response = await getCityByNameService('Cidade que não existe')

    expect(response.length).toBe(0)
  })

  it('should return name withou country if country is not found', async () => {
    const newMock = {
      ...mockCityAPIResponse,
      sys: {
        country: undefined,
      },
    }

    jest.spyOn(api, 'get').mockResolvedValue({ data: newMock })

    const response = await getCityByNameService('São Paulo')

    expect(response[0].name).toBe('São Paulo')
  })
})
