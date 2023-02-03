import { IStackStyles, IStackTokens, mergeStyles } from '@fluentui/react'

import lightTheme from 'common/style/theme/lightTheme'

const desktopTopbarHeight = 75

const iconWrapperStack: IStackStyles = {
  root: {
    width: 30,
    height: 30,
    backgroundColor: lightTheme.palette.themePrimary,
    borderRadius: 6,
    cursor: 'pointer',
  },
}

const topBarWrapper: IStackStyles = {
  root: {
    displayName: 'topBarWrapper',
    padding: '20px 30px',
    minHeight: desktopTopbarHeight,
  },
}

const searchWrapper = mergeStyles({
  displayName: 'searchWrapper',
  padding: '10px 15px',
  width: 400,
  maxWidth: '100%',
})

const chromeTopBarStyles = {
  iconWrapperStack,
  topBarWrapper,
  desktopTopbarHeight,
  searchWrapper,
}

export default chromeTopBarStyles
