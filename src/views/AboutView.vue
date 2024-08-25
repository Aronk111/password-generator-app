<script setup>
import Separator from '../shared/Separator.vue'
</script>

<template>
	<div>
		<section class="faq">
			<h2>What is this thing?</h2>
			<p>
				Password Generator is an application that I thought would be a nice way to get to know <a class="link" href="https://vuejs.org/" target="_blank">VueJS</a> better.
			</p>
		</section>

		<Separator :halfWidth="true" :rounded="true" />

		<section class="faq">
			<h2>Is it safe?</h2>
			<p>
				No. Not at all. <br />
				The generated passwords are not encrypted. <br />
				You're better off to use <a class="link" href="https://1password.com/" target="_blank">OnePassword</a> or <a class="link" href="https://bitwarden.com/" target="_blank">Bitwarden</a> for actual password storage.
			</p>
		</section>

		<Separator :halfWidth="true" :rounded="true" />

		<section class="faq">
			<h2>Is this on GitHub?</h2>
			<p>Yes it is! Here's the repo: <a class="link" href="https://github.com/Aronk111/password-generator-app" target="_blank">Password Generator App</a></p>
		</section>
	</div>
</template>

<style>
.faq {
	text-align: center;
	margin: 1rem auto;
	max-width: fit-content;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background-color: #f4f4f4;
	border-radius: 0.25rem;
	padding: 1rem 1.5rem;
	box-shadow: 0 0 4px 0.5px #00000040;
}
.link {
	text-decoration: underline;
	color: royalblue;
}
.link:hover {
	color: #4169e190;
}
</style>