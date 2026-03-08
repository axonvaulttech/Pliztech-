import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import type { ImageSourcePropType } from 'react-native';
import {
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

const ELLIPSE_IMAGE = require('@/assets/images/welcome-ellipse.png');
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Transparent top → dark bottom for text readability
const GRADIENT_COLORS = ['transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.92)'] as const;
// Lighter gradient when white ellipse is used: keep image vibrant
const GRADIENT_COLORS_ELLIPSE = ['transparent', 'transparent', 'rgba(0,0,0,0.15)'] as const;
const PADDING_HORIZONTAL = 24;

export interface BackgroundImageScreenProps {
  source: ImageSourcePropType;
  children: React.ReactNode;
  /** When true, shows a white ellipse at the bottom for content contrast */
  showBottomEllipse?: boolean;
}

/**
 * Full-screen background image with bottom gradient overlay.
 * Content is bottom-aligned with safe area insets.
 */
export function BackgroundImageScreen({
  source,
  children,
  showBottomEllipse = false,
}: BackgroundImageScreenProps) {
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
          colors={showBottomEllipse ? [...GRADIENT_COLORS_ELLIPSE] : [...GRADIENT_COLORS]}
          style={StyleSheet.absoluteFill}
        />
        {showBottomEllipse && (
          <Image
            source={ELLIPSE_IMAGE}
            style={styles.bottomEllipse}
            contentFit="cover"
          />
        )}
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

const BOTTOM_ELLIPSE_HEIGHT = 320;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    overflow: 'hidden',
  },
  bottomEllipse: {
    position: 'absolute',
    bottom: 0,
    left: -24,
    right: -24,
    height: BOTTOM_ELLIPSE_HEIGHT,
    borderTopLeftRadius: 9999,
    borderTopRightRadius: 9999,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    minHeight: 0, // Allow flex child to shrink below content size
  },
});
