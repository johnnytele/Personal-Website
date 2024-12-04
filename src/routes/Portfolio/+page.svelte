<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import TabletSmartphone from "lucide-svelte/icons/tablet-smartphone";
    import LaptopMinimal from "lucide-svelte/icons/laptop-minimal";
    import Cctv from "lucide-svelte/icons/Cctv";

    let projects = [
        {
            slug: "THSMS",
            name: "THSMS",
            image: "/images/THSMS.jpg",
            description: "A system used to keep track of dishes in the sink",
            type: "Personal Project",
            form: "Full Stack Project",
            descriptionLong: "THSMS (Tracking Household Sink Management System) is a full-stack project designed to track sink usage in a shared college house. Using a Raspberry Pi, OpenCV, and a local SQLite database, it captured motion-triggered videos and photos of the sink, documenting before-and-after states to identify dish-related culprits. The project featured a simple, mobile-optimized web interface and taught me valuable lessons about system design, open-source tools, and the fun of bringing personal ideas to life."
        },
        {
            slug: "Cork-Master",
            name: "Cork Master",
            image: "/images/cork-master2.jpg",
            description: "An app that is used to keep track of wines tasted",
            form: "Mobile App",
            type: "School Project",
        },
        {
            slug: "16hawks",
            name: "16hawks.com",
            image: "/images/16hawks.PNG",
            description: "A website used to to give my volleyball players feedback on their gameplay",
            form: "Full Stack Website",
            type: "Personal Project",
        },
        {
            slug: "Volleyball-Stats",
            name: "Volleyball Stats App",
            image: "/images/vball-stats.jpg",
            description: "An app that I can use to track my volleyball players stats",
            form: "Mobile App",
            type: "Personal Project",
        },
        {
            slug: "VDF",
            name: "Virginia Divorce Filings",
            image: "/images/Gavel.jpg",
            description: "A website that generates the paperwork required to file a divorce",
            form: "Full Stack Website",
            type: "Professional Project",
        },
        {
            slug: "RAG-Teacher",
            name: "RAG Teacher",
            image: "/images/RAG.jpg",
            description: "A RAG system designed to give teachers a better understanding of what their students a using LLMs for",
            form: "Full Stack Website",
            type: "Personal Project",
        }
    ]
</script>

<div class="text-center max-w-3xl mx-auto text-xl sm:text-4xl font-semibold transition duration-500 ease-in-out mb-12 mt-8">
    Portfolio
</div>


<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 m-5">

    <!-- CARD 1 -->
    {#each projects as project}
    <div class="rounded overflow-hidden shadow-lg flex flex-col">
        <div class="relative"><a href={`/Portfolio/${project.slug}`}>
                <img class="w-full"
                    src={ project.image }
                    alt="Sunset in the mountains">
                <div
                    class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
            
            <div class="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 transition duration-500 ease-in-out">
                { project.type }
            </div>
        </div>
        <div class="px-6 py-4 mb-auto">
            <a href={`/Portfolio/${project.slug}`} class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                { project.name }
            <p class="text-gray-500 text-sm">
                { project.description }
            </p>
            </a>
        </div>
        <div class="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
            <span class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                {#if project.form === "Full Stack Project"}
                    <Cctv/>
                {:else if project.form === "Mobile App"}
                    <TabletSmartphone />
                {:else if project.form === "Full Stack Website"}
                    <LaptopMinimal />
                {/if}
                <span class="ml-1">{ project.form }</span>
            </span>
        </div>
    </div>
    {/each}
</div>

