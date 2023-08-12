import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Dashboard } from '@screens/Dashboard'
import { Search } from '@screens/Search'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="search" component={Search} />

      <Screen name="dashboard" component={Dashboard} />
    </Navigator>
  )
}
