import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

let projects = [
    {
        slug: "THSMS",
        name: "THSMS",
        descriptionBrief: "A system used to keep track of dishes in the sink",
        description: "THSMS (Tracking Household Sink Management System) is a full-stack project designed to track sink usage in a shared college house. Using a Raspberry Pi, OpenCV, and a local SQLite database, it captured motion-triggered videos and photos of the sink, documenting before-and-after states to identify dish-related culprits. The project featured a simple, mobile-optimized web interface and taught me valuable lessons about system design, open-source tools, and the fun of bringing personal ideas to life.",
        inspiration: "\tLiving in my college house of six college boys, the sink frequently became filled with dishes. It would always come down to the fact that someone would put something a pan or a plate into the sink, leave it, and forget about it. Over time, that pattern would lead to empty cabinets, no clean pans. I decided to take apply a software to this real world problem.",
        body: "\tThis project ended up being a full-stack project down to the hardware. My original plan was to buy a webcam and tape it to the cailing above the sink and connect it to my old MacBook that ran the software. I consulted with a professor who found this project mildly amusing and suggested that I use a Raspberry Pi instead. I aquired those two tools and got to work." + 
        "\n\tThe previous time that I have used a Raspberry Pi was back when I was in middle school so I had a lot to learn. I loaded it with Ubuntu Server and set up SSH. Then I drew up my plan. I would monitor the sink for movement and when there was, I would take a video and start timers for one hour, six hours, twelve hours, twenty-four hours, and forty-eight hours, at the end of those timers, it takes a photo of the sink. Most importantly, it would capture the frame before movement and the final frame. This way there would be a before and after of the sink. These photos and videos are stored locally on the Raspberry Pi, withing the filesystem itself. To keep tack of everything, I also used a SQLite database to track when things were added." +
        "\n\tThe motion capture was interesting. I had never OpenCV before. It was actully my first time using an open source project on my own. This was the moment in my schooling so far that I realised how powerful libraries and packages where. It changed how I looked at coding. Anyways, I set a ROI (region of intrest) around the sink and an ROI around the stovetop. Then, every frame that came in was subtracted from the previous. If the difference was great enough, that was deemed to be motion and the video and timers were started. The video ended after a period of stillness." + 
        "\n\tThe next thing that I needed was a way to display these photos and videos so that my housemates could access them. I had to learn about hosting a website locally. I ended up using Apache which wasn't too hard to learn. I then built an extremely simple website that just allowed you to scroll through the archive. It was optimised for mobile because I knew that was how I planned on using it. I used javascript, CSS, HTML, jQuery and Bootstrap.",
        conclusion: "\tThis was my first personal project that I took on that I felt was just fun! I had worked on the Volleyball Stats app before but that was a little more serious. From this project, I learned about the power of open source tools through openCV, learned about hosting websites, and most importantly, learned how to design a system from the ground up." +
        "\n\tNow, did it work? The answer was a resounding YES. One would say too well. Our house groupchat was flooded of screenshots of Micheal leaving a mountain of dishes in the sink at 2:30am four days prior. We found out who put the fork in disposal. The oversight by me was not giving myself a way to delete the photos of me! I was as guilty as everyone else! The final thing that made it worth it was it capturing my buddy Alex finding the oven on fire and blasting it with the fire extinguisher." +
        "\n\tAll in all, this was an important project for me where I learned that I had the ability to build the projects I drempt up.",
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
        inspiration: "\tThe stars alligned for this project, I was in a Mobile App Development class and Viticulture and Enology class at college. The final project in Mobile Apps was to build an app using a certain amount of features we learned in the class. The professor said 'the best projects are the ones the students care about.' I was sitting in Viticulture and Enology, filling out this wine rating slip when it hit, 'I should make an app for this.'",
        body: "\tThis project was built on the MAUI platform, a very basic framework that mostly utalizes C# and XAML. We spent the past eight weeks working in MAUI so I felt pretty comfortable trying to do the things I needed to do. The actual development of this app was very straight forward for this app. The only things that I really needed to look into were how to make a custom menu bar. The real story to this project was the continued testing and development." +
        "\n\tA little background on Viticulture and Enology is that we learned about the different wine regions in a specific country each week and then tried between six and twelve wines from that region. As we would try these wines, we would fill out these paper point cards that would help us evaluate each wine. Once I had the MVP complete, I would instead use my app to score each of the wines. The first week I used the app, I discovered that I had an error in my MVVM implementation that made the total score calculation incorrect. An easy fix, and the last little error that I needed to work out." + 
        "'\n\tThe big improvements came with just the usablilty of the app. At first, I had inputs for food it was consumed with, location tasted, and other things. Something that I realized is that I felt almost obligated to fill them out while I was using the app. The next week I added a switch to turn them on and off on the tasting page, but even then, this was pretty annoying for me. Then next week, I moved these settings to a configuration page. This solved it for me and I felt much better after this." +
        "\n\tAnother thing that I realized that I needed was how to organize the wines that I had tasted. They were originally sorted in order of quality and by name. Then, I was at the store and I wanted to grab a bottle of Piont Noir that I had in class but couldn't remember the name of. I knew I had it two weeks prior, but just couldn't remember what it was called. That evening I added a sort by date. Luckily, I had always been collecting the date tasted automatically so it was a simple additional feature.",
        conclusion: "\tAt the end of this project I was able to build an highly funtional app that did everything that I wanted it to do, the way I would like it to. The thing that I learned most through this project was how to test my app in a real world scenario and make the improvements that made the app better. I am very proud of this app because of these changes I made based on my own feedback. I was able to take this testing mindset into future projects.",
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
        inspiration: "\tI was an assistant coach for a volleyball team my Senior year of college. My team had their first tournament while I was studying abroad in Manchester, England and I couldn't be there. One of the parents recorded the matches and put them on YouTube. I was watching them play, trying to get up to date on the team's skill level. I was see all of these things that I wanted to tell the players, but I couldn't because I had no way of telling them. I thought about writing a word doc with time stamps, but I knew the players simply were not that invested. I decided to make a website that would allow myself and my head coach to leave notes on the videos.",
        body: "\tTime was of the essance for this project. I got right to work on this when I decided to build this project. I had know from the THSMS project that I would need a database of some sort. I landed on MySql because I had never really used it and I wanted to know more about it. I have found that for projects like these, I find it easiest to design the database and then build the front-end around this. I needed a table to keep track of the Notes which refrenced the Game and Player tables. This would allow queries that by game and by player. This table also stored the timestamp for the notes. The player tables just stored the players and numbers. The game tables stored the URL to the game and the title I gave each game." +
        "\n\tNext, I built out the front end. The website was wildly simple. The only frontend tools I used were Bootstrap and AJAX along with HTML, CSS, and JavaScript. This was a quick development sprint. I was wanted to make a very barebones website fast. Looking back on it, with skills gained in later projects, I would have used Svelte and TailwindCSS but I had not much knowledge in those frameworks at the time. The important thing was functionality, and it was. The players could select their game and name and view the recording with the notes next to the games. If they selected the note, it would skip to that part of the video." +
        "\n\tThe hardest part of this project was simply hosting the website. I had never gone through this process before. I decided to host it from an AWS EC2 instance. This was mostly because I had never used AWS for anything and wanted to get my hands dirty. An EC2 instance seemed like the easiest place to start. It was also free for the first year. I did a lot of poking around, trying to figure out how to get this EC2 instance to host a public website and how to attach a domain to it. I ended up following a step by step guide that I found online. This was the final piece to the puzzle.",
        conclusion: "My players benefitted a lot from this project. They were able to get a lot of feedback from their play that would have been impossible to tell them in the middle of the matches. I, on the other hand, benefitted a lot as well. I started to learn how AWS works and how to spin up an EC2 instance. I also learned how to develop a product fast. I needed to use the tools that I knew so that I could push my product out as fast as possible. It gave me confidence that the tools that I knew how to use could build useful things. It opened myself to many more projects.",
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
        inspiration: "\tI wasn't very sure how I would do as an assistant volleyball coach and I was trying to find a way to mitigate not knowing what I was doing. I decided that I would take stats during all the games, if I couldn't give good tips, at least I could give good data. I looked at all of the possible apps and I decided that none of them were good enough. As a stats minor, I wanted to see if things were statically signicant. I decided that I would build the best tool for the job.",
        body: "\tI had never really made an app before. Honestly, I didn't know where to start. I did a bunch of research before I got started and decided to go with React Native as my framework. I wanted to learn how react worked and thought that this would be a great opportunity to learn. Next, I had to learn how to actually get the app onto the iPad for delopment. This is when I learned about Expo, an open-source platform for building, deploying, and quickly testing React Native apps." +
        "\n\tThis was a project where I learned more about building projects than any other project that I have ever done. I got to work building the SQLite database. This is my strongest skill and by leading with it, I believe that gives me a solid foundation. It had tables for players, teams, matches, and stats. Then I got straight into building the front-end of the app itself. I simply did not know enough. This was my first big lesson, don't start if you are unprepared, just prepare a little more. I had done a simple React Native tutorial, but with no React expirience, I had a lot more learning to do." +
        "\n\tI got through a lot of development, using state with no help, before I learned about Redux. This changed things, but I was relatively far into the development so instead of going back and changing my old code, I decided to just continue and start using Redux from there. This was my second big lesson, go back and make your old code follow the standard so that it all works togeather." +
        "\n\tA third lesson that I learned was not commenting on my code. Now, to be honnest, I don't comment everything on my personal projects, but I do however, comment on the methods that I think that I will have to revisit later, are important, or are confusing. In this project, when I had to go back to the earlier code I wrote, I had no idea what was going on. This became a big issue." +
        "\n\tIn the end, this project was a mess. It was always great. I learned why certain practices are important. I learned to do adequate amount of research, to comment my code, and to go back and make it better. But more than anything, I learned to do frequent pushes to GitHub. I had a hard drive fail after I completed this project and lost most of it. I decided that this was one that I could let go. This was the fourth and hardest lesson to learn.",
        conclusion: "\tIn the end, I turned out to know a lot more about volleyball than I thought. I also was a great coach and was more valuable watching and coaching the matches opposed to taking stats. As far as the project development goes, this is a project that I think about every time I start a new project, don't want to change old code, or think I can get away with not commenting. Most importantly, I think about it when I think that I don't need to push to github. This is one of the projects that really shaped me.",
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
        inspiration: "\tA lawyer who runs a mediation firm needed a website that allows people to fill in information about their divorce and it prints out three PDFs. The lawyer that represents the divorcing couple cannot give advice on these documents. This means that the website needs to have strong validation on the form they are filling out because if they do it wrong, they will be submitting incorrect paperwork.",
        body: "\tI had been playing around with Svelte a lot when I started this project so Svelte was the natural choice. I had been using shadcn-Svelte components to build other little projects and used their form tools.Next, I had to learn how to actually build a PDF. I took some lessons that I had learned from my volleyball stats app and did a lot of research into which package I should use. I ended up picking PDFKit. I think that this was a suitable choice." +
        "\n\tThe first thing that I did was produce the first document. I was given examples of what they were to look like and say. It was kind of like making a big Mad Lib. Once the first document was done, I built the form that the website would use populate the parts of the PDF. Then I started with the validation portion. I used ZOD and SuperForms to handle this validation. It was pretty straight forward and much easier than using RegEx. I think that it is overkill, but it uses client-side and server-side validation." +
        "\n\tThe next thing was file delivery. The two options were a download button or an email. I decided that email was best because if the user lost the download, it would be a huge pain to get them a new one, but if they were emailed the documents, it would be easy to direct them to the right place. I had never set up automated emails before nor had I ever used Google's OAuth2. This all took some time to get up and running, but once it was the work horse of the program was complete." +
        "\n\tThe final thing that I needed to implement was the payment processor. I had never done this before but decided it be best to use Stripe. The first thing that I did was learn how the system works. Once that was done, Stripe has enough code chunks that it was pretty easy to implement. Besides some database and tracking information, that was the project.",
        conclusion: "\tThis was the first program that I wrote professionally. It had an extra layer of intensity. I also felt like I wanted to write a rock solid program because I wanted to impress the client and also didn't want to be on the hook for fixing it down the road.This project taught me a lot about actually having a client and writing code that is strong.",
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
        inspiration: "\tIn my Advanced Databases class, I gave a presentation on Chroma, the vector database. While researching Chroma, I learned about retrieval-augmented generation or RAG. Later that week, I was studying for a final and was of course using an LLM to help. However, due to the nature of the material, the responces were not specific enough to the material in class. I had always wanted to do a project with an LLM so I decided that this was a great opportunity. While thinking about this project, I also wanted to give teachers a tool to see what their students were using their class's LLM for. Finally, I wanted the students to be able to see the documents that the LLM was refrencing for context to the answer.",
        body: "\tThe first thing that I wanted to make sure that I could do was able to build the RAG model itself. This ended up being very easy. I used LangChain which has support for Chroma and different LLMs. I decided to use OpenAi for LLMs. I found it to be enjoyable trying to fine tune the system message so that the LLM would behave the way I was hoping it would" +
        "\n\tThe first thing I needed to do was decide on a front-end framework. Svelte was on the top of my \"learn list\" since I saw on the StackOverflow survey that it is the most beloved programming framework. The next thing that I believed need to be done was to build the file input page. I frequently find myself building projects in the order in which you would use them. I know my strengths and weaknesses, and for that reason, I decided to use components from shadcn-Svelte for this project instead of designing my own. It was interesting working through the upload file process because of all of the steps involved. I had made websites before, but none with so many steps: the file selected, the file displaying in the upload table for the user, the button to start the upload, the file upload, the server recieving it, the file being passed to the Chroma where it is parsed and turned into embeddings, confirmation of success being returned, and finally, the table being cleared and confirmation displayed. This was when I realized the scale of this project. There was so much that needed to be built for every thing I wanted this project to do." +
        "\n\tDevelopment continued. For the first time, I used an S3 bucket from AWS. I had never used one before and wanted to know more about them. They really are what they sound like... a bucket. This allowed the app to store the uploaded documents so that they could be returned to the student when the reponses were created." +
        "\n\tFinally, the teaching tools needed to be generated. To do this, I would store the converations that were had with the LLM and feed them into the LLM had have it produce a summary of the things that the students seemed to be the most confused about. From my testing, this seemed to do an adequate job of summarizing. However, the idea that has peaked my interest was to put all of the questions into a vector database themselves and identify the clusters. This is just something that I'm thinking about in the future though.",
        conclusion: "\tAll in all, I learned so many, genuinely cool technologies from this project from LangChain, to OpenAi's API, to S3 buckets, to SvelteKit, and so much more. I'm not sure what my long term plan is for this project, the MVP is complete and yet I hardly feel done with it. I hope that there is some use for it in the future, but if not, it was still well worth my time.",
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