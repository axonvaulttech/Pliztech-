import { router } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HomeHeader } from '@/components/home/HomeHeader';
import { ImpactCard } from '@/components/home/ImpactCard';
import { QuickActions } from '@/components/home/QuickActions';
import { RecentContributions } from '@/components/home/RecentContributions';
import { TrendingRequests } from '@/components/home/TrendingRequests';

import {
  MOCK_IMPACT,
  MOCK_RECENT_CONTRIBUTIONS,
  MOCK_TRENDING_REQUESTS,
  MOCK_USER,
} from '@/mock/home';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const onAskForHelp = () => {
    router.push('/(tabs)/(main)/create');
  };

  const onBrowseRequests = () => {
    router.push('/(tabs)/(main)/browse');
  };

  const onSeeAll = () => {
    router.push('/(tabs)/(main)/browse');
  };

  const onSeeAllContributions = () => {
    router.push('/(tabs)/(main)/activity');
  };

  const onNotifications = () => {
    router.push('/(tabs)/notifications');
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]} collapsable={false}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.content, { paddingHorizontal: 24 }]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <HomeHeader
          firstName={MOCK_USER.firstName}
          role={MOCK_USER.role}
          onNotificationPress={onNotifications}
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
