# Vue Usage

Use feature toggling directly in Vue apps via:

- `useFeatureToggle(key)` composable
- `<ShowFeature>` SFC wrapper

---

## 🧩 Composable Hook

```ts
import { useFeatureToggle } from 'show-feature/vue';

const isVisible = useFeatureToggle('night');

Returns a ref<boolean> — useful inside <template v-if="isVisible"> or setup logic.
🔧 Component: <ShowFeature>
vue

<template>
  <ShowFeature key="weekday">
    <Banner />
  </ShowFeature>
</template>

<script setup>
import ShowFeature from 'show-feature/vue/ShowFeature.vue';
</script>

🧪 Simulating Time

<ShowFeature key="noon" :now="'2025-07-04T13:00'" />

ou can pass an ISO datetime to simulate the current moment. Handy for previews and demos.
⚙️ Props Reference
Prop	Type	Description
key	string	weekday, night, mon, etc.
from	string	Start date (YYYY-MM-DD, optional)
to	string	End date (YYYY-MM-DD, optional)
timezone	string	IANA TZ like "Australia/Sydney"
now	string	ISO datetime string override

