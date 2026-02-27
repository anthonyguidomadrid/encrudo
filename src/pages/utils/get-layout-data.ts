import { client } from '@src/lib/client'
import type { LayoutQuery } from '@src/lib/__generated/sdk'

export const getLayoutData = async (locale?: string): Promise<LayoutQuery> => {
  const data = await client.layout({ locale })
  if (!data) {
    throw new Error('Missing layout data')
  }
  return data
}
