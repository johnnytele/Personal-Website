<script lang="ts">
    import { Folders } from "lucide-svelte";
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
        I grew up in the Bay Area and attended Monte Vista High School, where I played volleyball and participated in student government. For college, I chose Miami University, where I had the incredible opportunity to be part of two computer science study abroad programs—one in Southern Italy and another in Manchester, England.
        In my free time, I combined my passions for volleyball and mentorship by assistant coaching a team for two years. I also stayed engaged on campus as a member of the Cyber Security Club and Philosophy Club, and I volunteered with Meals on Wheels, giving back to the community.
        I graduated from Miami University in 2024 with a Bachelor of Science in Computer Science, along with minors in Statistical Methods and Social Justice.
    </Card.Content>

    <Card.Content> 
        This website serves as a portfolio of my favorite academic and personal projects. Learning and building are my passions, and they’ve shaped me into the programmer I am today. They also motivate me to continuously grow into the programmer I aspire to become.
        The projects showcased here are more than just work—they reflect my curiosity, creativity, and love for solving problems and creating meaningful tools.
    </Card.Content>

    <Card.Footer> 
        <Button href="/Portfolio" class="w-full bg-indigo-600 hover:bg-white border border-indigo-600 hover:text-indigo-600 transition duration-500 ease-in-out px-4 py-2 ">
            <Folders/> Portfolio
        </Button>
    </Card.Footer>
</Card.Root>
