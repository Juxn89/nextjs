import { FC } from "react"
import { Grid } from "@mui/material"
import { ProductCard } from "@components/products/index";
import { IProduct } from '@interfaces/index';

interface ProductListProps {
    products: IProduct[]
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <Grid container spacing={4}>
        {
            products.map(product => (
                <ProductCard key={ product.slug } product={ product } />
            ))
        }
    </Grid>
  )
}
