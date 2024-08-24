<script setup>
import { ref } from 'vue';
import PassItem from './PassItem.vue';

const props = defineProps(['passes', 'initialValue'])
const emit = defineEmits(['copied'])

const prevPasses = ref(props.initialValue??[])

</script>

<template>
	<div class="pass-display" v-for="(pass, index) in prevPasses.passwords" :key="index">
		<PassItem :index="index" :password="pass" @copy="() => emit('copied', pass)"/>
	</div>
</template>

<style>
.pass-display {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>