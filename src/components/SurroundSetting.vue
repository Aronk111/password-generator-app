<script setup>
import { ref, watchEffect } from 'vue';

const emit = defineEmits(['surround-changed', 'char-changed'])
const props = defineProps(['initState', 'initChar'])

const useSurround = ref(
	props.initState??false
)
const toggleSurround = () => {
	useSurround.value = !useSurround.value
	emit('surround-changed', useSurround.value)
}

const surroundCharacter = ref(
	props.initChar??'*'
)

watchEffect(() => {
	let chars = surroundCharacter.value.split('')
	let newChar = chars[chars.length - 1]
	surroundCharacter.value = newChar
	emit('char-changed', surroundCharacter.value)
})

</script>

<template>
	<div class="generator-setting">
		<label for="use-surround" class="surround">
			<input type="checkbox" id="use-surround" :checked="useSurround" @change="toggleSurround">
			<span>Use Surround</span>
		</label>
		<div v-if="useSurround">
			<input class="surround-char-input" type="text" id="surround-char" v-model="surroundCharacter">
		</div>
	</div>
</template>


<style>
.surround {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.25rem;

	user-select: none;

	cursor: pointer;
}
.surround-char-input {
	padding: 0.25rem 0.5rem;
	text-align: center;
	border: none;
	border-radius: 0.25rem;
	margin: 0.5rem 0;
}
</style>