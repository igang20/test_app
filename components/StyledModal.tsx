import React from 'react'
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

import { COLORS } from '@/constant/ui'

type StyledModalProps = {
  isOpen: boolean
  onClose: () => void

  children?: React.ReactNode
}

const StyledModal: React.FC<StyledModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Modal visible={isOpen} onRequestClose={onClose} animationType="fade" transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackgroundContainer}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View style={styles.modalContainer}>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackgroundContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    width: '90%',
    backgroundColor: COLORS.PRIMARY_BCKG,
    borderRadius: 10,
    padding: 20
  }
})

export default StyledModal
