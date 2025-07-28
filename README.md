# Encrudo Taller App

Encrudo Taller is an architecture application, which can be visited on the following link: [encrudotaller.com](https://www.encrudotaller.com/) 

## Previews

![Home page preview](https://github.com/anthonyguidomadrid/encrudo/assets/80059432/2a87db74-03d2-43a9-9d3d-6484142bc7dc)

![Project page preview](https://github.com/anthonyguidomadrid/encrudo/assets/80059432/53287590-0dfe-49a2-b0d8-c79194e5fabf)


## Getting started

To get started, read the following guidelines.

- [Environment variables](./README.md#environment-variables)
- [Dependencies](./README.md#dependencies)
- [Development](./README.md#development)
- [Contentful API & GraphQL](./README.md#contentful-api--graphql)
- [Deployment](./README.md#deployment)


### Environment variables

In order to authenticate the requests to the Contentful APIs, the following values are necessary:

- Your space ID: [https://www.contentful.com/help/find-space-id/](https://www.contentful.com/help/find-space-id/)
- Contentful Delivery API token: [https://www.contentful.com/developers/docs/references/content-delivery-api/](https://www.contentful.com/developers/docs/references/content-delivery-api/)
- Contentful Preview API token: [https://www.contentful.com/developers/docs/references/content-preview-api/](https://www.contentful.com/developers/docs/references/content-preview-api/)
- Email Auth User: Gmail email
- Email Auth Pass: Gmail password
- Email Recipient: The email to which messages will be sent from the contact form.
- Recaptcha client key: [https://developers.google.com/recaptcha/intro](https://developers.google.com/recaptcha/intro)

Rename the `.env.example` file to `.env` and add the necessary values.


### Dependencies

To install the necessary dependencies, run:

```bash
yarn
```

### Run the Starter Template in development mode

```bash
yarn dev
```

The Starter Template should be up and running on `http://localhost:3000`.

All necessary dependencies are installed under `node_modules` and any necessary tools can be accessed via npm scripts.

## Development

### Node

It is recommended to use the Node version listed in the `.nvmrc` file, we recommend using [nvm](https://github.com/nvm-sh/nvm) to easily switch between Node versions.

### Husky & git hooks

This repository makes use of [Husky](https://github.com/typicode/husky) to enforce commit hooks.

The config for both the `pre-commit` and `pre-push` hooks can be found in the `.husky` folder, located in the root of the project.

---

#### Pre-commit

Before allowing a commit, we require a successful result from the TypeScript compiler (`tsc`) and our `lint` script will be run.

This ensures all ESLint and Prettier rules are enforced on the files that are staged to be committed.

The `tsc` command is run separately from the `lint` step because we require the Typescript compiler to sample _all_ files.

This is important to ensure that no deviating types were introduced by the [codegen](./README.md#graphql--code-generation) for example.

---

#### Pre-push

The same two tasks are run for pre-push and for pre-commit.

---

#### Overriding the Husky git hooks

In case of wanting to bypass the `pre-commit` or `pre-push` hooks, pass a `--noVerify` flag to your Git commands.

⚠️ Make sure you only use this if you know why you're using it. ⚠️

### Contentful API & GraphQL

This project makes use of Contentful's [GraphQL API](https://www.contentful.com/developers/docs/references/graphql/).

API calls made to the Contentful GraphQL endpoint are made through `graphql-request`.

The types are generated from the `.graphql` files located in the `/lib/graphql/` directory:

1. `lib/graphql/[fileName].graphql` is detected by the [codegen](./README.md#graphql--code-generation)
2. `lib/__generated/sdk.ts` is generated
3. Within the generated file, they types and a new `getSdk` function are generated
4. The `getSdk` function can now be imported and used within the `getStaticProps` in the pages files

### GraphQL & code generation

We use `graphql-codegen` to generate a type-safe API client, utilizing [GraphQLClient](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-graphql-request) as the "client".

The data for the hooks is pre-fetched on the server-side.

---

#### Commands

In order to (re-)generate the GraphQL schema, types and hooks, please use either of the following commands:

- `yarn graphql-codegen:generate` generates a schema, types and code to fetch data from the Contentful APIs
- `yarn graphql-codegen:watch` similar to the `generate` command, but it runs as a watch task which will rerun the steps when changes are made in the `.graphql` files

The first steps of the codegen generate files that contain the GraphQL schema and matching TypeScript types.
They're generated to the `src/lib/__generated` folder and ought to be committed once altered/added to the repository.

Additionally, the codegen watches `.graphql` files in our `src` folder, if it runs successfully it generates a `__generated` folder collocated in the folder where the `.graphql` file was found.

One exception to this rule is the `src/lib/fragments` folder which contains shared GraphQL Fragments that are used in several other queries/fragments.

The TS types for these files are generated in the same location, in a `__generated` folder and like the other files ought to be committed.

---

#### Configuration

The configuration for the codegen can be found in `codegen.ts`, located in the root of the project.

---

## Deployment

Currently deployed on the following domain: [encrudotaller.com](https://www.encrudotaller.com/) through [Vercel](https://vercel.com/dashboard).

---

## Author

**Anthony Guido**

- Github: [@anthonyguidomadrid](https://github.com/anthonyguidomadrid/)
- LinkedIn: [@anthony-guido](https://www.linkedin.com/in/anthony-guido/)

## License

Copyright © 2023 [Anthony Guido](https://github.com/anthonyguidomadrid/).

<!-- FOOTNOTES -->

[^1]: [Next.js docs](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)
[^2]: [GraphQL docs](https://graphql.org/learn/)
[^3]: [graphql-codegen](https://www.the-guild.dev/graphql/codegen)
[^4]: [TypeScript](https://www.typescriptlang.org/)
[^note]: [React docs](https://reactjs.org/docs/getting-started.html)
