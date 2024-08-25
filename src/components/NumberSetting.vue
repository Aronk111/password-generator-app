<script setup>
	import { ref } from 'vue';

	const emit = defineEmits(['nums-changed'])
	const props = defineProps(['initialValue'])

	const useNums = ref(
		props.initialValue??false
	)
	const toggleNums = () => {
		useNums.value = !useNums.value
		emit('nums-changed', useNums.value)
	}
</script>

<template>
	<div class="generator-setting">
		<label for="use-nums" class="nums">
			<input type="checkbox" id="use-nums" :checked="useNums" @change="toggleNums">
			<span class="checkmark">Use Numbers</span>
		</label>
	</div>
</template>

<style>
.nums {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.25rem;

	user-select: none;

	cursor: pointer;
}
</style>