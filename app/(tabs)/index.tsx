import { router } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HomeHeader } from '@/components/home/HomeHeader';
import { ImpactCard } from '@/components/home/ImpactCard';
import { QuickActions } from '@/components/home/QuickActions';
import { RecentContributions } from '@/components/home/RecentContributions';
import { TrendingRequests } from '@/components/home/TrendingRequests';

import {
  MOCK_USER,
  MOCK_IMPACT,
  MOCK_TRENDING_REQUESTS,
  MOCK_RECENT_CONTRIBUTIONS,
} from '@/mock/home';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const onAskForHelp = () => {
    router.push('/(tabs)/create');
  };

  const onBrowseRequests = () => {
    router.push('/(tabs)/browse');
  };

  const onSeeAll = () => {
    router.push('/(tabs)/browse');
  };

  const onRequestPress = (id: string) => {
    router.push(`/(tabs)/request/${id}`);
  };

  const onSeeAllContributions = () => {
    router.push('/(tabs)/activity');
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.content, { paddingHorizontal: 24 }]}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader
          firstName={MOCK_USER.firstName}
          role={MOCK_USER.role}
        />
        <ImpactCard
          totalGiven={MOCK_IMPACT.totalGiven}
          peopleHelped={MOCK_IMPACT.peopleHelped}
          weeklyHelped={MOCK_IMPACT.weeklyHelped}
        />
        <QuickActions
          onAskForHelp={onAskForHelp}
          onBrowseRequests={onBrowseRequests}
        />
        <TrendingRequests
          requests={MOCK_TRENDING_REQUESTS}
          onSeeAll={onSeeAll}
          onRequestPress={onRequestPress}
        />
        <RecentContributions
          contributions={MOCK_RECENT_CONTRIBUTIONS}
          onSeeAll={onSeeAllContributions}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 24,
  },
});
