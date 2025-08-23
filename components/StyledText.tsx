import { StyleSheet, Text, TextProps } from 'react-native'

import { COLORS } from '@/constant/ui'

type StyledTextProps = TextProps & {
  variant?: 'primary' | 'title' | 'subtitle' | 'small' | 'heading'
}

const StyledText: React.FC<StyledTextProps> = ({ style, variant, ...props }) => {
  return (
    <Text
      style={[
        styles.base,
        style,
        variant === 'heading' ? styles.heading : null,
        variant === 'title' ? styles.title : null,
        variant === 'subtitle' ? styles.subTitle : null,
        variant === 'small' ? styles.small : null
      ]}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  base: { color: COLORS.PRIMATY_TEXT },
  primary: {},
  title: { fontSize: 32, lineHeight: 36, fontWeight: 'bold' },
  subTitle: { fontSize: 18, lineHeight: 24, fontWeight: 300 },
  small: { fontSize: 14, lineHeight: 18 },
  heading: { fontSize: 22, lineHeight: 26, fontWeight: 600 }
})

export default StyledText
