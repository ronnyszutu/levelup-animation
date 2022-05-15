<script>
	import { fade, blur, slide, fly } from 'svelte/transition';
	import { custom } from './custom';
	import Nav from './Nav.svelte';
	import Toast from './Toast.svelte';
	import Modal from './Modal.svelte';
	import { alert } from "./alert";
	export let name;

	let isReady = 'false';
	let isNavOpen = false;
	let isModalOpen = false;

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
</script>

{#if isNavOpen}
	 <!-- content here -->
	 <Nav {toggleNav} />
{/if}

<main>
	<button on:click={ toggleNav }>Menu</button>
	<button on:click={ toggleAlert }>Alert</button>
	<button on:click={ toggleModal }>Modal</button>

	{#if isReady}
		<h1 transition:custom={{ delay: 2000 }}>Hello {name}!</h1>
	{/if}


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