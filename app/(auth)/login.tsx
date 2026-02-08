import { StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/components/Screen';

export default function LoginScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
