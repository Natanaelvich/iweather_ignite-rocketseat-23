import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';
import { theme } from '@styles/theme';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator testID='loading' color={theme.colors.blue_light} />
    </View>
  );
}