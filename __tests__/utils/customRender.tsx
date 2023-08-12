import { CityProvider } from '@contexts/CityContext'
import { render, RenderOptions } from '@testing-library/react-native'
import { ReactElement, ReactNode } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

function Providers({ children }: { children: ReactNode }) {
  return (
    <SafeAreaProvider>
      <CityProvider>{children}</CityProvider>
    </SafeAreaProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react-native'
export { customRender as render, Providers }
