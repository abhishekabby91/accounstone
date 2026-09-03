'use client';

import { openInquiry, type InquiryRequest } from '@/components/inquiry-modal';

/**
 * Turns a card that has nowhere to go into one that asks for the enquiry.
 *
 * Most card blocks on this site describe work we do - a workstream, a
 * deliverable, a stage of the close - and then stop. This makes that same card
 * clickable, and the click opens the form over the page rather than scrolling
 * the reader away from what they were reading.
 *
 * Implemented as an overlay button rather than by wrapping the card in a
 * `<button>`. These cards contain headings and lists, which are flow content
 * and are not valid inside a button - and a screen reader flattens anything it
 * does contain into one long accessible name. So the card keeps its own markup
 * and semantics, and a transparent button stretched across it carries the
 * click and the accessible name.
 *
 * It is a button, not a link to `#inquiry`: nothing is being navigated to, and
 * an anchor would move the reader away from the card they just showed interest
 * in. `className` passes straight through to the wrapper, so a card keeps the
 * styling and the flex/grid behaviour it already had.
 */

interface InquiryTriggerProps extends InquiryRequest {
  className?: string;
  /** The button's accessible name. Say what the reader gets, not "click here". */
  label?: string;
  children: React.ReactNode;
}

export default function InquiryTrigger({
  className = '',
  label,
  children,
  ...request
}: InquiryTriggerProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
      <button
        type="button"
        onClick={() => openInquiry(request)}
        aria-haspopup="dialog"
        className="absolute inset-0 z-[1] cursor-pointer rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span className="sr-only">{label ?? 'Ask us about this'}</span>
      </button>
    </div>
  );
}
