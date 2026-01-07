# Copilot instructions for this repository

This is a small Expo-managed React Native app using TypeScript. Keep suggestions tightly scoped to the existing Expo / managed workflow; avoid adding native modules or changing the app entry unless asked.

- Project entry: [index.ts](index.ts#L1-L10) — uses `registerRootComponent(App)` to bootstrap the app.
- Root UI: [App.tsx](App.tsx#L1-L40) — simple functional component, uses `StyleSheet.create` and `expo-status-bar`.
- Scripts: see [package.json](package.json#L1-L40) — use `npm run start`, `npm run ios`, `npm run android`, `npm run web` (powered by `expo start`).

Guidance for code changes
- Keep TypeScript types consistent with the existing pattern (no global type overrides). `@types/react` and `typescript` are dev deps.
- Prefer lightweight changes in `App.tsx` or new components under a new `components/` folder. Follow the existing style pattern (functional components + StyleSheet).
- For navigation or feature additions, propose using pure JS/TS libraries that are Expo-compatible without custom native builds.
- Do not add or assume native modules (expo prebuild/eject) without explicit confirmation.

Testing & debugging
- There are no test scripts configured. For quick validation, use the Expo client: run `npm run start` then open on device/emulator.
- Debug logs: use `console.log` and the Expo Metro bundler/debugger.

Project-specific patterns & examples
- Entry registration example: see [index.ts](index.ts#L1-L10).
- Simple component styling: see `styles` in [App.tsx](App.tsx#L18-L28).
- Asset usage: static files belong in `assets/`.

Integration points & constraints
- Main external deps: `expo`, `react`, `react-native`, `expo-status-bar`. Keep dependency updates conservative and compatible with the pinned Expo SDK (~54).
- The project is `private: true` in `package.json`; do not assume publishing.

When editing this file
- If `.github/copilot-instructions.md` already exists, merge preserving any repo-specific notes. Keep the file concise (20–50 lines) and focused on runnable instructions.

If anything here is unclear or you need project-level permissions (e.g. ejecting, adding native code), ask the repository owner before applying those changes.

— End of instructions —
