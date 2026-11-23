/**
 * All external profile links for the /connect hub page.
 * Grouped by `category` — rendered as separate sections in the UI.
 */

const connectLinks = [
  // ── Primary ──────────────────────────────────────────────
  {
    name: "Portfolio",
    url: "/",
    category: "Primary",
    iconKey: "portfolio",
  },
  {
    name: "GitHub",
    url: "https://github.com/mrsatyampatel",
    category: "Primary",
    iconKey: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/satyam-patel-221a69370",
    category: "Primary",
    iconKey: "linkedin",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/_heyypatel",
    category: "Primary",
    iconKey: "x",
  },
  {
    name: "Email",
    url: "mailto:patelsatyam1735@gmail.com",
    category: "Primary",
    iconKey: "email",
  },

  // ── Coding & Competitive Programming ─────────────────────
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/heyypatel/",
    category: "Coding & Competitive Programming",
    iconKey: "leetcode",
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/heyypatel",
    category: "Coding & Competitive Programming",
    iconKey: "geeksforgeeks",
  },
];

export const categoryOrder = [
  "Primary",
  "Coding & Competitive Programming",
];

export default connectLinks;
