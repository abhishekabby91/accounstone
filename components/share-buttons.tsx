'use client';

import { Linkedin, Twitter, Link2, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  url: string;
  title: string;
}

/**
 * Real share functionality for guide/insight articles -- the actual
 * mechanism that helps content perform when shared on social media:
 * a LinkedIn or X post that links back to a specific article (with a
 * pre-filled, on-topic caption) gets real engagement and referral
 * traffic, and gives search engines genuine social signals and
 * inbound links to associate with the piece. This doesn't make a
 * social post "rank" by itself, but it's the concrete lever a website
 * actually controls -- making sharing effortless and well-formatted,
 * rather than leaving it to visitors to manually copy a URL.
 */
export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const xShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail in some contexts (e.g. non-HTTPS preview);
      // fail silently rather than showing a broken error state.
    }
  };

  return (
    <div className="not-prose flex items-center gap-3 py-6 my-8 border-y-2 border-border">
      <span className="text-sm font-semibold text-muted">Share this article:</span>
      <a
        href={linkedInShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-border text-muted hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all"
      >
        <Linkedin size={16} />
      </a>
      <a
        href={xShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-border text-muted hover:bg-black hover:border-black hover:text-white transition-all"
      >
        <Twitter size={16} />
      </a>
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-border text-muted hover:border-primary hover:text-primary transition-all"
      >
        {copied ? <Check size={16} /> : <Link2 size={16} />}
      </button>
      {copied && <span className="text-xs text-accent font-medium">Link copied!</span>}
    </div>
  );
}
