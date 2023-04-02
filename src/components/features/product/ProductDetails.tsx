import { CtfImage } from '@src/components/features/contentful/ctf-image';
import { FormatCurrency } from '@src/components/shared/format-currency';
import { QuantitySelector } from '@src/components/shared/quantity-selector';
import { PageProductFieldsFragment } from '@src/lib/__generated/sdk';

export const ProductDetails = ({
  name,
  price,
  description,
  featuredProductImage,
  productImagesCollection,
}: PageProductFieldsFragment) => {

  return (
    <h1>Product Detail</h1>
  );
};
