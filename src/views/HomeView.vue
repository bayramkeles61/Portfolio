<script setup lang="ts"></script>
<template>
	<div
		class="w-200 h-140 m-auto flex items-center justify-between flex-col shadow-big border border-gray-200 shadow rounded-xl p-8"
	>
		<div class="flex space-x-4 w-full">
			<h1
				class="text-xs uppercase cursor-pointer font-semibold bg-gray-300 text-gray-500 px-4 py-1 rounded-2xl"
			>
				WORKS
			</h1>
		</div>
		<div class="font-bold">
			<h1 class="text-5xl pb-2">Hi, I'm Bayram</h1>
			<h2 class="text-gray-600 text-lg pb-2">Frontend Developer</h2>
			<span class="text-gray-500 text-sm"
				>I design & build user interfaces. I love learning and teaching
				everything about software.</span
			>
		</div>
		<div
			class="flex items-center justify-center text-2xl text-gray-600 space-x-4"
		>
			<a
				href="https://www.linkedin.com/in/bayram-keles-4a924a242/"
				target="_blank"
			>
				<div
					class="flex items-center justify-center hover:text-gray-800 rounded-full cursor-pointer"
				>
					<Icon icon="uil:linkedin-alt" />
				</div>
			</a>
			<a href="https://github.com/bayramkeles61" target="_blank">
				<div
					class="flex items-center justify-center hover:text-gray-800 rounded-full cursor-pointer"
				>
					<Icon icon="uil:github-alt" />
				</div>
			</a>
			<a href="https://www.buymeacoffee.com/bayramkeles" target="_blank">
				<div
					class="flex items-center justify-center hover:text-gray-800 rounded-full cursor-pointer"
				>
					<Icon icon="uil:coffee" />
				</div>
			</a>
		</div>
	</div>
</template>

<style>
	.shadow-big {
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1),
			3px 5px 20px rgba(0, 0, 0, 0.2);
	}
</style>
