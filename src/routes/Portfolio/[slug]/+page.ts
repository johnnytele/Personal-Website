import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

let projects = [
    {
        slug: "THSMS",
        name: "THSMS",
        descriptionBrief: "A system used to keep track of dishes in the sink",
        description: "THSMS (Tracking Household Sink Management System) is a full-stack project designed to track sink usage in a shared college house. Using a Raspberry Pi, OpenCV, and a local SQLite database, it captured motion-triggered videos and photos of the sink, documenting before-and-after states to identify dish-related culprits. The project featured a simple, mobile-optimized web interface and taught me valuable lessons about system design, open-source tools, and the fun of bringing personal ideas to life.",
        inspiration: "\tLiving in a college house with six guys came with its fair share of challenges, not least of which was managing the ever-present mountain of dishes in the sink. The cycle was predictable: someone would leave a plate or pan in the sink, forget about it, and the pile would grow until we ran out of clean cookware. Frustrated but inspired, I decided to apply software to this all-too-common real-world problem.",
        body: "\tThis project evolved into a full-stack endeavor that even delved into hardware. My initial plan was simple: tape a webcam to the ceiling above the sink and connect it to my old MacBook running the software. However, after sharing the idea with a professor—who found it both amusing and intriguing—I decided to use a Raspberry Pi instead. Armed with a Raspberry Pi and a webcam, I got to work." + 
        "\n\tAlthough I had tinkered with a Raspberry Pi back in middle school, this project required me to relearn everything from scratch. I installed Ubuntu Server on the Raspberry Pi, set up SSH, and outlined my plan. The system would monitor the sink for movement and, when detected, start recording a video. Simultaneously, it would trigger timers for one, six, twelve, twenty-four, and forty-eight hours, taking snapshots of the sink at each interval. Most importantly, it would save the \"before\" and \"after\" frames to create a clear visual record. These photos and videos were stored locally on the Raspberry Pi within its file system. To organize everything, I implemented a SQLite database to log when new items were added." +
        "\n\tThe motion detection was one of the most exciting challenges. I had never used OpenCV before, making this my first foray into an open-source library. It was a transformative moment in my learning journey, showcasing the incredible power of libraries and packages. This realization completely changed how I approached coding. Using OpenCV, I defined regions of interest (ROIs) around the sink and stovetop. Each incoming frame was compared to the previous one, and significant differences were flagged as motion. This would initiate the video recording and timers. The recording ended after a period of stillness, ensuring only relevant footage was saved." + 
        "\n\tNext, I needed a way to display the collected photos and videos so my housemates could access them. This required me to learn about hosting websites locally. I chose Apache as my server and built a straightforward, mobile-optimized website for easy navigation. The site allowed users to scroll through the archive and view the media. For the front end, I used HTML, CSS, JavaScript, jQuery, and Bootstrap.",
        conclusion: "\tThis project was my first purely fun personal venture. Unlike the Volleyball Stats app, which had a more serious tone, this project was an opportunity to experiment and enjoy the process. Along the way, I learned: the power and flexibility of open-source tools like OpenCV, the basics of hosting websites with Apache, anf how to design and build a system from the ground up." +
        "\n\tDid it work? Absolutely—and perhaps too well! The group chat was soon flooded with screenshots of culprits, like Michael leaving a mountain of dishes in the sink at 2:30 AM, or the mysterious \"fork in the garbage disposal\" incident. Unfortunately, I overlooked one feature: a way to delete embarrassing photos of myself. I was as guilty as anyone The highlight, though, was capturing my buddy Alex extinguishing a small oven fire, immortalizing one of the most chaotic moments of our college experience." +
        "\n\tThis project taught me that I have the capability to turn my ideas into reality. It reinforced my love for problem-solving and solidified my belief that with the right tools and mindset, I can build anything I dream up.",
        technologies: [ "Ubuntu Server", 
                        "Python", 
                        "Flask",
                        "OpenCV", 
                        "SQLite", 
                        "HTML", 
                        "CSS", 
                        "JavaScript"],
        image: "/images/THSMS.jpg",
    },
    {
        slug: "Cork-Master",
        name: "Cork Master",
        descriptionBrief: "An app that is used to keep track of wines tasted",
        inspiration: "\tSometimes, the perfect idea comes when you least expect it. While taking a Mobile App Development class alongside a Viticulture and Enology course, I had a lightbulb moment. The final project for the app class required us to build something using the skills we’d learned, and our professor emphasized, \"The best projects are the ones students care about.\" One day, while filling out a wine evaluation slip in my viticulture class, inspiration struck: \"I should make an app for this.\"",
        body: "\tI built this project using the MAUI (Multi-platform App UI) framework, a straightforward platform that relies primarily on C# and XAML. After eight weeks of hands-on experience with MAUI in class, I felt confident about tackling the features I envisioned. The development process itself was fairly straightforward. The only significant challenge I faced was creating a custom menu bar, but some research helped me implement it. The real story of this project lay in the iterative testing and improvements that followed." +
        "\n\tFor context, my Viticulture and Enology class explored wine regions from different countries each week. During tastings, we evaluated six to twelve wines using paper point cards. Once I had a minimum viable product (MVP) for my app, I began using it in place of the paper forms to score wines during class. During my first week of testing, I discovered a bug in my Model-View-ViewModel (MVVM) implementation that caused the total score calculation to be incorrect. Fortunately, it was a quick fix and the last major error in the core functionality." + 
        "\n\tThe real challenge was refining the app’s usability. Initially, I included inputs for details like food pairing, tasting location, and other contextual information. While helpful in theory, I found myself feeling obligated to fill out every field during tastings, which was cumbersome. To address this, I added a toggle switch to hide or show these fields on the tasting page. While better, it still felt clunky. The following week, I moved these options to a dedicated configuration page, allowing users to customize their experience without interrupting the flow of wine evaluation. This change made the app much more enjoyable to use." +
        "\n\tAnother improvement stemmed from a real-world scenario. While shopping for wine, I wanted to buy a Pinot Noir I had enjoyed during class but couldn’t recall its name. I remembered tasting it two weeks prior, but the app only sorted wines by quality and name at the time. That evening, I added a \"sort by date\" feature. Fortunately, the app had been automatically recording tasting dates from the beginning, so implementing this new feature was quick and seamless.",
        conclusion: "\tBy the end of this project, I had developed a highly functional app that did exactly what I wanted—and in a way that felt intuitive. This project taught me the value of real-world testing and iterative improvement. Listening to my own frustrations with the app and refining it accordingly gave me a deeper appreciation for user experience design. I’m particularly proud of this app because of how much it improved through my own feedback loop. This mindset of testing, refining, and improving has become a key part of how I approach future projects.",
        technologies: [ "MAUI", 
                        ".NET", 
                        "XAML",
                        "C#",
                        "SQLite",
                        "MVVM"
        ],
        image: "/images/cork-master2.jpg",
    },
    {
        slug: "16hawks",
        name: "16hawks.com",
        descriptionBrief: "A website used to to give my volleyball players feedback on their gameplay",
        inspiration: "\tDuring my senior year of college, I served as an assistant coach for a volleyball team. Early in the season, while studying abroad in Manchester, England, I missed their first tournament. A parent recorded the matches and uploaded them to YouTube, which allowed me to watch and assess the team's skill level. As I watched, I noticed numerous moments I wanted to discuss with the players. However, I knew I needed a practical way to share this feedback. Writing a document with timestamps felt too cumbersome—and let’s face it, players weren’t going to read through that. That’s when I decided to create a website where the coaching staff could leave notes directly tied to specific moments in the videos.",
        body: "\tTime was of the essence for this project. Once I committed to building the website, I got to work immediately. Based on prior experience with another project, I knew I would need a database. I chose MySQL because I wanted to gain more experience with it. I started by designing the database, which became the foundation for the rest of the project. The Notes table stored timestamps, player references, and game IDs, allowing for flexible queries by game or player. Separate Player and Game tables managed player details (like names and numbers) and game information (such as video URLs and titles)" +
        "\n\tWith the database in place, I turned to the front end. My goal was simplicity and functionality, so I kept the development process efficient and focused. Using Bootstrap, AJAX, HTML, CSS, and JavaScript, I quickly built a minimalist interface. Looking back, I realize that with the skills I’ve gained since then, I could have implemented the front end with Svelte and TailwindCSS for a more modern and polished experience. But at the time, I prioritized getting the product out quickly, and it worked. The website’s core functionality was intuitive and effective. Players and coaches could select a game and player name, view the corresponding video, and see a list of notes alongside it. Clicking on a note skipped the video to the relevant timestamp, streamlining the feedback process." +
        "\n\tThe most challenging part of this project was hosting the website. It was my first time navigating this process, and I decided to use an AWS EC2 instance. AWS was unfamiliar territory for me, but I saw it as an opportunity to learn. An EC2 instance seemed like a logical starting point—it was free for the first year and offered the flexibility I needed. However, setting it up required a lot of trial and error. I spent hours researching how to host a public website and attach a domain to the instance. Ultimately, I followed an online guide step-by-step to get everything up and running. This was the final piece of the puzzle, and it marked a significant milestone in my development journey.",
        conclusion: "The players benefited immensely from this project. They received detailed feedback tied directly to their gameplay—feedback that would have been impossible to deliver during matches. For me, this project was equally valuable. It introduced me to AWS, taught me how to spin up an EC2 instance, and gave me experience developing a product under tight time constraints. I learned to lean on the tools I already knew to quickly deliver a functional solution, which boosted my confidence in my ability to build practical, useful tools. This project opened the door to future endeavors, showing me that with determination and creativity, I could bring my ideas to life.",
        technologies: [ "HTML", 
                        "CSS", 
                        "JavaScript", 
                        "Python", 
                        "Flask", 
                        "AWS (EC2)", 
                        "MySQL", 
                        "Bootstrap",
                        "AJAX", 
                        "Ubuntu"
                      ],
        image: "/images/16hawks.PNG",
    },
    {
        slug: "Volleyball-Stats",
        name: "Volleyball Stats App",
        descriptionBrief: "An app that I can use to track my volleyball players stats",
        inspiration: "\tWhen I became an assistant volleyball coach, I wasn’t sure how effective I’d be. To compensate for my lack of experience, I decided to contribute in a different way: by taking detailed stats during games. If I couldn’t give great coaching tips, I could at least provide meaningful data. However, as a stats minor, I quickly realized the existing apps didn’t meet my needs—none of them allowed me to assess whether trends were statistically significant. So, I decided to build the best tool for the job myself.",
        body: "\tI had never built an app before and didn’t know where to start. After researching my options, I decided on React Native as the framework. I wanted to learn React, and this seemed like a great opportunity to do so. Next, I needed to figure out how to get the app running on an iPad for development. That’s when I discovered Expo, an open-source platform for building, deploying, and testing React Native apps. Expo’s tools helped me get up and running quickly, and I dove into the project." +
        "\n\tThis project taught me more about building software than any other I’ve undertaken. I began with what I knew best: designing the SQLite database. This gave me a solid foundation with tables for players, teams, matches, and stats. However, when I transitioned to building the app’s front end, I ran into trouble. I simply didn’t know enough about React Native. My first big lesson was realizing that it’s okay to pause and prepare more before jumping into development. A simple tutorial on React Native wasn’t enough—I needed to build a stronger foundation first." +
        "\n\tAbout midway through development, I discovered Redux, which simplified state management significantly. But by then, I had already implemented state management manually in much of the app. Instead of going back and refactoring the older code, I decided to push forward with Redux from that point onward. My second big lesson: Always go back and align older code with new standards to ensure consistency." +
        "\n\tEarly in the project, I skipped commenting, thinking I could remember everything I’d written. But when I revisited that code later, I had no idea what I was looking at. While I don’t comment excessively in personal projects, I’ve since learned to document methods that are important, confusing, or likely to need revisiting." +
        "\n\tThe hardest lesson came at the end of the project. I had completed most of the app when my hard drive failed, and I lost nearly all of my work. Unfortunately, I hadn’t been pushing updates to GitHub frequently enough. Losing the project was a tough pill to swallow, but it taught me the critical importance of version control and frequent backups.",
        conclusion: "\tIn the end, I discovered I knew more about volleyball than I gave myself credit for—and that I was more effective as a coach during matches than as a statistician. While the project didn’t result in a polished app, it became a touchstone for my development practices. Every time I consider skipping code comments, avoiding a refactor, or delaying a GitHub push, I think about this project. It shaped the way I approach software development, turning hard-earned lessons into habits that make me a better programmer today.",
        technologies: [
                        "React Native",
                        "Redux",
                        "Expo",
                        "SQLite"
                      ],
        image: "/images/vball-stats.jpg",
    },
    {
        slug: "VDF",
        name: "Virginia Divorce Filings",
        descriptionBrief: "A website that generates the paperwork required to file a divorce",
        inspiration: "\tA lawyer who runs a mediation firm needed a website that allows people to fill in information about their divorce and it prints out three PDFs. The lawyer, who represents both parties, cannot provide legal advice about these documents, meaning the website needed robust validation to prevent submission errors.This project was my first professional project, and it required careful planning and execution to meet the client's needs while ensuring a smooth user experience.",
        body: "\tAt the time, I was experimenting with Svelte, so it became the natural choice for this project. I paired it with shadcn-Svelte components, which provided a robust foundation for form creation. Generating PDFs presented a new challenge. Drawing on lessons from previous projects, I researched extensively and chose PDFKit as my tool. It proved to be a suitable choice for creating complex, structured documents." +
        "\n\tThe first step was to produce the initial document. Using sample templates provided by the client, I designed the PDF layout and content. It felt like creating an elaborate Mad Lib, where placeholders were dynamically populated with user-submitted information. Once this document was working, I expanded the approach to create the other two required PDFs." +
        "\n\tAfter completing the PDF generation, I turned to building the user form. This form needed strong validation to ensure users submitted accurate information. I used Zod and SuperForms to handle both client-side and server-side validation. This approach was straightforward, much easier than regular expressions, and added an essential layer of reliability to the process." +
        "\n\tFor delivering the PDFs, I had two options: provide a direct download or send them via email. I opted for email delivery to ensure users wouldn’t lose their documents. This was my first time setting up automated emails and working with Google's OAuth2. While it required some effort to implement, this system became the backbone of the program, providing a seamless user experience." +
        "\n\tFinally, I integrated a payment processor. I chose Stripe because of its reputation for simplicity and reliability. After learning how the system works, implementing it was straightforward thanks to the helpful documentation and pre-written code snippets provided by Stripe.",
        conclusion: "\tThis project was my first step into professional software development, and it came with an added layer of pressure. I wanted to deliver a rock-solid program to impress the client and minimize future maintenance needs. Through this experience, I learned how to: build systems with strong validation to ensure reliability, generate professional PDFs dynamically, implement payment processing with Stripe, and collaborate with a client and understand their needs." +
        "\n\tThe project was a success, and it taught me the importance of writing code that is not only functional but maintainable. More than anything, this experience gave me the confidence to tackle more professional projects in the future.",
        technologies: [
            "Svelte",
            "SvelteKit",
            "shadcn-Svelte",
            "ZOD",
            "SuperForms",
            "PDFKit",
            "Node.js",
            "Stripe"
        ],
        image: "/images/Gavel.jpg",
    },
    {
        slug: "RAG-Teacher",
        name: "RAG Teacher",
        descriptionBrief: "A RAG system designed to give teachers a better understanding of what their students a using LLMs for",
        inspiration: "\tWhile preparing a presentation on Chroma, a vector database, for my Advanced Databases class, I discovered retrieval-augmented generation (RAG). That same week, I was using an LLM to study for a final, but the responses I received weren’t specific enough to my class material. This sparked the idea for a project: create an educational tool powered by RAG to help students study with more tailored responses, provide teachers with insights into student queries, and display the referenced documents for added transparency.",
        body: "\tThe first step was to build the RAG model itself. Using LangChain, I connected the Chroma vector database and OpenAI's LLMs. Fine-tuning the system message to ensure the model behaved as intended was particularly rewarding." +
        "\n\tChoosing the front-end framework was simple: I wanted to learn Svelte, which consistently ranks as one of the most loved frameworks in developer surveys. To speed up development, I used shadcn-Svelte components for a polished and functional design. The initial task was to build a file upload page, where students could upload class materials. This process involved several steps: selecting the file displaying the file in an upload table for user review, providing a button to start the upload, uploading the file to the server, passing the file to Chroma, where it was parsed into embeddingsn and then confirming success and clearing the table for the next upload. This was when I realized the project’s scale. Each feature required a lot of moving parts to function seamlessly." +
        "\n\tTo store uploaded documents, I integrated an AWS S3 bucket for the first time. The S3 bucket served as a reliable storage solution, allowing students to access their uploaded files alongside the LLM-generated responses." +
        "\n\tI wanted to provide teachers with summaries of what students were struggling with. To achieve this, I stored conversations with the LLM and used the LLM itself to summarize common areas of confusion. While testing showed these summaries were useful, I became intrigued by the idea of clustering student queries using a vector database for more advanced insights—a feature I might explore in the future.",
        conclusion: "\tI learned so many, genuinely cool technologies from this project from LangChain, to OpenAi's API, to S3 buckets, to SvelteKit, and so much more. I'm not sure what my long term plan is for this project, the MVP is complete and yet I hardly feel done with it. I hope that there is some use for it in the future, but if not, it was still well worth my time.",
        technologies: [ "Svelte",
                        "SvelteKit",
                        "Node.js",
                        "S3 bucket",
                        "LangChain",
                        "Chroma",
                        "OpenAi API",
                        "shadcn-Svelte",
                        "TailwindCSS",
                        "Python",
        ],
        image: "/images/RAG.jpg",
    }
]

export const load: PageLoad = ({ params }) => {
    const project = projects.find(p => p.slug === params.slug);
	if (project) {
		return project;
	}

	error(404, 'Not found');
};