# Tech Stack

React 19, TypeScript, npm, Node.js, CSS Modules, OpenProps, React Hook Form, Radix-UI, lucide-react, Recharts.

Navigation is hash-based (see `App.tsx`'s `hashchange` listener) — there is no routing library. Do not add react-router or any other router; wire new pages into the `App.tsx` switch statement and `Navigation.tsx` instead.

## CSS Modules

- Any time you add or modify a CSS-Module or global style file, you **must** import it in the associated component (or in your root entry) so it actually takes effect.

## Lucide React Icons

- Before importing an icon, verify it's a named export of `lucide-react`. If it isn't, fallback to the 'square' icon.

## Forbidden & Read-Only Files

1. READ-ONLY (Context Only)
   The content of certain files may be provided for informational purposes. You must not edit them directly.
   Example of such file might be `package.json`. If this file is provided you can see which packages and scripts are available. To add a dependency, you must use the appropriate tool.

2. STRICTLY FORBIDDEN (NO ACCESS)
   You must never read or modify the following files and directories under any circumstances:
   - `.gitignore`
   - `package-lock.json`
   - `tsconfig.json`
   - `.github/`

# Forbidden Technologies

Avoid using the following in your responses:

## Tailwind CSS

- Do not use Tailwind CSS for styling.
- Do not mention Tailwind CSS in any context.
- Do not use utility classes from Tailwind CSS.
