<script setup>
const props = defineProps(['index', 'password'])
const emit = defineEmits(['copy', 'delete'])

const copyPassword = () => {
	navigator.clipboard.writeText(props.password)
	emit('copy')
}
</script>

<template>
	<div class="pass-item">
		<p class="pass-text">{{ password }}</p>
		<div class="buttons">
			<button class="btn del">DELETE</button>
			<button class="btn copy"
				@click="copyPassword"
			>
				COPY
			</button>
		</div>
	</div>
</template>

<style>
.pass-item {
	padding: 0.5rem;
	margin: 1rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;

	background-color: #eee;
	border: 2px solid #ddd;
	border-radius: 0.25rem;

	font-size: 1.5rem;
}
.pass-text {
	font-family: monospace;
	user-select: none;
}

.del {
	background-color: #dc143c;
	border: 2px solid #dc143c;
}
.del:hover {
	background-color: #dc143c75;
}
.del:active {
	background-color: #dc143c40;
}

.copy {
	background-color: #42b883;
	border: 2px solid #42b883;
}
.copy:hover {
	background-color: #42b88375;
}
.copy:active {
	background-color: #42b88350;
}

.btn {
	color: white;

	border-radius: 0.25rem;

	font-size: 1.25rem;
	padding: 0.25rem 0.5rem;
	transition: 100ms ease-in-out;
}
.btn:hover {
	cursor: pointer;

	color: black;
	transition: 50ms ease-in-out;
}

.buttons {
	display: flex;
	gap: 0.25rem;
}

</style>