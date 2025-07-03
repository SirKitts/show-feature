import { useFeatureToggle } from './useFeatureToggle.js';

export function ShowFeature({ children, ...config }) {
  const show = useFeatureToggle(config);
  return show ? children : null;
}
