# @sirkitts/show-feature

Smart, frontend-ready feature toggling based on **dayparts**, **weekdays**, and **date ranges** — with built-in support for:

- ✅ Native HTML `<show-feature>` tag
- ✅ Vue & React wrapper components + hooks
- ✅ CLI: `npx show-feature`
- ✅ Local or timezone-based evaluation
- ✅ ESM/CJS compatible builds

Perfect for time-aware banners, UI rollouts, experiments, and user previews.

# @sirkitts/show-feature

[![npm version](https://img.shields.io/npm/v/@sirkitts/show-feature?color=%2300b894&label=npm)](https://www.npmjs.com/package/@sirkitts/show-feature)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/SirKitts/show-feature/blob/main/LICENSE)
[![CI](https://img.shields.io/github/actions/workflow/status/SirKitts/show-feature/ci.yml?label=build&logo=github)](https://github.com/SirKitts/show-feature/actions)
[![Code style](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

---

## ✨ Use Cases

- Show a promotion only on **weekdays**
- Display a warning banner **after July 1st**
- Enable dev-only features during certain **months**
- Toggle components by **"morning", "noon", "night"**
- Run from a script or the terminal

---

## 🧪 Demo in HTML

```html
<script type="module" src="show-feature/webcomponent.js"></script>

<show-feature key="weekday" from="2024-01-01" to="2025-12-31">
  <p>Only visible on weekdays ✅</p>
</show-feature>

### 🧱 React

import { ShowFeature } from 'show-feature/react/ShowFeature';
```
<ShowFeature key="morning" fromDate="2024-02-29">
  <PromoBanner />
</ShowFeature>
```

Or as a hook:

```
import { useFeatureToggle } from 'show-feature/react';

const show = useFeatureToggle({ key: 'weekday' });
```

### 🔧 Vue

```
<script setup>
import { useFeatureToggle } from 'show-feature/vue';

const show = useFeatureToggle({ key: 'weekday' });
</script>

<template>
  <Promo v-if="show" />
</template>
```

Or the full wrapper:
```
<template>
  <ShowFeature key="weekday" toDate="2025-12-31">
    <LimitedTimeOffer />
  </ShowFeature>
</template>
```

### 🛠 CLI

npx show-feature --key=weekday --from=2024-02-29 --to=2025-12-31 --timezone=Australia/Sydney

✔️ Output:
✅ Feature is enabled

Also supports JSON configs:

npx show-feature --config=flags.json

```
// flags.json
{
  "key": "weekday",
  "fromDate": "2024-01-01",
  "toDate": "2025-12-31",
  "timezone": "Australia/Sydney"
}
```

### 💡 Supported Keys

| Key       | Meaning                |
|-----------|------------------------|
| `weekday` | Monday–Friday          |
| `weekend` | Saturday & Sunday      |
| `morning` | Before 11 AM           |
| `noon`    | 11 AM – 5 PM           |
| `night`   | After 5 PM             |
| `mon–sun` | Specific day of week   |
| `jan–dec` | Specific month of year |

Combine with optional fromDate, toDate, and timezone.

### 📦 Installation

npm install @sirkitts/show-feature

### 🧩 Import Paths

| Platform     | Import Path                                                |
|--------------|------------------------------------------------------------|
| Core         | `import { evaluateFeature } from 'show-feature/core'`      |
| Native HTML  | `<script type="module" src="show-feature/webcomponent.js">` |
| Vue (Hook)   | `import { useFeatureToggle } from 'show-feature/vue'`      |
| Vue (Component) | `import ShowFeature from 'show-feature/vue/ShowFeature.vue'` |
| React (Hook) | `import { useFeatureToggle } from 'show-feature/react'`    |
| React (Component) | `import { ShowFeature } from 'show-feature/react/ShowFeature'` |
| CLI          | `npx show-feature`                                         |


### 👨‍🔧 Dev Tips

Uses Luxon or timezone-aware math
Ships as ESM + CommonJS (exports ready)
Works on Node ≥16, browsers, and SSR

### 🪪 License
MIT © SirKitts
