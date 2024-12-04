<script lang="ts">
    import Folders from "lucide-svelte/icons/Folders";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
</script>

<Card.Root class="md:w-3/5 md:mt-24 md:mx-auto mx-0">
    <Card.Header > 
        <Card.Content class="py-2 px-6"> 
            <p class="text-4xl font-bold">Johnny Carter</p>
        </Card.Content>

        <Card.Content class="py-2 px-6"> 
            <p class="text-xl text-slate-500">2024 Miami Univeristy Graduate</p>
        </Card.Content>
    </Card.Header>

    <Card.Content> 
        I grew up in the Bay Area, going to high school at Monte Vista where I played volleyball and was involved in student government. I attended Miami Univeristy for college. I was apart of two computer science study abroad programs while at Miami, one in Southern Italy and the other in Manchester England. In my free time, I assistant coached a volleyball team for two years. I was also a member of the Cyber Security Club and Philosophy Club and volunteered at Meal on Wheels. I graduated from Miami Univeristy in 2024 with a Bachelor of Science in Computer Science as well as two minors in Statistical Methods and Social Justice.
    </Card.Content>

    <Card.Content> 
        This website serves as a portfolio of my favorite academic and personal projects. I love learning and building things. It is these two characteristics that have helped me grow into the programmer that I am today and will drive me forward towards a the programmer I'll be later in my career. The projects I have selected are supposed to not just show my work but also my curiosity and love for building.
    </Card.Content>

    <Card.Footer> 
        <Button href="/Portfolio" class="w-full bg-indigo-600 hover:bg-white border border-indigo-600 hover:text-indigo-600 transition duration-500 ease-in-out px-4 py-2 ">
            <Folders/> Portfolio
        </Button>
    </Card.Footer>
</Card.Root>
