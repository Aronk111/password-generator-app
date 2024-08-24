<script setup>
const props = defineProps(["links", "activeIndex"])
</script>

<template>
	<nav>
		<ul class="nav-list">
			<li v-for="link in links" class="nav-item" @click="$emit('changed', link.id)">
				<a :class="{active: link.id === activeIndex}">{{ link.title }}</a>
			</li>
		</ul>
	</nav>
</template>

<style>
.nav-list {
	display: flex;
	align-items: center;
	justify-content: center;

	margin: 0.5rem 0;
	gap: 1rem;

	user-select: none;
}

.nav-item {
	cursor: pointer;
	padding: 0.5rem 0.5rem;
	transition: 50ms ease-in-out;
}
.nav-item:hover {
	background-color: #4169e1;
	border-radius: 0.25rem;
	color: white;
}
.nav-item:active {
	background-color: #4169e160;
}

.active {
	font-weight: bold;
}
</style>