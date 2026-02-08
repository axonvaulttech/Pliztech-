import { StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/components/Screen';

export default function Onboarding3Screen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Onboarding 3</Text>
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
