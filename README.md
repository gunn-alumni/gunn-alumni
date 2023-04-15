# Gunn Alumni Project
This is a student-led project to create an alumni site for Gunn High School, something that suprisingly does not exist yet

## Deployment Prerequisites
[node (v18)](https://nodejs.org/en/download/)

pnpm (run command below after installing node):
```bash
corepack enable
```

## Development Prerequisites
[git](https://git-scm.com/downloads)

[vscode eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

add this to your `settings.json`:
```
    "editor.formatOnSave": true,
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true,
    "files.trimFinalNewlines": true,
    "eslint.format.enable": true,
    "eslint.onIgnoredFiles": "warn",
    "[typescript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    }
```

## Setup Instructions
Clone the repo and install dependencies
```bash
git clone https://github.com/gunn-alumni/gunn-alumni.git
cd gunn-alumni
pnpm install
```
Then run the site on localhost:3000
```bash
pnpm run dev
```

## Read more information on [our blog](https://blog.gunnhigh.school)
