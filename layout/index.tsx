import React from 'react'
import { StyleSheet, View } from 'react-native'

import StyledText from '@/components/StyledText'
import { COLORS } from '@/constant/ui'
import { formatDate } from '@/helpers/date'

type HeaderProps = {
  totalTodos: number
  completedTodos: number
}

const Header: React.FC<HeaderProps> = ({ totalTodos, completedTodos }) => {
  const formattedDate = formatDate(new Date())
  return (
    <View style={styles.continer}>
      <View style={styles.contentWrapper}>
        <StyledText variant={'title'}>ToDo app</StyledText>
        <StyledText variant="subtitle">{formattedDate}</StyledText>
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
