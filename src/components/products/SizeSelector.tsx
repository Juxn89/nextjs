import { FC } from "react"
import { Box, Button } from "@mui/material"
import { ValidSizes } from "@interfaces/products"

interface SizeSelectorProp {
    selectedSize?: ValidSizes,
    sizes: ValidSizes[],
    onSelectedSize: (size: ValidSizes) => void
}

export const SizeSelector: FC<SizeSelectorProp> = ({ sizes, selectedSize, onSelectedSize }) => {
    return (
      <Box>
        {
          sizes.map(size => (
            <Button 
              key={size} 
              size='small' 
              color={ selectedSize === size ? 'primary' : 'info' }
              onClick={ () => onSelectedSize(size) }
            >
              { size }
            </Button>
          ))
        }
      </Box>
    )
}
