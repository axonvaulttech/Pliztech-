import type { MeUser } from '@/lib/api/types';

/** Matches backend BegService tier 1 / requireKYCForAmountOver10000 */
export const BEG_TIER1_MAX_AMOUNT_NGN = 10_000;

function isIdentityVerified(user: MeUser | null): boolean {
  return Boolean(user?.verification?.isVerified ?? user?.verification?.documentVerified);
}

export function needsProfileCompletion(user: MeUser | null): boolean {
  return Boolean(user && !user.isProfileComplete);
}

function requiresIdentityVerificationForAmount(amountRequestedNgn: number): boolean {
  return (
    Number.isFinite(amountRequestedNgn) &&
    amountRequestedNgn > BEG_TIER1_MAX_AMOUNT_NGN
  );
}

/** Profile always required; identity verification only for requests above ₦10,000. */
export function canSubmitDonationRequest(
  user: MeUser | null,
  amountRequestedNgn?: number
): boolean {
  if (!user?.isProfileComplete) return false;
  if (
    amountRequestedNgn != null &&
    requiresIdentityVerificationForAmount(amountRequestedNgn) &&
    !isIdentityVerified(user)
  ) {
    return false;
  }
  return true;
}

export type DonationRequestBlockReason = 'profile' | 'verification';

export function getDonationRequestBlockReason(
  user: MeUser | null,
  amountRequestedNgn?: number
): DonationRequestBlockReason | null {
  if (needsProfileCompletion(user)) return 'profile';
  if (
    amountRequestedNgn != null &&
    requiresIdentityVerificationForAmount(amountRequestedNgn) &&
    !isIdentityVerified(user)
  ) {
    return 'verification';
  }
  return null;
}
