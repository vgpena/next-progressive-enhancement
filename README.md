# Next.js Progressive Enhancement Test

Here's a small test case for progressive enhancement in a statically-rendered Next.js app. I wanted to see what Next.js output is like with JS turned off, and what we can do to swap in JS-reliant interactive UI components for their static, pure HTML counterparts.

In this example, I made a (very naïve) Accordion component which swaps out expanded-by-default, non-interactive sections for contracted-by-default, interactive ones.

## Usage & Validation

This can only be validated from a static build of the website. Run `yarn static` to generate this build and start a simple server on `localhost:8000`. Toggle JS on and off in the browser settings, refreshing the page each time, to see the result.

## Strategy

The simplest way to perform this swap is to flag that we can use JS in a `useEffect` hook that runs once after the component renders. Then the accordion component re-renders with dynamic sections. (I was hoping I could sneak a `useLayoutEffect` in before the first render to prevent a FOUC, but no dice.)

## Gotchas
- *FOUC* - If JS is turned on, you may see a flash of unstyled content when the page loads. I added a CSS animation on the `StaticAccordionSection` component that makes the static element less likely to become visible before JS is loaded. (I don't really like this 🤔 I was really looking for some `componentWillMount` functionality, which apparently shouldn't be used anymore (and can't be used with function components anyway).)
- *Hook Rendering Counter* - Currently, the `Accordion` keeps track of which section is open. My initial treatment of the `Accordion` had each section keep track of its own open/closed state. (The current version is more flexible and means I can programmatically control the open section, etc., but I was trying to go as absolutely naïve as possible to begin with.) With JS turned on, however, this triggered [Ye Olde "Rendered More Hooks Than During Previous Render" error](https://medium.com/@shanplourde/react-hooks-rendered-more-hooks-than-during-the-previous-render-d2c026d7cca3), since the hook-free `StaticAccordionSection` was rendered once, then the hook-using `DynamicAccordionSection`. I made the error go away by creating an unused hook _in_ the `StaticAccordionSection`, but this was clearly not the actual solution here.

---
✨ This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).✨ 

