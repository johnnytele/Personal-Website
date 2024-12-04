<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

    let formattedBody = data.body
        ? data.body
            .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
            .replace(/\n/g, '<br>')
        :
            "";

    let formattedConclusion = data.conclusion
        ? data.conclusion
            .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
            .replace(/\n/g, '<br>')
        :
            "";
    let formattedInsiration= data.inspiration
        ? data.inspiration
            .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
            .replace(/\n/g, '<br>')
        :
            "";
            
</script>

<div class="flex flex-col">
    <div class="bg-gray-100 py-8">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl font-bold text-gray-800 mb-2 ml-6">{data.name}</h1>
            <p class="text-gray-600 ml-6">{data.descriptionBrief}</p>
        </div>
    </div>
    <div class="bg-white py-8">
        <div class="container mx-auto px-4 flex flex-col md:flex-row">
            <div class="w-full md:w-3/4 px-4">
                <img src={ data.image } class="mb-8">
                <h1 class="text-2xl font-bold text-gray-800 my-2">Inspiration</h1>
                <div class="prose max-w-none"><p>{@html formattedInsiration}</p></div>

                <h1 class="text-2xl font-bold text-gray-800 my-2">How I built it this project</h1>
                <div class="prose max-w-none"><p>{@html formattedBody}</p></div>

                <h1 class="text-2xl font-bold text-gray-800 my-2">Conclusion</h1>
                <div class="prose max-w-none"><p>{@html formattedConclusion}</p></div>
            </div>
            
            <div class="w-full md:w-1/4 px-4">
                {#if data.technologies}
                    <div class="bg-gray-100 p-4">
                        <h2 class="text-xl font-bold text-gray-800 mb-4">Technologies</h2>
                        <ul class="list-none">
                            {#each data.technologies as tech}
                            <li class="mb-2">
                                <p>{ tech }</p>
                            </li>
                            {/each}
                        </ul>
                    </div>
                {/if}
            </div>
        </div>

    </div>
</div>