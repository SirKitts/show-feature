# React Usage

Use `@sirkitts/show-feature` in React via:

- `useFeatureToggle(key)` hook
- `<ShowFeature>` component

---

## 🧩 Hook Usage

```tsx
import { useFeatureToggle } from 'show-feature/react';

const isVisible = useFeatureToggle('jan');

return isVisible ? <Banner /> : null;

The hook returns true or false based on the key evaluation.

🔧 Component Usage

import { ShowFeature } from 'show-feature/react/ShowFeature';

export default function Page() {
  return (
    <ShowFeature key="weekend">
      <FooterBadge />
    </ShowFeature>
  );
}

Internally uses the same logic as the hook.
🧪 Simulating Clock

Pass an optional now override:

<ShowFeature key="morning" now="2025-07-04T08:00" />

You can also override timezone with:

<ShowFeature key="weekday" timezone="America/Los_Angeles" />

⚙️ Props Reference
Prop	Type	Description
key	string	Condition key: weekday, mon, etc.
from	string	Start date in YYYY-MM-DD
to	string	End date in YYYY-MM-DD
timezone	string	Timezone IANA string (e.g., UTC)
now	string	Optional ISO datetime override
children	ReactNode	Shown only when condition is met
