'use client';

import { useState } from 'react';
import Link from 'next/link';

type Complexity = 'simple' | 'moderate' | 'complex';

const COMPLEXITY_MULTIPLIER: Record<Complexity, number> = {
  simple: 1,
  moderate: 1.3,
  complex: 1.65,
};

const COMPLEXITY_LABELS: Record<Complexity, string> = {
  simple: 'Simple (single entity, one revenue stream)',
  moderate: 'Moderate (multiple accounts, some complexity)',
  complex: 'Complex (multi-entity, inventory, or multi-channel sales)',
};

export default function CostEstimator() {
  const [transactions, setTransactions] = useState(150);
  const [accounts, setAccounts] = useState(2);
  const [complexity, setComplexity] = useState<Complexity>('simple');

  // Transparent, simple formula grounded in the general industry
  // pricing patterns discussed in this guide -- NOT a guaranteed
  // quote. The point is to give a reasonable planning range instantly,
  // rather than requiring a sales call just to get a ballpark.
  const base = 300;
  const transactionCost = Math.max(0, transactions - 50) * 1.5;
  const accountCost = Math.max(0, accounts - 1) * 35;
  const subtotal = (base + transactionCost + accountCost) * COMPLEXITY_MULTIPLIER[complexity];
  const low = Math.round((subtotal * 0.85) / 10) * 10;
  const high = Math.round((subtotal * 1.15) / 10) * 10;

  return (
    <div className="not-prose bg-input border-2 border-border rounded-xl p-6 md:p-8 space-y-6 my-8">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-primary">Quick Cost Estimator</h3>
        <p className="text-sm text-muted">
          A planning-purpose estimate, not a guaranteed quote. We'll give you exact pricing after a quick assessment of your actual books.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="transactions" className="flex justify-between text-sm font-semibold text-foreground mb-2">
            <span>Monthly transactions</span>
            <span className="figure text-primary">{transactions}</span>
          </label>
          <input
            id="transactions"
            type="range"
            min={20}
            max={1000}
            step={10}
            value={transactions}
            onChange={(e) => setTransactions(Number(e.target.value))}
            className="w-full accent-primary"
          />
        </div>

        <div>
          <label htmlFor="accounts" className="flex justify-between text-sm font-semibold text-foreground mb-2">
            <span>Bank & credit card accounts</span>
            <span className="figure text-primary">{accounts}</span>
          </label>
          <input
            id="accounts"
            type="range"
            min={1}
            max={15}
            step={1}
            value={accounts}
            onChange={(e) => setAccounts(Number(e.target.value))}
            className="w-full accent-primary"
          />
        </div>

        <div>
          <label htmlFor="complexity" className="block text-sm font-semibold text-foreground mb-2">
            Business complexity
          </label>
          <select
            id="complexity"
            value={complexity}
            onChange={(e) => setComplexity(e.target.value as Complexity)}
            className="w-full px-4 py-3 rounded-lg border-2 border-border bg-white focus:border-primary focus:outline-none transition-colors text-sm"
          >
            {(Object.keys(COMPLEXITY_LABELS) as Complexity[]).map((key) => (
              <option key={key} value={key}>{COMPLEXITY_LABELS[key]}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="pt-4 border-t-2 border-border">
        <p className="text-sm text-muted mb-1">Estimated monthly range</p>
        <p className="font-serif text-3xl font-bold text-primary figure">
          ${low.toLocaleString()} – ${high.toLocaleString()}
          <span className="text-base font-normal text-muted"> / month</span>
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center mt-4 px-6 py-3 rounded-lg bg-primary hover:bg-primary-light text-white font-semibold transition-all text-sm"
        >
          Get an Exact Quote
        </Link>
      </div>
    </div>
  );
}
