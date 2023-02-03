import { ICalloutProps, IIconProps, Stack } from '@fluentui/react'
import {
  Persona,
  PersonaSize,
  PersonaPresence,
  IPersonaSharedProps,
} from '@fluentui/react/lib/Persona'
import styles from 'chrome/topBar/chromeTopBar.styles'
import logo from '../../../public/assets/images/LogoLS.svg'

const add: IIconProps = { iconName: 'Add' }
const search: IIconProps = { iconName: 'Search' }
const calloutProps: ICalloutProps = {
  preventDismissOnEvent: (ev) => ev.type === 'resize',
}

export default function ChromeTopBar(): JSX.Element {
  const myPersona: IPersonaSharedProps = {
    imageInitials: 'MT',
    text: 'Martha Thukral',
    secondaryText: 'martha@company.com',
    initialsTextColor: 'white',
    initialsColor: '#2A82FF',
  }
  return (
    <Stack
      verticalAlign='center'
      horizontalAlign='space-between'
      styles={styles.topBarWrapper}
    >
      <Stack.Item>
        <Stack
          horizontal
          verticalAlign='center'
          horizontalAlign='space-between'
        >
          <img src={logo} alt='' />
          <Persona {...myPersona} size={PersonaSize.size40} />
        </Stack>
      </Stack.Item>
    </Stack>
  )
}
