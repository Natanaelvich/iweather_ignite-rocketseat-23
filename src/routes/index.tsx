import { Update } from '@components/Update'
import { useCity } from '@hooks/useCity'
import { NavigationContainer } from '@react-navigation/native'
import { Dashboard } from '@screens/Dashboard'
import { theme } from '@styles/theme'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { AppRoutes } from './app.routes'

export function Routes() {
  const { city } = useCity()
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: theme.colors.gray_900,
      }}
    >
      <Update />
      <NavigationContainer>
        {city ? <Dashboard /> : <AppRoutes />}
      </NavigationContainer>
    </View>
  )
}
