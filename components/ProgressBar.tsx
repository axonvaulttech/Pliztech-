import { StyleSheet, View } from 'react-native';

const TRACK_COLOR = '#E5E7EB';
const FILL_COLOR = '#2E8BEA';

export interface ProgressBarProps {
  /** Value between 0 and 100 */
  percent: number;
  height?: number;
  trackColor?: string;
  fillColor?: string;
}

export function ProgressBar({
  percent,
  height = 6,
  trackColor = TRACK_COLOR,
  fillColor = FILL_COLOR,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percent));

  return (
    <View style={[styles.track, { height, backgroundColor: trackColor }]}>
      <View
        style={[
          styles.fill,
          {
            width: `${clamped}%`,
            height,
            backgroundColor: fillColor,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    borderRadius: 999,
    overflow: 'hidden',
    width: '100%',
  },
  fill: {
    borderRadius: 999,
  },
});
