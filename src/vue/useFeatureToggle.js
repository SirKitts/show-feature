import { computed } from 'vue';
import { evaluateFeature } from '../index.js';

export function useFeatureToggle(config) {
  return computed(() => evaluateFeature(config));
}
