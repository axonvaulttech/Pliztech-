import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

const LOGO = require('@/assets/images/pliz-logo.png');

export function RequestDetailHeader() {
  return (
    <View style={styles.header}>
      <Pressable
        onPress={() => router.back()}
        style={styles.headerButton}
        accessibilityLabel="Go back"
        accessibilityRole="button"
      >
        <Ionicons name="arrow-back" size={24} color="#1F2937" />
      </Pressable>
      <View style={styles.logoWrap}>
        <Image source={LOGO} style={styles.logo} contentFit="contain" />
      </View>
      <View style={styles.rightButtons}>
        <Pressable
          style={styles.headerButton}
          onPress={() => router.push('/(tabs)/notifications')}
          accessibilityLabel="Notifications"
          accessibilityRole="button"
        >
          <View>
            <Ionicons name="notifications-outline" size={24} color="#1F2937" />
          </View>
        </Pressable>
        <Pressable
          style={styles.headerButton}
          accessibilityLabel="Bookmark"
          accessibilityRole="button"
        >
          <Ionicons name="bookmark-outline" size={24} color="#1F2937" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    pointerEvents: 'none',
  },
  logo: {
    width: 40,
    height: 40,
  },
  rightButtons: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
});
