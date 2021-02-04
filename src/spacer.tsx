import React, { useMemo } from 'react'
import { View } from 'react-native'
import { styles as s } from 'tachyons-react-native'

const styles = {
  padding: {
    'xx-small': { padding: 2 },
    'x-small': s.pa1,
    small: s.pa2,
    normal: s.pa3,
    large: s.pa4,
    'x-large': s.pa5,
    'xx-large': s.pa6,
  },
}

export interface SpacerProps {
  fill?: boolean
  size?: keyof typeof styles.padding
}

export function Spacer({ fill, size = 'normal' }: SpacerProps) {
  const style = useMemo(() => [styles.padding[size], fill && s.flex], [size, fill])
  return <View style={style} />
}
