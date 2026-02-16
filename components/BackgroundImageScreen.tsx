import { LinearGradient } from 'expo-linear-gradient';
import type { ImageSourcePropType } from 'react-native';
import {
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Transparent top → dark bottom for text readability
const GRADIENT_COLORS = ['transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.92)'] as const;
const PADDING_HORIZONTAL = 24;

export interface BackgroundImageScreenProps {
  source: ImageSourcePropType;
  children: React.ReactNode;
}

/**
 * Full-screen background image with bottom gradient overlay.
 * Content is bottom-aligned with safe area insets.
 */
export function BackgroundImageScreen({ source, children }: BackgroundImageScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={source}
        style={styles.image}
        resizeMode="cover"
        accessible={false}
      >
        <LinearGradient
          colors={[...GRADIENT_COLORS]}
          style={StyleSheet.absoluteFill}
        />
        <View
          style={[
            styles.content,
            {
              paddingBottom: insets.bottom + 16,
              paddingLeft: Math.max(insets.left, PADDING_HORIZONTAL),
              paddingRight: Math.max(insets.right, PADDING_HORIZONTAL),
            },
          ]}
        >
          {children}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    minHeight: 0, // Allow flex child to shrink below content size
  },
});
