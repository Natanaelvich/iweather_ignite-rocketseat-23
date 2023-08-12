import { theme } from '@styles/theme'
import {
  ActivityIndicator,
  TextInput,
  TextInputProps,
  View,
} from 'react-native'

import { styles } from './styles'

type Props = TextInputProps & {
  isLoading?: boolean
}

export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.colors.gray_400}
        {...rest}
      />

      {isLoading && (
        <ActivityIndicator
          testID="activity-indicator"
          color={theme.colors.blue_light}
        />
      )}
    </View>
  )
}
