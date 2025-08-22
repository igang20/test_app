import { COLORS } from '@/constant/ui'
import { StyleSheet, Text, TextProps } from 'react-native'

type StyledTextProps = TextProps

const StyledText: React.FC<StyledTextProps> = ({ style, ...props }) => {
  return <Text style={[styles.base, style]} {...props} />
}

const styles = StyleSheet.create({
  base: { color: COLORS.PRIMATY_TEXT }
})

export default StyledText
