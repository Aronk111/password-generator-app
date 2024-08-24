<script setup>
import { ref } from 'vue';
import { generate } from '../composables/passGen';

const emit = defineEmits(['generate'])

const currentPass = ref(
	JSON.parse(localStorage.getItem('currentPass'))??""
)

const makePassword = () => {
	currentPass.value = generate(32)
	emit('generate', currentPass.value)
	localStorage.setItem('currentPass', JSON.stringify(
		currentPass.value
	))
}

</script>

<template>
	<div>
		<button class="gen-button" @click="makePassword">
			Generate
		</button>
		<p v-show="currentPass.length" class="generated">{{ currentPass }}</p>
	</div>
</template>

<style>
.gen-button {
	padding: 0.25rem 0.5rem;
	border: 2px solid royalblue;
	border-radius: 0.25rem;
	font-size: 1.25rem;

	position: relative;
	left: 50%;
	transform: translateX(-50%);

	background-color: #4169e1;
	color: white;

	user-select: none;
}
.gen-button:hover {
	cursor: pointer;
	background-color: #4169e175;
	color: black;
}
.gen-button:active {
	background-color: #4169e150;
}

.generated {
	margin: 1rem 0;
	padding: 0.25rem;

	text-align: center;
	font-family: monospace;
	font-size: 1.5rem;

	background-color: #eee;
	border: 2px solid #ddd;
}
</style>