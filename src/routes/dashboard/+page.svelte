<script>
    import { Plus } from "phosphor-svelte";
    let x = "1,1,1,1,1".split(',')
</script>
<h1 class="text-6xl font-thin tracking-tight">Your Updates</h1>
<main class="grid grid-cols-3 w-full my-12">
    <div class="col-span-3 grid grid-cols-5 gap-9">
        <div class="add-project-cta w-ful border border-prime rounded-lg p-12 text-prime flex flex-col items-center gap-1 col-span-4">
            <div class="plus-container">
                <Plus size=50 />
            </div>
            <p class="info">Create a new post</p>
        </div>

        {#each x as t}
        <div class="project h-full col-span-4">
            <div class="date-posted-container italic text-gray-400">2 days ago</div>
            <div class="project-container-main flex gap-4 py-2">
                <div class="project-thumbnail-container bg-gray-500 w-full min-h-full max-h-96">
                    <!-- <img src="" alt="Project Thumbnail" class="project-thumbnail"> -->
                </div>
                <div class="project-details flex flex-col gap-4 max-w-96">
                    <div class="data-container">
                        <p class="project text-sm text-gray-400">Project</p>
                        <h2 class="text-xl">Project Name</h2>
                    </div>
                    <div class="data-container">
                        <p class="update-title text-sm text-gray-400">Update Title</p>
                        <h2 class="text-xl">This is a sample title for an update.</h2>
                    </div>
                    <div class="data-container">
                        <p class="desc-title text-sm text-gray-400">Description</p>
                        <p class="project-desc text-md">The brand new revolutionary dashboard feature that does the thingamajig. basically the way it works is... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa asperiores aliquid cupiditate quia excepturi? Mollitia, tempore totam nostrum odit ea voluptatum dicta repellendus inventore voluptate nobis itaque sed dolorem asperiores! </p>
                    </div>

                </div>
            </div>
        </div>
        {/each}
    </div>

    <div class="project-info-container col-start-4 px-8 border-l border-black flex flex-col gap-8">
        <div class="data-container">
            <p class="project-label text-md text-gray-400">Active project</p>
            <h2 class="project-name text-3xl">Project XYZ</h2>
        </div>
        <div class="data-container">
            <p class="project-updates-label text-md text-gray-400">Recent updates</p>
            <div class="project-updates-boxes flex gap-1 py-2">
                <div class="box w-4 h-4 bg-green-300"></div>
                <div class="box w-4 h-4 bg-yellow-300"></div>
                <div class="box w-4 h-4 bg-green-300"></div>
                <div class="box w-4 h-4 bg-green-300"></div>
                <div class="box w-4 h-4 bg-gray-400"></div>
            </div>
        </div>
    </div>
</main>