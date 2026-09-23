# Contact Form / Email Functionality

## The problem

The contact form on the site (`Contact` component in
[src/pages/Home.tsx](src/pages/Home.tsx)) never actually sent an email. On
submit, it built a `mailto:` link and set `window.location.href` to it:

```js
window.location.href = `mailto:${contact.email}?subject=...&body=...`;
```

This only opens the **visitor's own** email client with a pre-filled draft —
it does not send anything itself. If the visitor has no default mail client
configured (very common on phones/work machines), or closes the window that
pops up, nothing is ever sent. The form always showed a "Thank you" message
regardless of whether an email actually went anywhere, which is why it
looked broken: no email was ever received on the other end.

This is a static site (Vite, built and deployed to GitHub Pages via
[.github/workflows/deploy.yml](.github/workflows/deploy.yml)) with **no
backend server**, so a normal server-side "send an email" endpoint isn't an
option here.

## The fix

Integrated [Web3Forms](https://web3forms.com) — a free service built exactly
for this scenario: static sites with no backend. The browser POSTs the form
data directly to Web3Forms' API, and they relay it as a real email to a
fixed inbox. No server, no OAuth tokens to expire, nothing for the site
owner to maintain.

Changes:

1. **[src/content/artist.ts](src/content/artist.ts)** — added
   `contact.web3formsAccessKey`, the public access key that authorizes
   submissions. This key is safe to keep in client-side code (Web3Forms'
   own docs embed it in plain HTML forms) — it only allows sending mail
   *to* the address that created it, not reading or doing anything else.

2. **[src/pages/Home.tsx](src/pages/Home.tsx)** — rewrote `handleSubmit` in
   the `Contact` component to POST the form's `FormData` to
   `https://api.web3forms.com/submit` instead of building a `mailto:` link.
   - Added a hidden honeypot checkbox (`botcheck`) — a standard spam
     trap that's invisible to real visitors but often filled in by bots.
   - Added `sending` / `error` state: the button now shows "Sending…" and
     disables itself while the request is in flight, and shows an inline
     error with a `mailto:` fallback if the request fails.

   Note: Web3Forms delivers every submission to a single fixed inbox — the
   one that was used to create the access key. Sending to a **different**
   or **additional** address per-request (the `ccemail` field) is a
   Pro-only feature; a live test confirmed the API rejects it on the free
   tier with `"You are trying to use a Pro feature, Please Upgrade to use
   ccemail"`. So the form's `access_key` must belong to whichever inbox
   should actually receive enquiries.

3. **[src/components/Button.tsx](src/components/Button.tsx)** — added a
   `disabled` prop so the submit button can be disabled while sending.

## Verification

- `npx tsc --noEmit` — passes.
- `npm run build` — builds successfully.
- Automated end-to-end testing (both a raw `curl` POST and a real headless
  Chrome browser driven via Puppeteer, submitting the actual rendered form)
  was **blocked by Web3Forms' own Cloudflare bot protection** before it
  reached their backend. This isn't specific to this integration — their
  plain marketing site (`www.web3forms.com`) returned the same Cloudflare
  challenge to the automated tooling. Real, human-driven browsers are not
  affected by this.
- Because of that, the live send test needed a normal browser click rather
  than an automated one — confirmed working by the site owner via a manual
  submission on 2026-09-12, initially received at
  `safal.mukhia.protiviti@gmail.com` (the email used to create the first
  test key).
- The artist then created her own Web3Forms access key using
  `kalilladoscope@gmail.com` and it was swapped into
  `contact.web3formsAccessKey` in `artist.ts` the same day, so production
  submissions now go directly to her own inbox — no other code changes
  were needed, confirming the key is the only thing that determines the
  destination.

## How to test it yourself

1. Run `npm run dev` and open the printed local URL.
2. Scroll to "Get in Touch", fill in the form, and click **Send Message**.
3. You should see "Thank you — your message has been sent..." and an email
   should arrive within a few seconds at whichever inbox owns the access
   key currently in `artist.ts`.

## Notes / things to keep in mind

- The Web3Forms free tier allows 250 submissions/month, more than enough
  for a portfolio contact form.
- If the access key is ever compromised/abused, a new one can be generated
  free at web3forms.com and swapped into `artist.ts` — no other code
  changes needed.
