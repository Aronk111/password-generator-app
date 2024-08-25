<script setup>
import { reactive, ref } from 'vue';

import Separator from './shared/Separator.vue';
import NavBar from './components/NavBar.vue';
import LengthSetting from './components/LengthSetting.vue';
import Generator from './components/Generator.vue';
import PreviousPasses from './components/PreviousPasses.vue';
import UppercaseSetting from './components/UppercaseSetting.vue';
import NumberSetting from './components/NumberSetting.vue';
import SurroundSetting from './components/SurroundSetting.vue';
import AboutView from './views/AboutView.vue';

const showModal = ref(false)

const activeLinkIndex = ref(
	JSON.parse(localStorage.getItem('active')??0)
)

const changeActive = (value) => {
	if (activeLinkIndex.value !== value) {
		activeLinkIndex.value = value
		localStorage.setItem('active', JSON.stringify(
			activeLinkIndex.value
		))
	}
}

const links = ref([
	{title: "Generator", id: 0},
	{title: "Previouses", id: 1},
	{title: "About", id: 2}
])

const generationSettings = ref(
	JSON.parse(localStorage.getItem('genSettings'))??{
		length: 16,
		useUpper: false,
		useNums: false,
		useSurround: false,
		surroundChar: '*'
	}
)

const changeSetting = (setting, value) => {
	generationSettings.value[setting] = value
	localStorage.setItem('genSettings', JSON.stringify(generationSettings.value))
}

const previousPasswords = reactive(
	JSON.parse(localStorage.getItem('prevPasses'))??{
		passwords: []
	}
)

const addPassword = (pass) => {
	previousPasswords["passwords"].push(pass)
	localStorage.setItem('prevPasses', JSON.stringify(previousPasswords))
}

let modalTimeout

const displayModal = () => {
	clearTimeout(modalTimeout)

	showModal.value = true

	modalTimeout = setTimeout(() => {
		showModal.value = false
	}, 2000);
}

const deletePassword = (atIndex) => {
	previousPasswords.passwords.splice(atIndex, 1)
	localStorage.setItem('prevPasses', JSON.stringify(previousPasswords))
}

</script>

<template>
	<header>
		<img src="./assets/key-icon.png" alt="key icon" >
		<h1 class="page-title">Password Generator</h1>
	</header>
	<NavBar
		:links=links
		:activeIndex="activeLinkIndex"
		@changed="(newIndex) => changeActive(newIndex)"
	></NavBar>

	<Separator :halfWidth="true" :rounded="true"/>

	<div id="generator-page" v-if="activeLinkIndex === 0">
		<LengthSetting
			@pass-change="(newValue) => {changeSetting('length', newValue)}"
			:initial-value="generationSettings.length"
		/>
		<UppercaseSetting
			:initialValue="generationSettings.useUpper"
			@upper-changed="(newValue) => {changeSetting('useUpper', newValue)}"
		/>

		<NumberSetting
			:initialValue="generationSettings.useNums"
			@nums-changed="(newValue) => {changeSetting('useNums', newValue)}"
		/>

		<SurroundSetting
			:initState="generationSettings.useSurround"
			:initChar="generationSettings.surroundChar"
			@char-changed="(newValue) => {changeSetting('surroundChar', newValue)}"
			@surround-changed="(newValue) => {changeSetting('useSurround', newValue)}"
		/>

		<Generator
			:settings="generationSettings"
			@generate="(val) => addPassword(val)"
		/>
	</div>
	<div id="generator-page" v-else-if="activeLinkIndex === 1">
		<PreviousPasses
			:initialValue="previousPasswords"
			:passes="previousPasswords"
			@copied="displayModal"
			@deleted="deletePassword"
		/>
		<div class="modalOK" :class="{'modal-hidden': showModal === false}">
			<p>Copied Password</p>
		</div>
	</div>
	<div v-else>
		<AboutView></AboutView>
	</div>
</template>

<style>
header {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	padding: 1rem 0;
	background-color: #4169e140;
}

header > img {
	transition: all 150ms ease-in-out;
	display: inline-block;
	width: 75px;
}

header > img:hover {
	transform: rotate(10deg) translateY(-5%);
}

#generator-page {
	position: relative;
}

.modalOK {
	position: fixed;

	top: 50%;
	left: 2%;

	visibility: visible;
	transition: 100ms ease-in-out;

	background-color: #55c894;

	border: 2px solid #42b883;
	border-radius: 0.5rem;

	padding: 0.25rem 0.5rem;
}
.modal-hidden {
	left: -100%;
	visibility: hidden;
}

@media only screen and (max-width: 640px) {
	header {
		flex-direction: column;
	}
}
</style>