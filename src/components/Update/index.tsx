import { StatusBar } from 'expo-status-bar'
import * as Updates from 'expo-updates'
import React from 'react'
import { Button, Text, View } from 'react-native'

import { styles } from './styles'

export function Update() {
  const { currentlyRunning, isUpdateAvailable, isUpdatePending } =
    Updates.useUpdates()

  // If true, we show the button to download and run the update
  const showDownloadButton = isUpdateAvailable

  React.useEffect(() => {
    if (isUpdatePending) {
      // Update has been successfully downloaded,
      // so reload with the new update bundle
      Updates.reloadAsync()
    }
  }, [isUpdatePending])

  // Show whether or not we are running embedded code or an update
  const runTypeMessage = currentlyRunning.isEmbeddedLaunch
    ? 'This app is running from built-in code'
    : 'This app is running an update'

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Updates Demo</Text>
      <Text>{runTypeMessage}</Text>
      <Button
        onPress={() => Updates.checkForUpdateAsync()}
        title="Check manually for updates"
      />
      {showDownloadButton && (
        <Button
          onPress={() => Updates.fetchUpdateAsync()}
          title="Download and run update"
        />
      )}
      <StatusBar style="auto" />
    </View>
  )
}
