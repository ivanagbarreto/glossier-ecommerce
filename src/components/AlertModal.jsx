import React from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../global/colors";

const AlertModal = ({ visible, title, message, onConfirm, onCancel, confirmText = "OK", cancelText }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>

          <View style={styles.buttonContainer}>
            {onCancel && (
              <Pressable style={[styles.button, styles.cancel]} onPress={onCancel}>
                <Text style={styles.buttonText}>{cancelText || "Cancelar"}</Text>
              </Pressable>
            )}

            {onConfirm && (
              <Pressable style={[styles.button, styles.confirm]} onPress={onConfirm}>
                <Text style={styles.buttonText}>{confirmText}</Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 12,
    width: "80%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  confirm: {
    backgroundColor: colors.primary,
  },
  cancel: {
    backgroundColor: colors.gray,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
  },
});