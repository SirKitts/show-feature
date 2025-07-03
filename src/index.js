import { DateTime } from 'luxon';
import cronParser from 'cron-parser';

const parseExpression =
  typeof cronParser === 'function'
    ? cronParser
    : cronParser.parseExpression ??
      cronParser.default?.parseExpression ??
      (() => {
        throw new Error('parseExpression is not available in cron-parser');
      });

// ESM workaround to support default export
// const parseExpression = (cronParser.default || cronParser);

const days = ['morning', 'noon', 'night'];
const weeks = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const moreKeywords = ['day', 'week', 'weekday', 'weekend', 'month', 'year'];
const keywords = [...days, ...weeks, ...months, ...moreKeywords];

function evaluateFeature(config = {}) {
  const {
    key = 'day',
    fromDate,
    toDate,
    cron,
    timezone = 'local',
    debug = false
  } = config;

  const now = timezone === 'local'
    ? DateTime.local()
    : DateTime.now().setZone(timezone);

  const today = now.startOf('day');
  const keyword = key.toLowerCase();

  if (!keywords.includes(keyword)) {
    if (debug) console.warn(`[feature-flags] Unknown keyword: ${keyword}`);
    return false;
  }

  if (debug) {
    console.log(`[feature-flags debug]`);
    console.log(`• now: ${now.toISO()}`);
    console.log(`• keyword: ${keyword}`);
    if (fromDate) console.log(`• fromDate: ${fromDate}`);
    if (toDate) console.log(`• toDate: ${toDate}`);
    if (cron) console.log(`• cron: ${cron}`);
  }

  const matchesKeyword = (() => {
    if (days.includes(keyword)) return getCurrentDay(now) === keyword || keyword === 'day';
    if (weeks.includes(keyword) || ['weekday', 'weekend'].includes(keyword)) return getCurrentWeek(now, keyword);
    if (months.includes(keyword)) return getCurrentMonth(now) === keyword;
    return false;
  })();

  const matchesDate = isDateInRange(today, fromDate, toDate, timezone);
  // const matchesCron = cron ? matchesCronSchedule(cron, now, debug) : true;

  return matchesKeyword && matchesDate;
}

function getCurrentDay(dt) {
  const hour = dt.hour;
  if (hour >= 17) return 'night';
  if (hour >= 11) return 'noon';
  return 'morning';
}

function getCurrentWeek(dt, key) {
  const dow = dt.weekday % 7; // Sunday = 0
  const dayStr = weeks[dow];
  if (key === 'weekday') return dow >= 1 && dow <= 5;
  if (key === 'weekend') return dow === 0 || dow === 6;
  return key === dayStr;
}

function getCurrentMonth(dt) {
  return months[dt.month - 1];
}

function isDateInRange(today, fromDate, toDate, timezone) {
  const start = fromDate
    ? DateTime.fromISO(fromDate, { zone: timezone }).startOf('day')
    : null;
  const end = toDate
    ? DateTime.fromISO(toDate, { zone: timezone }).startOf('day')
    : null;

  if (start && end) return today >= start && today <= end;
  if (start) return today >= start;
  if (end) return today <= end;
  return true;
}

function matchesCronSchedule(expr, now, debug) {
  try {
    const interval = parseExpression(expr, {
      currentDate: now.toJSDate(),
      iterator: true
    });
    const next = interval.next().value;
    const matches = now.hasSame(DateTime.fromJSDate(next.value), 'minute');

    if (debug) {
      console.log(`• next cron match: ${next.value.toISOString()} → ${matches}`);
    }
    return matches;
  } catch (err) {
    if (debug) {
      console.warn(`[feature-flags] Invalid cron: "${expr}"`, err.message);
    }
    return false;
  }
}

export {
  evaluateFeature,
  getCurrentDay,
  getCurrentMonth,
  getCurrentWeek
};

console.log('🧪 parseExpression type:', typeof parseExpression);
