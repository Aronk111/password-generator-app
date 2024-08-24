<script setup>
import { ref } from 'vue';
import PassItem from './PassItem.vue';

const props = defineProps(['passes', 'initialValue'])
const emit = defineEmits(['copied', 'deleted'])

const prevPasses = ref(props.initialValue??[])

function onDel(i) {
	emit('deleted', i)
}


</script>

<template>
	<div class="pass-display" v-for="(pass, index) in prevPasses.passwords" :key="index">
		<PassItem :index="index" :password="pass"
			@copy="() => emit('copied', pass)"
			@on-delete="onDel"
		/>
	</div>
</template>

<style>
.pass-display {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>