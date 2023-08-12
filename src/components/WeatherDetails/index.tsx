import drop from '@assets/drop.svg'
import rain from '@assets/rain.svg'
import sun from '@assets/sun.svg'
import thermometer from '@assets/thermometer.svg'
import wind from '@assets/wind.svg'
import { WeatherItem } from '@components/WeatherItem'
import { View } from 'react-native'

import { styles } from './styles'

export interface WeatherDetailsProps {
  temp_kf: string
  humidity: string
  feels_like: string
  wind_speed: string
  probability: string
}

interface Props {
  data: WeatherDetailsProps
}

export function WeatherDetails({ data }: Props) {
  return (
    <View style={styles.container}>
      <WeatherItem
        icon={thermometer}
        title="Sensação térmica"
        value={data.feels_like}
      />

      <WeatherItem
        icon={rain}
        title="Probabilidade de chuva"
        value={data.probability}
      />

      <WeatherItem
        icon={wind}
        title="Velocidade do vento"
        value={data.wind_speed}
      />

      <WeatherItem icon={drop} title="Umidade do ar" value={data.humidity} />

      <WeatherItem icon={sun} title="Índice UV" value={data.temp_kf} isLast />
    </View>
  )
}
