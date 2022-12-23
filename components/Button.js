import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress}) {
  if (theme === "primary") {
    return (
      <View
      style={[styles.buttonContainer, { borderWidth: 4, borderColor: "brown", borderRadius: 18 }]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "green" }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="blue"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "yellow" }]}>{label}</Text>
        </Pressable>
    </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 28,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
    },
    button: {
      borderRadius: 22,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonIcon: {
      paddingRight: 9,
    },
    buttonLabel: {
      color: 'yellow',
      fontSize: 18,
    },
  });