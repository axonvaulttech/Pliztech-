import { StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/components/Screen';

export default function ActivityScreen() {
  return (
    <Screen backgroundColor="#FFFFFF">
      <View style={styles.content}>
        <Text style={styles.title}>Activity</Text>
        <Text style={styles.subtitle}>Your activity and impact history</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
});
