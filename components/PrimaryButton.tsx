import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const HEIGHT = 56;
const BORDER_RADIUS = 999;

const GRADIENT_COLORS = ['#2E8BEA', '#172033'] as const;
const DEFAULT_SOLID_BG = '#E07A5F'; // coral/salmon

export type PrimaryButtonVariant = 'gradient' | 'solid';

export interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  accessibilityLabel?: string;
  /** 'gradient' = blue gradient (default), 'solid' = solid fill */
  variant?: PrimaryButtonVariant;
  /** When variant="solid", background color (default: coral). Ignored when variant="gradient". */
  backgroundColor?: string;
  /** When true, button is not clickable and appears disabled */
  disabled?: boolean;
}

export function PrimaryButton({
  label,
  onPress,
  accessibilityLabel = label,
  variant = 'gradient',
  backgroundColor = DEFAULT_SOLID_BG,
  disabled = false,
}: PrimaryButtonProps) {
  const isSolid = variant === 'solid';

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
      ]}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled }}
    >
      {isSolid ? (
        <View style={[styles.gradient, { backgroundColor }]}>
          <Text style={styles.label}>{label}</Text>
        </View>
      ) : (
        <LinearGradient
          colors={[...GRADIENT_COLORS]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Text style={styles.label}>{label}</Text>
        </LinearGradient>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: HEIGHT,
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    width: '100%',
  },
  pressed: {
    opacity: 0.9,
  },
  disabled: {
    opacity: 0.5,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
});
