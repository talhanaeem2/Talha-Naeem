import { mergeStyles } from '@fluentui/react'

import ThemeColor from 'common/style/enums/themeColor'

export const h100 = mergeStyles({
  displayName: 'h100',
  height: '100%',
})

export const w100 = mergeStyles({
  displayName: 'w100',
  width: '100%',
})

export const bgBlack = mergeStyles({
  displayName: 'bgBlack',
  backgroundColor: ThemeColor.Black,
})
