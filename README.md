# Next React

> Next React starter project

## Installation

```bash
NAME=<my-project-name> &&
npx degit guillaumecatel/shared/templates/base-project $NAME &&
npx degit guillaumecatel/shared/templates/next-react $NAME --force

cd <my-project-name>
cp .env.example .env
pnpm i
```

## Usage

```bash
pnpm dev # start development server
pnpm build # build for production
pnpm start # start production server

pnpm test:unit # start unit test
pnpm test:e2e # start e2e test

pnpm eslint # lint Typescript/Javascript
pnpm eslint:fix # lint and fix Typescript/Javascript
pnpm stylelint # lint CSS/SASS
pnpm stylelint:fix # lint and fix CSS/SASS
```

## License
MIT
