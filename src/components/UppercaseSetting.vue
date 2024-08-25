<script setup>
	import { ref } from 'vue';

	const emit = defineEmits(['upper-changed'])
	const props = defineProps(['initialValue'])

	const useUpper = ref(
		props.initialValue??false
	)
	const toggleUpper = () => {
		useUpper.value = !useUpper.value
		emit('upper-changed', useUpper.value)
	}
</script>

<template>
	<div class="generator-setting">
		<label for="use-upper" class="upper">
			<input type="checkbox" id="use-upper" :checked="useUpper" @change="toggleUpper">
			<span class="checkmark">Use Uppercase</span>
		</label>
	</div>
</template>

<style>
.upper {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.25rem;

	user-select: none;

	cursor: pointer;
}
</style>