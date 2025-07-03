<template>
  <div><slot v-if="show"></slot></div>
</template>

<script setup>
import { useFeatureToggle } from './useFeatureToggle.js';
const props = defineProps(['key', 'fromDate', 'toDate', 'timezone']);
const show = useFeatureToggle({
  key: props.key,
  fromDate: props.fromDate,
  toDate: props.toDate,
  timezone: props.timezone,
});
</script>
