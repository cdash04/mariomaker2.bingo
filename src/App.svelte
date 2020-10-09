<script lang="ts">
	import Bingo from "./bingo/Bingo.svelte";
</script>

<main>
	<div class="title">
		<img src="./images/smm2logo.svg" alt="">
		<span> BINGO </span>
	</div>
	<div class="bingo">
		<Bingo></Bingo>
	</div>
</main>

<style>
	:global(body) {
		padding: 0;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #f9d348;
		display: flex;
		font-family: 'smm2';
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
		width: 100%;
		height: 100%;
		overflow: hidden;
		overflow-y: scroll;
	}

	.title {
		display: flex;
		flex-direction: column;
		font-size: 5rem;
		margin-bottom: 5rem;
		color: #000;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	@font-face {
		font-family: 'smm2';
		src: url('/font/Super-Mario-Maker-Font.woff') format('woff'),
		url('/font/Super-Mario-Maker-Font.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}
</style>