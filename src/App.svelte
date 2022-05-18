<script>
	import { fade, blur, slide, fly } from 'svelte/transition';
	import { onMount } from 'svelte'
	import { custom } from './custom';
	import { bounceOut,quintInOut } from 'svelte/easing';
	import Nav from './Nav.svelte';
	import Toast from './Toast.svelte';
	import Modal from './Modal.svelte';
	import Box from './Box.svelte';
	import Cross from './Cross.svelte';
	import { alert } from "./alert";
	export let name;
	let cubes = [...Array(50).keys()];

	let isReady = 'false';
	let isNavOpen = false;
	let isModalOpen = false;
	let isCardActive = false;
	let y;

	function toggleNav() {
		isNavOpen = !isNavOpen;
	}
	
	function toggleAlert() {
		alert.set({
			isActive: true,
			text: "Our new alert",
		})
	}

	function toggleModal() {
		isModalOpen = !isModalOpen;
	}

	$: if (y > 180) {
		isCardActive = true;
	}
</script>

<svelte:window bind:scrollY={y} />

{#if isNavOpen}
	 <Nav {toggleNav} />
{/if}

<main>
	<!-- <button on:click={ toggleNav }>Menu</button>
	<button on:click={ toggleAlert }>Alert</button>
	<button on:click={ toggleModal }>Modal</button>

	<Box />

	<Cross /> -->

	<!-- {#if isReady}
		<h1 transition:custom={{ delay: 2000 }}>Hello {name}!</h1>
	{/if} -->
	<div class="grid">
		{#each cubes as cube, i}
			<div transition:fly={{ 
				y:100, 
				duration: 2000, 
				delay: i * 100, 
				easing: quintInOut, 
				// easing: bounceOut, 
			}} class="box" />
		{/each}
	</div>

</main>

<Toast />

{#if isModalOpen}
	<!-- content here -->
	<Modal {toggleModal}>
		<p>This is in the modals</p>
		<button>Do something</button>
	</Modal>
{/if}

<style>
	.hidden {
		opacity: 0;
		transition: 0.3s ease opacity;
	}

	.card {
		transition: 0.3s ease opacity;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.box {
        background: var(--primary);
        box-shadow: var(--level-2);
        height: 100px;
        width: 100px;
    }

	.grid {
		--gridCols: 5;
		gap: 20px;
	}
</style>