# Playground 🧪

Test how feature toggles behave based on custom time and timezone. This is great for:

- Previewing future flags (e.g., Friday at 6 PM)
- Demoing `daypart` or `weekday` conditions
- Client previews without faking system time

---

## ⏰ Simulate "Now"

```html
<label>
  Simulated datetime:
  <input type="datetime-local" id="simulated-now" />
</label>


Pick a date/time and it will be passed as a data-simulated-now attribute to all <show-feature> blocks below.
🧪 Example Conditions

<show-feature key="morning">🌅 Good morning</show-feature>
<show-feature key="night">🌙 Night time</show-feature>
<show-feature key="weekday">📅 Weekday active</show-feature>
<show-feature key="jan">❄️ January flag</show-feature>


🔍 How it Works

We inject a simple <script> below that:

    Reads your simulated datetime input

    Loops through all <show-feature> elements

    Reapplies data-simulated-now to re-evaluate them

📜 Live Demo

This playground is also available standalone:

👉 

⚠️ Tip

To make this work locally, make sure your build includes the component loader:

<script type="module" src="/dist/webcomponent.js"></script>


