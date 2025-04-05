// components/Promos.tsx
"use client";

import { BadgePercent, Gift, Flame, Sparkles, Star } from "lucide-react";
import Link from "next/link";

export default function Promos() {
  return (
    <div className="space-y-4">
      {/* Promo 1 */}
      <div className="flex items-start gap-4 rounded-2xl border p-4 shadow-sm bg-muted/40">
        <div className="p-2 rounded-full bg-primary/10 text-primary">
          <BadgePercent className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold">Spring Sale - 25% OFF</h3>
          <p className="text-sm text-muted-foreground">
            Upgrade to Pro and save big! This offer is valid until April 30.
          </p>
          <Link href="/pricing" className="text-sm text-primary font-medium mt-2 inline-block">
            Upgrade Now →
          </Link>
        </div>
      </div>

      {/* Promo 2 */}
      <div className="flex items-start gap-4 rounded-2xl border p-4 shadow-sm bg-orange-50">
        <div className="p-2 rounded-full bg-orange-100 text-orange-600">
          <Gift className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold">Invite & Earn Rewards</h3>
          <p className="text-sm text-muted-foreground">
            Refer your friends and earn $10 credit for each signup.
          </p>
          <Link href="/referral" className="text-sm text-orange-600 font-medium mt-2 inline-block">
            Invite Friends →
          </Link>
        </div>
      </div>

      {/* Promo 3 */}
      <div className="flex items-start gap-4 rounded-2xl border p-4 shadow-sm bg-yellow-50">
        <div className="p-2 rounded-full bg-yellow-100 text-yellow-600">
          <Flame className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold">🔥 Hot New Features</h3>
          <p className="text-sm text-muted-foreground">
            We just launched advanced reporting, dark mode, and integrations with Slack & Zapier.
          </p>
          <Link href="/changelog" className="text-sm text-yellow-600 font-medium mt-2 inline-block">
            View Changelog →
          </Link>
        </div>
      </div>

      {/* Promo 4 */}
      <div className="flex items-start gap-4 rounded-2xl border p-4 shadow-sm bg-indigo-50">
        <div className="p-2 rounded-full bg-indigo-100 text-indigo-600">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold">Get Verified Badge</h3>
          <p className="text-sm text-muted-foreground">
            Boost trust with customers by verifying your business profile today.
          </p>
          <Link href="/verify" className="text-sm text-indigo-600 font-medium mt-2 inline-block">
            Verify Now →
          </Link>
        </div>
      </div>

      {/* Promo 5 */}
      <div className="flex items-start gap-4 rounded-2xl border p-4 shadow-sm bg-emerald-50">
        <div className="p-2 rounded-full bg-emerald-100 text-emerald-600">
          <Star className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold">Rate Us & Win</h3>
          <p className="text-sm text-muted-foreground">
            Leave a review on our platform and get a chance to win a free month of Pro.
          </p>
          <Link href="/reviews" className="text-sm text-emerald-600 font-medium mt-2 inline-block">
            Leave a Review →
          </Link>
        </div>
      </div>
    </div>
  );
}
