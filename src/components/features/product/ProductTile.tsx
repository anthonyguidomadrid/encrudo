import Link from 'next/link'

import { CtfImage } from '@src/components/features/contentful/ctf-image'
import { PageProductFieldsFragment } from '@src/lib/__generated/sdk'

export const ProductTile = ({
  featuredProductImage,
  slug
}: PageProductFieldsFragment) => {
  return slug ? (
    <div>
      {featuredProductImage && (
        <div>
          <CtfImage {...featuredProductImage} />
        </div>
      )}
    </div>
  ) : null
}
