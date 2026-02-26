import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ProgressBar } from '@/components/ProgressBar';

import type { TrendingRequest } from '@/mock/home';

const BRAND_BLUE = '#2E8BEA';
const HEADING = '#1F2937';
const BODY = '#6B7280';

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString()}`;
}

export interface RequestCardProps {
  request: TrendingRequest;
  onPress: () => void;
}

export function RequestCard({ request, onPress }: RequestCardProps) {
  const { name, initial, avatarColor, timeAgo, text, raised, goal, percent } = request;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      accessibilityRole="button"
      accessibilityLabel={`Request by ${name}: ${text.slice(0, 50)}...`}
    >
      <View style={styles.topRow}>
        <View style={[styles.avatar, { backgroundColor: avatarColor }]}>
          <Text style={styles.avatarText}>{initial}</Text>
        </View>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.timeAgo}>{timeAgo}</Text>
      </View>

      <Text style={styles.text} numberOfLines={3}>
        {text}
      </Text>

      <View style={styles.amountRow}>
        <Text style={styles.amount}>
          {formatNaira(raised)} of {formatNaira(goal)}
        </Text>
        <Text style={styles.percent}>{percent}%</Text>
      </View>

      <ProgressBar percent={percent} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  pressed: {
    opacity: 0.95,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: HEADING,
  },
  timeAgo: {
    fontSize: 13,
    color: BODY,
  },
  text: {
    fontSize: 14,
    color: HEADING,
    lineHeight: 20,
    marginBottom: 12,
  },
  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  amount: {
    fontSize: 14,
    color: BODY,
  },
  percent: {
    fontSize: 14,
    fontWeight: '600',
    color: BRAND_BLUE,
  },
});
