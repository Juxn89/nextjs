import { FC } from "react"
import { Box, Button } from "@mui/material"
import { ValidSizes } from "@interfaces/products"

interface SizeSelectorProp {
    selectedSize?: ValidSizes,
    sizes: ValidSizes[]
}

export const SizeSelector: FC<SizeSelectorProp> = ({ sizes, selectedSize }) => {
    return (
      <Box>
        {
          sizes.map(size => (
            <Button key={size} size='small' color={ selectedSize === size ? 'primary' : 'info' }>
              { size }
            </Button>
          ))
        }
      </Box>
    )
}
