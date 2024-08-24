<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['passChange'])
const props = defineProps(['initialValue'])
const passLength = ref(props.initialValue??16)

watch(passLength, () => {
	validateLength()
	emit('passChange', passLength.value)
})

function ChangePasswordLength(value) {
	passLength.value += value
}

const downStep = (alt) => {
	if (alt) {
		ChangePasswordLength(-3)
	} else {
		ChangePasswordLength(-1)
	}
}
const upStep = (alt) => {
	if (alt) {
		ChangePasswordLength(3)
	} else {
		ChangePasswordLength(1)
	}
}
const validateLength = () => {
	if (passLength.value < 8) {
		passLength.value = 8
	}
	if (passLength.value > 32) {
		passLength.value = 32
	} else {
		passLength.value = passLength.value
	}
}
</script>

<template>
	<div class="generator-setting">
		<label for="pass-length">Password Length</label>
		<div class="pass-length-setting">
			<button data-title="hold `ALT` to step by 3"
				@click="(e) => downStep(e.altKey)">
				-
			</button>
			<input
				type="number"
				placeholder="16"
				id="pass-length"
				v-model="passLength"
				@blur.prevent="validateLength"
			/>
			<button data-title="hold `ALT` to step by 3"
				@click="(e) => upStep(e.altKey)">
				+
			</button>
		</div>
	</div>
</template>

<style>
.generator-setting {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	background-color: #4169e120;
	max-width: fit-content;

	position: relative;
	left: 50%;
	transform: translateX(-50%);
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	margin: 1rem 0;
}
.pass-length-setting > label {
	user-select: none;
}
.pass-length-setting > input {
	border: none;
	border-radius: 0.25rem;
	padding: 0.25rem 0.5rem;
	margin: 0.25rem 0;
	text-align: center;
}
.pass-length-setting > input:focus {
	outline-width: 2px;
	outline-offset: 0;
	outline-color: royalblue;
	outline-style: solid;
}

.pass-length-setting {
	display: flex;
	gap: 0.5rem;

	padding: 0.5rem 0.25rem;
}
.pass-length-setting > button {
	padding: 0.25rem 0.5rem;
	border: none;
	border-radius: 0.25rem;
	background-color: royalblue;
	color: white;
	text-transform: uppercase;
	cursor: pointer;
	font-weight: bold;
	min-width: 50px;
}
.pass-length-setting > button:hover {
	background-color: #4169e199;
	color: black;
}
.pass-length-setting > button:active {
	background-color: #4169e160;
}

button {
	position: relative;
}

[data-title]:hover::after {
	opacity: 1;
	transition: all 150ms ease-in-out 250ms;
	visibility: visible;
}
[data-title]:after {
	content: attr(data-title);
	visibility: hidden;
	position: absolute;
	top: 175%;
	left: -50%;
	width: 200%;
	background-color: #eee;
	border-radius: 0.25rem;
	padding: 0.25rem 0;
	border: 1.5px solid #ccc;
	text-transform: none;
	font-weight: 400;
	font-style: italic;
}
</style>