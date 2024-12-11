<script>
    export let datePosted;
    export let projectThumbnail;
    export let projectName;
    export let updateTitle;
    export let updateDescription;
</script>

<div class="project h-full col-span-4">
    <div class="date-posted-container italic text-gray-400">{datePosted}</div>
    <div class="project-container-main flex gap-4 py-2">
        <div class="project-thumbnail-container bg-gray-500 w-full min-h-full max-h-96">
            
            <img src="{projectThumbnail}" alt="Project Thumbnail" class="project-thumbnail">
        </div>
        <div class="project-details flex flex-col gap-4 max-w-96">
            <div class="data-container">
                <p class="project text-sm text-gray-400">Project</p>
                <h2 class="text-xl">{projectName}</h2>
            </div>
            <div class="data-container">
                <p class="update-title text-sm text-gray-400">Update Title</p>
                <h2 class="text-xl">{updateTitle}</h2>
            </div>
            <div class="data-container">
                <p class="desc-title text-sm text-gray-400">Description</p>
                <p class="project-desc text-md">{updateDescription}</p>
            </div>

        </div>
    </div>
</div>
