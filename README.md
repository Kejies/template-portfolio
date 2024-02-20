This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
## You can Change, add, and remove Title,Name, Description, Image in portfolio.json

{
    "LoadingScreen": {
        "title": "https://portfolio.slicing.dev"
    },
    "portfolio": {
        "title": "Your Title",
        "header_title": "Your Header Title",
        "icon": "favicon.ico",
        "header": "Hello Everyone!",
        "name" : "My Name is Your Name",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quam!",
        "image_hero": "profile.jpg",
        "socialMedia": {
            "github": { "icon": "faGithub", "url": "https://github.com/" },
            "twitter": { "icon": "faXTwitter", "url": "https://twitter.com/" },
            "linkedin": { "icon": "faLinkedin", "url": "https://www.linkedin.com/" },
            "instagram": { "icon": "faInstagram", "url": "https://www.instagram.com/" }
        }
    },
    "AboutMe":{
        "title": "This is title",
        "header": "this is header",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum eos iste distinctio cupiditate eligendi amet ipsa? Explicabo, aut fugiat numquam, minus quisquam veniam, ex dicta velit dolore provident illum facilis.",
        "image": "about.jpg"
    },
    "MySkills":{
        "title": "Frontend & Backend Development",
        "description":"you can remove this part if you want",
        "skills": [
            {
                "title": "HTML",
                "image": "html.png",
                "description": "Basic"
            },
            {
                "title": "CSS",
                "image": "css.png",
                "description": "Basic"
            },
            {
                "title": "Javascript",
                "image": "js.png",
                "description": "Basic"
            }
        ]
    },
    "MyProjects":{
        "title": "MyProject",
        "description":"you can remove this part if you want",
        "projects": [
            {
                "title": "Project 1",
                "image": "project_1.png",
                "viewLink": "https://example.com/",
                "description": "Basic"
            },
            {
                "title": "Project 2",
                "image": "project_2.png",
                "viewLink": "https://example.com/",
                "description": "Basic"
            },
            {
                "title": "Project 3",
                "image": "project_3.png",
                "viewLink": "https://example.com/",
                "description": "Basic"
            }
        ]
    }
}

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
