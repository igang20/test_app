import StyledText from '@/components/StyledText'
import { COLORS } from '@/constant/ui'
import React from 'react'
import { StyleSheet, View } from 'react-native'

type HeaderProps = {
  totalTodos: number
  completedTodos: number
}

const Header: React.FC<HeaderProps> = ({ totalTodos, completedTodos }) => {
  return (
    <View style={styles.continer}>
      <View style={styles.contentWrapper}>
        <StyledText>Header</StyledText>
        <StyledText>22 August 2025</StyledText>
      </View>
      <StyledText>
        Completed: {completedTodos}/{totalTodos}
      </StyledText>
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
  continer: {
    paddingTop: 80,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.SECONDARY_BCKG
  },
  contentWrapper: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  }
})
