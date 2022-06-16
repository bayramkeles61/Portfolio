<script setup lang="ts">
	import HomeView from "./views/HomeView.vue";
</script>
<template>
	<div class="h-screen w-screen">
		<HomeView />
	</div>
</template>

<style>
	*,
	*::before,
	*::after {
		font-family: "Roboto";
	}
	html {
		overflow: hidden;
		height: 100%;
		width: 100%;
	}
</style>
