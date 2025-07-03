# HTML / Web Component Usage

`@sirkitts/show-feature` provides a native Web Component: `<show-feature>` that conditionally renders its content based on time, weekday, or date.

---

## 🔧 Basic Usage

```html
<show-feature key="weekday">
  <p>This content shows on weekdays.</p>
</show-feature>

If the condition is met, the contents will render inside the DOM; otherwise, they won’t appear at all.
⏱ Daypart Keys

You can use built-in keys like:

    morning: before 11 AM

    noon: between 11 AM and 5 PM

    night: after 5 PM

    weekday: Monday–Friday

    weekend: Saturday + Sunday

    mon, tue, ..., sun: specific weekday

    jan, feb, ..., dec: specific month

📅 Custom Date Ranges

<show-feature from="2025-12-01" to="2026-01-01">
  🎄 Holiday Sale!
</show-feature>

You can combine date-based logic with keys or dayparts.
🌏 Timezone

<show-feature key="night" timezone="Australia/Sydney">
  It's night in Sydney!
</show-feature>

Uses IANA timezone names like America/New_York or UTC.
🧪 Simulating Clock

For demos or testing, override time with:

<show-feature key="morning" data-simulated-now="2025-07-04T09:00">
  Pretending it’s morning.
</show-feature>

This is used by the Playground

🧬 Attributes
Attribute	Description
key	Built-in rule: weekday, noon, etc
from, to	Custom date range (YYYY-MM-DD)
timezone	Optional IANA timezone override
data-simulated-now	ISO datetime string to simulate "now"


