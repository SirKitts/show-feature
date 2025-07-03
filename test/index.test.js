// test/index.test.js
import { evaluateFeature } from '../src/index.js';

const result = evaluateFeature({
  key: 'weekday',
  fromDate: '2024-02-29',
  toDate: '2025-12-31',
  timezone: 'Australia/Sydney',
  debug: true
});

console.log('✅ Feature enabled:', result);
