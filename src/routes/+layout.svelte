<script lang="ts">
	import { MagnifyingGlass, UserCircle, Envelope, Fire, FadersHorizontal } from 'phosphor-svelte';
	import '../app.css';
	let { data, children } = $props();

	let contentStreakCounter = 7;
	let userName = "John Doe";
</script>

<header class="w-full flex flex-col bg-white">
	<nav class="flex justify-between w-full items-center text-prime my-4">
		<div class="left flex gap-10">
			<img src="/src/lib/ul-logo.png" alt="UL Logo" class="logo-container">
			<div class="search-container flex items-center gap-2">
				<MagnifyingGlass size={40}/>
				<p>Search Profiles, Projects, etc.</p>
			</div>
		</div>

		<div class="right flex gap-12">
			<div class="content-streak-indicator flex gap-2 items-center h-fit py-2 px-4 bg-sunsetOrange text-white">
				<Fire size=30/>
				<div id="content-streak-id" class="text-lg">{contentStreakCounter}</div>
			</div>

			<div class="user-controls flex gap-4 items-center">
				<div class="email-cta">
					<Envelope size=40 />
				</div>

				<UserCircle size=40 />
				<p id="user-greeting">Hello, <b>{userName}!</b></p>

				<div class="settings-cta">
					<FadersHorizontal size=40 />
				</div>
			</div>
		</div>
	</nav>
	<hr>
	<section id="interactions-bar" class="w-full bg-white flex flex-col gap-4 my-8">
		<div class="btn-containers text-4xl flex gap-8 font-bold tracking-tight">

			<button id="dashboard-btn" class:disabled={false}>Dashboard</button>
			<button id="feed-btn" class:disabled={true}>Feed</button>
			<button id="network-btn" class:disabled={true}>Network</button>

		</div>
		<hr>
	</section>
</header>

<style>
	.disabled {
		opacity: 30%;
	}
	.logo-container {
		width: 40px;
		height: fit-content;
	}

	
</style>



{@render children()}
