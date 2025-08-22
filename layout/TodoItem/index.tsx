import StyledButton from '@/components/StyledButton'
import StyledText from '@/components/StyledText'
import { COLORS } from '@/constant/ui'
import { StyleSheet, View } from 'react-native'

type TodoProps = {
  title: string
  isCompleted: boolean
}

const TodoItem: React.FC<TodoProps> = ({ title, isCompleted }) => {
  // const Todo: any  = ({title, isComplete}) => {
  // return <StyledText>{title}</StyledText>
  return (
    <View style={styles.container}>
      <StyledText style={{ textDecorationLine: isCompleted ? 'line-through' : 'none' }}>
        {title}
      </StyledText>
      <StyledButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 8,
    backgroundColor: COLORS.SECONDARY_BCKG
  }
})

export default TodoItem
