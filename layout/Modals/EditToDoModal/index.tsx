import React, { useEffect, useState } from 'react'
import { Keyboard, StyleSheet, View } from 'react-native'

import StyledButton from '@/components/StyledButton'
import StyledTextInput from '@/components/StyledInput'
import StyledModal from '@/components/StyledModal'
import StyledText from '@/components/StyledText'
import { Todo } from '@/types/todo'

type EditToDoModalProps = {
  isOpen: boolean
  onClose: () => void
  onUpdate: (title: Todo['title']) => void
  currentTitle: Todo['title']
  children?: React.ReactNode
}

const EditToDoModal: React.FC<EditToDoModalProps> = ({
  isOpen,
  onClose,
  onUpdate,
  currentTitle,
  children
}) => {
  const [text, setText] = React.useState(currentTitle)
  const [inputError, setInputerror] = useState(false)

  useEffect(() => {
    text && setInputerror(false)
  }, [text])

  useEffect(() => {
    setText(currentTitle)
  }, [isOpen])
  const onPressSave = () => {
    if (!text) {
      setInputerror(true)
      return
    }
    onUpdate(text)
    Keyboard.dismiss()
    onClose()
  }
  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <View style={styles.modalContainer}>
        <StyledText variant="title">Edit todo</StyledText>
        <View style={styles.inputContainer}>
          <StyledTextInput value={text} onChangeText={setText} isError={inputError} />
        </View>
        <View style={styles.buttonContainer}>
          <StyledButton onPress={onClose} label="Cancel" variant="secondary" />
          <StyledButton onPress={onPressSave} label="Save" disabled={inputError} />
        </View>
      </View>
    </StyledModal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    gap: 20
  },
  inputContainer: {
    minHeight: 60
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10
  }
})

export default EditToDoModal
