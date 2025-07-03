# CLI Usage

You can use `@sirkitts/show-feature` directly from the command line to check whether a feature should be shown based on current time, date, or other conditions.

---

## 🔧 Basic Usage

```bash
npx show-feature --key=weekday

Returns exit code 0 if active, 1 if inactive. You can also use it in shell scripts:
bash

if npx show-feature --key=morning; then
  echo "Good morning! 🎉"
fi


📑 Using a Config File

Flags can be defined in a JSON file:

flags.json

{
  "morning-banner": { "key": "morning" },
  "weekend-sale": { "key": "weekend" },
  "holiday-mode": { "from": "2025-12-24", "to": "2026-01-02" }
}

Run:
npx show-feature --config=flags.json --key=weekend-sale

⏱ Simulating Time

Pass --now to simulate evaluation at a specific datetime (in ISO format):

npx show-feature --key=night --now="2025-07-04T19:00"

🌏 Timezone Overrides

Use the --timezone flag to specify a timezone (IANA format):

npx show-feature --key=morning --timezone=Australia/Sydney

🧪 Debug Mode

Use --debug to get verbose output of match logic:

npx show-feature --key=jan --debug

This will print the parsed state, match evaluation, and time context.
🔄 CLI Flags Summary

Option	Description
--key	Shortcut for a built-in condition key (weekday, night, etc.)
--config	Load conditions from JSON file
--now	Override current date/time
--timezone	Set evaluation timezone
--debug	Show evaluation steps and context


