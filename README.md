[![Netlify Status](https://api.netlify.com/api/v1/badges/abceee98-596b-45f5-8eaf-e306a5f5ab39/deploy-status)](https://app.netlify.com/sites/gunn-alumni/deploys)

# Gunn Alumni Project

This is a student-led project to create an alumni site for Gunn High School, something that suprisingly does not exist yet.
Our site is a Next.js app that uses Typescript, TailwindCSS for frontend, connected to a Supabase project for backend.

Find our site at https://alumni.gunnhigh.school/.

Read more information on [our blog](https://blog.gunnhigh.school).

## Prerequisites

If you are completely new to this type of project, check out [this document](https://docs.google.com/document/d/1Gont6hj2_EOZg-2kOcz5mQtMADW-qrpboKmYYU3YVLw/edit?usp=sharing) to see what skills you may want to learn.

[node (v18)](https://nodejs.org/en/download/)

[git](https://git-scm.com/downloads)

[vscode eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Setup Instructions

Clone the repo and install dependencies

```bash
git clone https://github.com/gunn-alumni/gunn-alumni.git
cd gunn-alumni
npm i
```

Then run the site on localhost:3000

```bash
npm run dev
```

## Generate Database Types

```bash
npx supabase gen types typescript --project-id "remafpgrzmuvfqnmgvmn" --schema public > src/types/supabase.d.ts
```

## Warnings

do not put sensitive/important/large data in the db
