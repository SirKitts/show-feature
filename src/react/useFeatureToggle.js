import { useMemo } from 'react';
import { evaluateFeature } from '../index.js';

export function useFeatureToggle(config) {
  return useMemo(() => evaluateFeature(config), [JSON.stringify(config)]);
}
