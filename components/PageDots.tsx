import { StyleSheet, View } from 'react-native';

const DOT_SIZE = 8;
const PILL_WIDTH = 24;
const PILL_HEIGHT = 8;
const GAP = 8;

const COLORS = {
  active: '#2D3748',
  inactive: '#CBD5E0',
} as const;

export interface PageDotsProps {
  total: number;
  activeIndex: number;
  accessibilityLabel?: string;
}

export function PageDots({
  total,
  activeIndex,
  accessibilityLabel = `Page ${activeIndex + 1} of ${total}`,
}: PageDotsProps) {
  return (
    <View
      style={styles.container}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="adjustable"
    >
      {Array.from({ length: total }, (_, i) => (
        <View
          key={i}
          style={[
            i === activeIndex ? styles.pill : styles.dot,
            i === activeIndex ? { backgroundColor: COLORS.active } : { backgroundColor: COLORS.inactive },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: GAP,
  },
  pill: {
    width: PILL_WIDTH,
    height: PILL_HEIGHT,
    borderRadius: PILL_HEIGHT / 2,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
  },
});
