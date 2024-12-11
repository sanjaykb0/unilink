<script>
	import { Button, buttonVariants } from "$lib/components/ui/button"
	import Label from "$lib/components/ui/label/label.svelte";
	import Input from "$lib/components/ui/input/input.svelte";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import { FadersHorizontal } from "phosphor-svelte"
	import * as Sheet from "$lib/components/ui/sheet";
	import { enhance } from "$app/forms";
	import { invalidate, invalidateAll } from "$app/navigation";
	import * as Dialog from "$lib/components/ui/dialog"
	import * as Alert from "$lib/components/ui/alert";
	import * as Card from "$lib/components/ui/card"
	import { Lightbulb } from "phosphor-svelte";

	const { data } = $props();
	const { userProfile } = data;
	const { projectData } = $state(data);

	const bgSplash = "/src/lib/ul-banner.png"
	const logo = "/src/lib/ul-logo.png"
	const wordmark="/src/lib/ul-wordmark.png"

	let firstName = $state("")
	let lastName = $state("")
	let email = $state("")

	let projectName= $state("");
	let projectDesc = $state("");

	$effect(() => {
		if (userProfile) {
			firstName = userProfile.firstName;
			lastName = userProfile.lastName;
			email = userProfile.email;
		}
	})

	$inspect(projectData);
</script>
{#if userProfile} 

	<header class="w-full py-4 flex flex-col gap-4">
		<nav class="container flex items-center gap-8 justify-between">
			<div class="img-container">
				<img class="w-8" src={logo} alt="">
			</div>
			<div class="profile-container flex items-center gap-4">
				<p>Hello, <span class="font-bold">{firstName}</span>!</p>
				<Sheet.Root>
					<Sheet.Trigger asChild let:builder>
						<Button builders={[builder]} variant="outline" size="icon">
							<FadersHorizontal size="18"/>
						</Button>
					</Sheet.Trigger>
					<Sheet.Content side="right">
						<Sheet.Header>
							<Sheet.Title>Edit profile</Sheet.Title>
							<Sheet.Description>
							Make changes to your profile here. Click save when you're done.
							</Sheet.Description>
						</Sheet.Header>

						<form method="post" action="?/login" class="grid gap-4 py-4" use:enhance={({formData}) => {
							formData.set('firstName', firstName);
							formData.set('lastName', lastName);
							formData.set('email', email);
							return ({result}) => {
								if (result.type === "success") {
									invalidate("/");
									alert("Updated profile")
								} else {
									alert("Error")
								}
							}	
						}}>
							<div class="grid grid-cols-4 items-center gap-4">
								<Label for="firstName" class="text-right">First Name</Label>
								<Input id="firstName" bind:value={firstName} class="col-span-3" />
							</div>
							<div class="grid grid-cols-4 items-center gap-4">
								<Label for="lastName" class="text-right">Last Name</Label>
								<Input id="lastName" bind:value={lastName} class="col-span-3" />
							</div>
							<div class="grid grid-cols-4 items-center gap-4">
								<Label for="email" class="text-right">Email</Label>
								<Input id="email" bind:value={email} class="col-span-3" />
							</div>

							<Button type="submit">Save changes</Button>
							<Button href="/auth/logout" variant="secondary">Logout</Button>
						</form>
					</Sheet.Content>
					</Sheet.Root>	
				</div>
			</nav>
		<Separator />
	</header>

	<section class="container">
		<h1 class="text-4xl tracking-tight py-4 font-bold">Active Projects</h1>
		<!-- Create a project flow -->

		<Dialog.Root>
			<Dialog.Trigger class={buttonVariants({ variant: "default" })}
			  >Create a Project
			</Dialog.Trigger>
			<Dialog.Content class="sm:max-w-[425px]">

			  <Dialog.Header>
				<Dialog.Title>Create a Project</Dialog.Title>
				<Dialog.Description>
					Process to create a project
				</Dialog.Description>
			  </Dialog.Header>

			  <div class="grid gap-4 py-4">
				<form  method="post" action="?/create_project" class="grid gap-4 py-4" use:enhance={({formData}) => {
					formData.set('projectName', projectName);
					formData.set('projectDesc', projectDesc);
					return ({result}) => {
						if (result.type === "success") {
							invalidateAll();
							alert("Added new project")
						} else {
							alert("Error")
						}
					}
				}}>

					<div class="grid grid-cols-4 items-center gap-4">
						<Label for="projectName">Title</Label>
						<Input id="projectName" bind:value={projectName} class="col-span-3" />
					</div>

					<div class="grid grid-cols-4 items-center gap-4">
						<Label for="projectDesc">Description</Label>
						<Input id="projectDesc" bind:value={projectDesc} class="col-span-3" />
					</div>

					<Dialog.Footer>
						<Button type="submit">Save Project</Button>
					</Dialog.Footer>
				</form>
				</div>
			</Dialog.Content>
		</Dialog.Root>

		<section class="pt-8 pb-4 flex gap-4 flex-wrap">
			{#if projectData == null || projectData.length == 0}
				<Alert.Root class="max-w-[420px]">
					<Lightbulb size="24"/>
					<div class="container">
						<Alert.Title>
							Start your first project
						</Alert.Title>
						<Alert.Description>
							Small steps, small steps!
						</Alert.Description>
					</div>
				</Alert.Root>
			{:else}
				{#each projectData as project}
					<Card.Root class="max-w-[420px] mt-8">
						<div class=" bg-green-600 w-full rounded-t-sm h-[100px]"></div>
						<Card.Header>
							<Card.Title>
								{project.title}
							</Card.Title>
							<Card.Description>
								{project.desc}
							</Card.Description>
						</Card.Header>
						<Card.Content class="grid grid-cols-3">
							<a href="{project.id}" class={buttonVariants({variant: "outline"})}>View Project</a>
						</Card.Content>
					</Card.Root>
				{/each}
			{/if}
		</section>
	</section>
{:else}
	<div
		class="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
	>
		<Button
			href="/auth/login/github"
			variant="ghost"
			class="absolute right-4 top-4 md:right-8 md:top-8"
		>
			Login with GitHub
		</Button>
		<div class="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
			<div class="absolute inset-0 bg-cove" style="
				background-image: url({bgSplash}); 
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
			"></div>
			<div class="relative z-20 flex items-center text-lg font-medium">
				<!-- <Command class="mr-2 h-6 w-6" /> -->
				 <img class="w-20" src="{wordmark}" alt="Unilink logo">
			</div>
		</div>
		<div class="lg:p-8">
			<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[650px]">
				<p class="text-muted-foreground px-8 text-center text-4xl font-bold tracking-tight">
					A commitment based social networking platform, designed for students working on
					projects / courses to find like-minded people.
				</p>
			</div>
		</div>

	</div>
{/if}