<script>
    import { Plus } from "phosphor-svelte";
</script>

<main>
    <div id="projects-container">
        <h1>Your Updates</h1>
    </div>

    <div class="add-project-cta">
        <div class="plus-container">
            <Plus size=50 />
        </div>
        <p class="info">Create a new post</p>
    </div>
    <div class="projects-container">
        <div class="project">
            <div class="date-posted-container">AB/CD/EFGH</div>
            <div class="project-container-main">
                <div class="project-thumbnail-container">
                    <img src="" alt="Project Thumbnail" class="project-thumbnail">
                </div>
                <div class="project-details">
                    <div class="data-container">
                        <p class="project">Project</p>
                        <h2>Project Name</h2>
                    </div>
                    <div class="data-container">
                        <p class="update-title">Update Title</p>
                        <h2>This is a sample title for an update.</h2>
                    </div>
                    <div class="data-container">
                        <p class="desc-title">Description</p>
                        <p class="project-desc">The brand new revolutionary dashboard feature that does the thingamajig. basically the way it works is... </p>
                    </div>

                </div>
            </div>
        </div>

        <div class="v-sep"></div>
        <div class="project-info-container">
            p
        </div>
    </div>
</main>