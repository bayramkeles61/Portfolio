<script setup lang="ts">
	import { ref } from "vue";

	const selectedMenu = ref("home");
	const changeCard = (card: string) => {
		console.log({
			card: card,
		});
		selectedMenu.value = card;
	};
</script>
<template>
	<div>
		<div
			class="shadow-big w-200 h-140 m-auto flex items-center justify-between flex-col shadow-big border border-gray-200 rounded-xl p-8"
		>
			<CardHeader @changeCard="changeCard" />
			<div class="w-full px-20">
				<CardPortfolio v-if="selectedMenu === 'home'" />
				<CardWork v-else-if="selectedMenu === 'works'" />
			</div>
			<CardSocial />
		</div>
	</div>
</template>

<style>
	.shadow-big {
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1),
			3px 5px 20px rgba(0, 0, 0, 0.2);
	}
</style>
