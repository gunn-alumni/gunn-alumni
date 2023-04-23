# Gunn Alumni Project
This is a student-led project to create an alumni site for Gunn High School, something that suprisingly does not exist yet. Read more information on [our blog](https://blog.gunnhigh.school).

## Prerequisites
[node (v18)](https://nodejs.org/en/download/)

pnpm (run command below after installing node):
```bash
corepack enable
```

[git](https://git-scm.com/downloads)

[vscode eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

an sqlite3 editor if you want to view and modify the database

## Setup Instructions
Clone the repo and install dependencies
```bash
git clone https://github.com/gunn-alumni/gunn-alumni.git
cd gunn-alumni
pnpm i
```
Then run the site on localhost:3000
```bash
pnpm run dev
```

## Warnings
do not put sensitive/important/large data in the db.
