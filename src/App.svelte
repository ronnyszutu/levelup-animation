<script>
	import { fade, blur, slide, fly } from 'svelte/transition';
	import { onMount } from 'svelte'
	import { custom } from './custom';
	import Nav from './Nav.svelte';
	import Toast from './Toast.svelte';
	import Modal from './Modal.svelte';
	import Box from './Box.svelte';
	import { alert } from "./alert";
	export let name;

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

	// onMount(() => {
	// 	// Registers scroll events
	// 	addScrollEvent();
	// })

	// function addScrollEvent() {
	// 	window.addEventListener("scroll", onScroll, { passive: true });
	// }

	// function onScroll() {
	// 	console.log(window.pageYOffset);
	// 	const scrollPosition = window.pageYOffset;

	// 	if(scrollPosition > 180) {
	// 		isCardActive = true;
	// 	}
	// }

	$: if (y > 180) {
		isCardActive = true;
	}
</script>

<svelte:window bind:scrollY={y} />

{#if isNavOpen}
	 <Nav {toggleNav} />
{/if}

<main>
	<button on:click={ toggleNav }>Menu</button>
	<button on:click={ toggleAlert }>Alert</button>
	<button on:click={ toggleModal }>Modal</button>

	<Box />

	{#if isReady}
		<h1 transition:custom={{ delay: 2000 }}>Hello {name}!</h1>
	{/if}

	<div class="card">
		<h3>Card</h3>
		<p>With some paragraph text</p>
	</div>

	<div class:hidden={!isCardActive} class="card">
		<h3>Second Card</h3>
		<p>With some paragraph text</p>
	</div>

	<div class="card">
		<h3>Card</h3>
		<p>With some paragraph text</p>
	</div>

	<div class="card">
		<h3>Card</h3>
		<p>With some paragraph text</p>
	</div>

	<div class="card">
		<h3>Card</h3>
		<p>With some paragraph text</p>
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
</style>