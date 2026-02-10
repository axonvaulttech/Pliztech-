import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const HEIGHT = 56;
const BORDER_RADIUS = 999;
const BORDER_COLOR = '#D1D5DB';
const LABEL_COLOR = '#111827';

export type SocialProvider = 'apple' | 'google';

const PROVIDER_CONFIG: Record<
  SocialProvider,
  { icon: keyof typeof Ionicons.glyphMap; label: string }
> = {
  apple: { icon: 'logo-apple', label: 'Apple' },
  google: { icon: 'logo-google', label: 'Google' },
};

export interface SocialButtonProps {
  provider: SocialProvider;
  onPress: () => void;
  accessibilityLabel?: string;
}

export function SocialButton({
  provider,
  onPress,
  accessibilityLabel,
}: SocialButtonProps) {
  const { icon, label } = PROVIDER_CONFIG[provider];
  const a11y = accessibilityLabel ?? `Sign in with ${label}`;

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      onPress={onPress}
      accessibilityLabel={a11y}
      accessibilityRole="button"
    >
      <View style={styles.iconCircle}>
        <Ionicons name={icon} size={22} color={LABEL_COLOR} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: BORDER_RADIUS,
    minHeight: HEIGHT,
    width: '100%',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: LABEL_COLOR,
  },
});
