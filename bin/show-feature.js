#!/usr/bin/env node
import { evaluateFeature } from '../src/index.js';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

if (!argv.key && !argv.cron && !argv.from && !argv.to) {
  console.log('Usage: show-feature --key=weekday [--from=YYYY-MM-DD] [--to=YYYY-MM-DD] [--cron="0 9 * * 1-5"] [--timezone="Region/City"] [--debug]');
  process.exit(1);
}

const result = evaluateFeature({
  key: argv.key,
  fromDate: argv.from,
  toDate: argv.to,
  cron: argv.cron,
  timezone: argv.timezone || 'local',
  debug: !!argv.debug
});

console.log(result ? '✅ Feature is enabled' : '🚫 Feature is disabled');
