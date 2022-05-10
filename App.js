import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.upperBlock}>
        <View style={styles.sideBlock}>
          <View style={styles.purple}>
          </View>
          <View style={styles.yellow}>
          </View>
          <View style={styles.pink}>
          </View>
        </View>
        <View style={[styles.sideBlock, styles.rowDir]}>
          <View style={styles.red}>
          </View>
          <View style={styles.blue}>
          </View>
        </View>
      </View>
      <View style={styles.lowerBlock}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperBlock: {
    flex: 1,
    flexDirection: 'row',
  },
  lowerBlock: {
    flex: 1,
    backgroundColor: 'lightgray'
  },
  sideBlock: {
    flex: 1,
  },
  rowDir: {
    flexDirection: 'row',
  },
  red: {
    flex: 3,
    backgroundColor: 'red'
  },
  blue: {
    flex: 1,
    backgroundColor: 'blue'
  },
  purple: {
    flex: 3,
    backgroundColor: 'purple'
  },
  yellow: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  pink: {
    flex: 1,
    backgroundColor: 'pink'
  },
});
