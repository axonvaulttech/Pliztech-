import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { RequestCard } from './RequestCard';

import type { TrendingRequest } from '@/mock/home';

const HEADING = '#1F2937';
const BRAND_BLUE = '#2E8BEA';

export interface TrendingRequestsProps {
  requests: readonly TrendingRequest[];
  onSeeAll: () => void;
  onRequestPress: (id: string) => void;
}

export function TrendingRequests({
  requests,
  onSeeAll,
  onRequestPress,
}: TrendingRequestsProps) {
  const renderItem = ({ item }: { item: TrendingRequest }) => (
    <RequestCard
      request={item}
      onPress={() => onRequestPress(item.id)}
    />
  );

  return (
    <View style={styles.section}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Trending Requests</Text>
        <Pressable
          onPress={onSeeAll}
          style={styles.seeAll}
          accessibilityLabel="See all requests"
          accessibilityRole="button"
        >
          <Text style={styles.seeAllText}>See all →</Text>
        </Pressable>
      </View>

      <FlatList
        data={[...requests]}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        scrollEnabled={false}
        removeClippedSubviews={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: HEADING,
  },
  seeAll: {
    padding: 4,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: BRAND_BLUE,
  },
  listContent: {
    paddingBottom: 8,
  },
});
