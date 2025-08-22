import StyledCheckBox from '@/components/Checkbox'
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
      <StyledCheckBox
        check={isCompleted}
        onCheck={() => {
          console.log('title')
        }}
      />
      <StyledText
        style={[{ textDecorationLine: isCompleted ? 'line-through' : 'none' }, styles.title]}
      >
        {title}
      </StyledText>
      <View style={styles.controlContainer}>
        <StyledButton size="small" icon={'pencil'} />
        <StyledButton size="small" icon={'trash'} variant={'delete'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 8,
    backgroundColor: COLORS.SECONDARY_BCKG
  },
  title: {
    alignSelf: 'flex-start',
    marginRight: 'auto',
    marginVertical: 'auto',
    marginLeft: 20
  },
  controlContainer: {
    flexDirection: 'row',
    gap: 5
  }
})

export default TodoItem
