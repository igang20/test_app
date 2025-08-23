import React from 'react'
import { StyleSheet, View } from 'react-native'

import StyledButton from '@/components/StyledButton'
import StyledModal from '@/components/StyledModal'
import StyledText from '@/components/StyledText'

type DeleteTodoModalProps = {
  isOpen: boolean
  onClose: () => void
  onDelete: () => void
}
const DeleteTodoModal: React.FC<DeleteTodoModalProps> = ({ isOpen, onClose, onDelete }) => {
  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <View style={styles.modalContainer}>
        <StyledText variant="heading">Delete todo</StyledText>
        <StyledText>Are you sure you want to delete this todo?</StyledText>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton onPress={onClose} label="Cancel" variant="secondary" />
        <StyledButton onPress={onDelete} label="Delete" variant="delete" />
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
    gap: 10,
    marginTop: 20
  }
})

export default DeleteTodoModal
