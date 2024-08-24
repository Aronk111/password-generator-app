<script setup>
const props = defineProps(["halfWidth", "rounded"])
</script>

<template>
	<div
		class="sep"
		:class="{halfWidth: halfWidth, rounded: rounded}"
	/>
</template>

<style>
.sep {
	border: 1.5px solid black;
}
.rounded {
	border-radius: 1rem;
}
.halfWidth {
	max-width: 50%;

	position: relative;
	left: 50%;
	transform: translateX(-50%);
}
</style>