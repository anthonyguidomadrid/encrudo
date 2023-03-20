import { Box } from '@chakra-ui/react';
import Link from 'next/link';

import { CtfImage } from '@src/components/features/contentful/ctf-image';
import { PageProductFieldsFragment } from '@src/lib/__generated/sdk';

export const ProductTile = ({ featuredProductImage, slug }: PageProductFieldsFragment) => {
  return slug ? (
    <Box as={Link} href={slug}>
      {featuredProductImage && (
        <Box borderRadius={4} overflow="hidden">
          <CtfImage {...featuredProductImage} />
        </Box>
      )}
    </Box>
  ) : null;
};
