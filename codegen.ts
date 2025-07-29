import { CodegenConfig } from '@graphql-codegen/cli'

const graphQlEndpoint = process.env.CONTENTFUL_GRAPHQL_ENDPOINT
const spaceId = process.env.CONTENTFUL_SPACE_ID
export const endpoint = `${graphQlEndpoint}/${spaceId}`
const contentfulToken = process.env.CONTENTFUL_DELIVERY_API_TOKEN

export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [endpoint || '']: {
        headers: {
          Authorization: `Bearer ${contentfulToken}`
        }
      }
    }
  ],
  generates: {
    'src/lib/__generated/graphql.schema.json': {
      plugins: ['introspection']
    },
    'src/lib/__generated/graphql.schema.graphql': {
      plugins: ['schema-ast']
    },
    'src/lib/__generated/sdk.ts': {
      documents: ['src/lib/graphql/**/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ],
      config: {
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true
      }
    }
  }
}

export default config
