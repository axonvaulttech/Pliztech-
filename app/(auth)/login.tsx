import { zodResolver } from '@hookform/resolvers/zod';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { z } from 'zod';

import { FormTextInput } from '@/components/FormTextInput';
import { PrimaryButton } from '@/components/PrimaryButton';
import { Screen } from '@/components/Screen';
import { SocialButton } from '@/components/SocialButton';

const LOGO = require('@/assets/images/pliz-logo.png');

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
  password: z.string().min(1, 'Password is required').min(8, 'Password must be at least 8 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const COLORS = {
  background: '#FFFFFF',
  brandBlue: '#2E8BEA',
  heading: '#1F2937',
  body: '#6B7280',
  link: '#2E8BEA',
} as const;

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSignIn = (data: LoginFormData) => {
    // Stub: replace with real auth later
    console.log('Sign in', data);
    router.replace('/(tabs)' as import('expo-router').Href);
  };

  const onForgotPassword = () => {
    router.push('/(auth)/forgot-password' as import('expo-router').Href);
  };

  const onApple = () => {
    // TODO: expo-auth-session / Apple Auth
  };

  const onGoogle = () => {
    // TODO: expo-auth-session / Google
  };

  const onRegister = () => {
    router.push('/(auth)/register' as import('expo-router').Href);
  };

  return (
    <Screen backgroundColor={COLORS.background} scrollable>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 24 : 0}
      >
        <View style={styles.content}>
          {/* Logo + brand name (logo centered; Pliz left-aligned in content) */}
          <View style={styles.logoSection}>
            <Image source={LOGO} style={styles.logo} contentFit="contain" />
            
          </View>
          <Text style={styles.appName}>Pliz</Text>
          <Text style={styles.welcomeTitle}>Welcome Back</Text>
          <Text style={styles.welcomeSubtitle}>
            Sign in to continue helping or receiving help
          </Text>

          <View style={styles.form}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <FormTextInput
                  label="Email Address"
                  leftIcon="person-outline"
                  placeholder="you@example.com"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  error={errors.email?.message}
                  accessibilityLabel="Email address"
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <FormTextInput
                  label="Password"
                  leftIcon="lock-closed-outline"
                  placeholder="Enter your password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  secureTextEntry={!passwordVisible}
                  onToggleSecure={() => setPasswordVisible((v) => !v)}
                  error={errors.password?.message}
                  accessibilityLabel="Password"
                />
              )}
            />

            <Pressable
              onPress={onForgotPassword}
              style={styles.forgotLinkWrap}
              accessibilityLabel="Forgot password"
              accessibilityRole="link"
            >
              <Text style={styles.forgotLink}>Forgot Password?</Text>
            </Pressable>

            <PrimaryButton
              label="Sign In"
              onPress={handleSubmit(onSignIn)}
              variant="gradient"
              accessibilityLabel="Sign in"
            />
          </View>

          <View style={styles.divider}>
            <Text style={styles.dividerText}>Or continue with</Text>
          </View>

          <View style={styles.socialColumn}>
            <SocialButton provider="apple" onPress={onApple} />
            <SocialButton provider="google" onPress={onGoogle} />
          </View>

          <View style={styles.registerRow}>
            <Text style={styles.registerPrompt}>Don&apos;t have an Account? </Text>
            <Pressable onPress={onRegister} accessibilityLabel="Register" accessibilityRole="link">
              <Text style={styles.registerLink}>Register</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    paddingBottom: 32,
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 72,
    height: 72,
    marginBottom: 8,
  },
  appName: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.brandBlue,
    alignSelf: 'flex-start',
  },
  welcomeTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.heading,
    marginBottom: 8,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: COLORS.body,
    marginBottom: 28,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  form: {
    width: '100%',
    marginBottom: 8,
  },
  forgotLinkWrap: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotLink: {
    fontSize: 14,
    color: COLORS.link,
    fontWeight: '500',
  },
  divider: {
    marginVertical: 24,
    alignItems: 'center',
  },
  dividerText: {
    fontSize: 14,
    color: COLORS.body,
  },
  socialColumn: {
    width: '100%',
    gap: 12,
  },
  registerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    flexWrap: 'wrap',
  },
  registerPrompt: {
    fontSize: 14,
    color: COLORS.body,
  },
  registerLink: {
    fontSize: 14,
    color: COLORS.link,
    fontWeight: '600',
  },
});
