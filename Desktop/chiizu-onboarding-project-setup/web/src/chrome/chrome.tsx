import { Stack, ThemeProvider } from '@fluentui/react'

import ChromeTopBar from 'chrome/topBar/chromeTopBar'
import darkTheme from 'common/style/theme/darkTheme'
import { bgBlack, h100 } from 'common/style/common.styles'

export default function Chrome(props: React.PropsWithChildren): JSX.Element {
  return (
    <Stack verticalFill>
      <Stack grow horizontal verticalFill>
        <Stack.Item verticalFill>
          <ThemeProvider theme={darkTheme} className={h100}></ThemeProvider>
        </Stack.Item>
        <Stack.Item grow>
          <Stack verticalFill className={bgBlack}>
            <ChromeTopBar />
            {props.children}
          </Stack>
        </Stack.Item>
      </Stack>
    </Stack>
  )
}
