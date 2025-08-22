import StyledButton from '@/components/StyledButton'
import StyledTextInput from '@/components/StyledInput'
import { Todo } from '@/types/todo'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

type TodoCreatorProps = {
  onAddTodo: (title: Todo['title']) => void
}

const TodoCreator: React.FC<TodoCreatorProps> = ({ onAddTodo }) => {
  const [text, setText] = useState('')
  const [inputError, setError] = useState(false)

  useEffect(() => {
    if (inputError && text) {
      setError(false)
    }
  }, [text])

  const onPressAdd = () => {
    if (!text) {
      setError(true)
      return
    }

    onAddTodo(text)
    setText('')
  }

  return (
    <View style={styles.container}>
      <StyledTextInput
        placeholder="Add item..."
        value={text}
        onChangeText={(text) => {
          setText(text)
        }}
        isError={inputError}
      />
      <StyledButton label="+" onPress={onPressAdd} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 15,
    paddingHorizontal: 10,
    marginVertical: 20
  }
})

export default TodoCreator
