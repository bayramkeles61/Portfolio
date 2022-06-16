<template>
	<div class="flex space-x-4">
		<h1
			@click="$emit('changeCard', 'home')"
			class="text-sm uppercase cursor-pointer font-semibold text-gray-600 hover:text-gray-900 px-4 py-1 rounded-2xl"
		>
			HOME
		</h1>
		<h1
			@click="$emit('changeCard', 'works')"
			class="text-sm uppercase cursor-pointer font-semibold text-gray-600 hover:text-gray-900 px-4 py-1 rounded-2xl"
		>
			WORKS
		</h1>
	</div>
</template>
