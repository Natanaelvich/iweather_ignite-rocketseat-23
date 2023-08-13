import { theme } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.gray_800,
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  headerText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
})
