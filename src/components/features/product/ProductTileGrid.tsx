import { ProductTile } from '@src/components/features/product/ProductTile'
import { PageProductFieldsFragment } from '@src/lib/__generated/sdk'

interface ProductTileGridProps {
  title: string
  products: Array<PageProductFieldsFragment | undefined | null>
}

export const ProductTileGrid = ({ title, products }: ProductTileGridProps) => {
  return <h1>Product Tile Grid</h1>
}
