import { CodegenConfig } from '@graphql-codegen/cli';

const endpointOverride = process.env.CONTENTFUL_GRAPHQL_ENDPOINT;
const generateEndpoint = 'https://graphql.contentful.com/content/v1/spaces/7hpjtmfrm15k/environments/master'
const apiToken = 'hd4UrHWIgyeMSrGlwyHaYgss9nJ6Teyr8mo8uVLnHWM'
const productionEndpoint = 'https://graphql.contentful.com/content/v1/spaces';
export const endpoint = `${endpointOverride || productionEndpoint}/${process.env.CONTENTFUL_SPACE_ID}`;
export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [generateEndpoint || '']: {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      },
    },
  ],
  generates: {
    'src/lib/__generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
    'src/lib/__generated/graphql.schema.graphql': {
      plugins: ['schema-ast'],
    },
    'src/lib/__generated/sdk.ts': {
      documents: ['src/lib/graphql/**/*.graphql'],
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
      },
    },
  },
};

export default config;
