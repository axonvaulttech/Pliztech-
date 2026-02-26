export const MOCK_USER = {
  firstName: 'Michael',
  role: 'Community Supporter',
} as const;

export const MOCK_IMPACT = {
  totalGiven: 45000,
  peopleHelped: 12,
  weeklyHelped: 3,
} as const;

export const MOCK_TRENDING_REQUESTS = [
  {
    id: '1',
    name: 'Jamie R',
    initial: 'J',
    avatarColor: '#F59E0B',
    timeAgo: '2h ago',
    text: 'Need help covering unexpected medical bills this month as i have been sick and haven\'t been able to go to work.',
    raised: 9000,
    goal: 15000,
    percent: 63,
  },
  {
    id: '2',
    name: 'Alex T',
    initial: 'A',
    avatarColor: '#93C5FD',
    timeAgo: '5h ago',
    text: 'Struggling to afford groceries for my family this week. Any support would mean the world.',
    raised: 8950,
    goal: 9000,
    percent: 98,
  },
  {
    id: '3',
    name: 'Nnenna Ugwu',
    initial: 'N',
    avatarColor: '#86EFAC',
    timeAgo: '2h ago',
    text: 'Need assistance with school fees for my children. Every little bit helps.',
    raised: 12000,
    goal: 25000,
    percent: 48,
  },
] as const;

export type TrendingRequest = (typeof MOCK_TRENDING_REQUESTS)[number];

export const MOCK_RECENT_CONTRIBUTIONS = [
  {
    id: '1',
    contributorName: 'Morgan K',
    description: 'Utility bill assistance',
    amount: 5000,
    timeAgo: '2 hours ago',
  },
  {
    id: '2',
    contributorName: 'Taylor K.',
    description: 'School supplies',
    amount: 2500,
    timeAgo: '2 days ago',
  },
] as const;

export type RecentContribution = (typeof MOCK_RECENT_CONTRIBUTIONS)[number];
