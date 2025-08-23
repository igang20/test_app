import { useState } from 'react'
import { StyleSheet, Vibration, View } from 'react-native'

import DeleteTodoModal from '../Modals/DeleteTodoModal'
import EditToDoModal from '../Modals/EditToDoModal'
import StyledCheckBox from '@/components/Checkbox'
import StyledButton from '@/components/StyledButton'
import StyledText from '@/components/StyledText'
import { COLORS } from '@/constant/ui'
import { Todo } from '@/types/todo'

type TodoProps = {
  id: number
  title: string
  isCompleted: boolean
  onCheck: (id: Todo['id']) => void
  onDelete: (id: Todo['id']) => void
  onUpdateTitle: (id: Todo['id'], title: Todo['title']) => void
}

const TodoItem: React.FC<TodoProps> = ({
  id,
  title,
  isCompleted,
  onCheck,
  onDelete,
  onUpdateTitle
}) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)
  const onPressCheck = () => {
    onCheck(id)
  }

  const onPressDelete = () => {
    setDeleteModalOpen(true)
  }

  const onConfirmDelete = () => {
    onDelete(id)
    Vibration.vibrate(50)
  }

  return (
    <View style={styles.container}>
      <StyledCheckBox check={isCompleted} onCheck={onPressCheck} />
      <StyledText
        style={[{ textDecorationLine: isCompleted ? 'line-through' : 'none' }, styles.title]}
      >
        {title}
      </StyledText>
      <View style={styles.controlContainer}>
        <StyledButton size="small" icon={'pencil'} onPress={() => setEditModalOpen(true)} />
        <EditToDoModal
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          onUpdate={(title) => {
            onUpdateTitle(id, title)
            setEditModalOpen(false)
          }}
          currentTitle={title}
        />
        <StyledButton size="small" icon={'trash'} variant={'delete'} onPress={onPressDelete} />
        <DeleteTodoModal
          isOpen={isDeleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onDelete={() => {
            onDelete(id)
            setDeleteModalOpen(false)
          }}
        />
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
