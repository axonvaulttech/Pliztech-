import Ionicons from '@expo/vector-icons/Ionicons';
import type { ComponentProps } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const INPUT_HEIGHT = 56;
const BORDER_RADIUS = 15;
const BORDER_COLOR = '#D1D5DB';
const ERROR_COLOR = '#DC2626';
const LABEL_COLOR = '#1F2937';
const BODY_COLOR = '#6B7280';
const INPUT_TEXT_COLOR = '#111827';

export interface FormTextInputProps
  extends Omit<ComponentProps<typeof TextInput>, 'style'> {
  label: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  /** When set, show eye toggle; pass secureTextEntry and onToggleSecure from parent. */
  secureTextEntry?: boolean;
  onToggleSecure?: () => void;
  error?: string;
  containerStyle?: ComponentProps<View>['style'];
}

export function FormTextInput({
  label,
  leftIcon,
  rightIcon,
  secureTextEntry = false,
  onToggleSecure,
  error,
  containerStyle,
  accessibilityLabel = label,
  ...inputProps
}: FormTextInputProps) {
  const showEyeToggle =
    onToggleSecure != null && (secureTextEntry === true || secureTextEntry === false);

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputWrapper,
          error ? styles.inputWrapperError : undefined,
        ]}
      >
        {leftIcon != null && (
          <Ionicons
            name={leftIcon}
            size={20}
            color={BODY_COLOR}
            style={styles.leftIcon}
          />
        )}
        <TextInput
          style={[styles.input, leftIcon != null && styles.inputWithLeftIcon]}
          placeholderTextColor={BODY_COLOR}
          secureTextEntry={secureTextEntry}
          accessibilityLabel={accessibilityLabel}
          {...inputProps}
        />
        {showEyeToggle ? (
          <Pressable
            onPress={onToggleSecure}
            style={styles.eyeButton}
            accessibilityLabel={secureTextEntry ? 'Show password' : 'Hide password'}
            accessibilityRole="button"
          >
            <Ionicons
              name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
              size={22}
              color={BODY_COLOR}
            />
          </Pressable>
        ) : rightIcon != null ? (
          <Ionicons name={rightIcon} size={20} color={BODY_COLOR} style={styles.rightIcon} />
        ) : null}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: LABEL_COLOR,
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: 16,
    minHeight: INPUT_HEIGHT,
  },
  inputWrapperError: {
    borderColor: ERROR_COLOR,
  },
  leftIcon: {
    marginRight: 10,
  },
  rightIcon: {
    marginLeft: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: INPUT_TEXT_COLOR,
    paddingVertical: 14,
    paddingHorizontal: 0,
  },
  inputWithLeftIcon: {
    paddingLeft: 0,
  },
  eyeButton: {
    padding: 4,
    marginLeft: 4,
  },
  error: {
    fontSize: 12,
    color: ERROR_COLOR,
    marginTop: 6,
  },
});
