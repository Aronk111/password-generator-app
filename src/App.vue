<script setup>
import { reactive, ref } from 'vue';

import Separator from './shared/Separator.vue';
import NavBar from './components/NavBar.vue';
import LengthSetting from './components/LengthSetting.vue';
import Generator from './components/Generator.vue';
import PreviousPasses from './components/PreviousPasses.vue';

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
		length: 16
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
console.log(previousPasswords.value);

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

</script>

<template>
	<h1 class="page-title">Password Generator</h1>
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
		<Generator @generate="(val) => addPassword(val)"></Generator>
	</div>
	<div id="generator-page" v-else-if="activeLinkIndex === 1">
		<PreviousPasses
			:initialValue="previousPasswords"
			:passes="previousPasswords"
			@copied="displayModal"
		/>
		<div class="modalOK" :class="{'modal-hidden': showModal === false}">
			<p>Copied Password</p>
		</div>
	</div>
</template>

<style>
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
</style>