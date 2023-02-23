import { FC } from "react"
import { Box, IconButton, Typography } from "@mui/material"
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"

interface ItemCounterProps {
  currentValue: number,
  updateQuantity: (quantity: number) => void,
  maxValue: number,
}

export const ItemCounter: FC<ItemCounterProps> = ({ currentValue, updateQuantity, maxValue }) => {
  return (
    <Box display='flex' alignItems='center'>
        <IconButton onClick={ () => updateQuantity(-1) }>
            <RemoveCircleOutline />
        </IconButton>
        <Typography sx={{ width: 40, textAlign: 'center' }}>{ currentValue }</Typography>
        <IconButton onClick={ () => updateQuantity(1) }>
            <AddCircleOutline />
        </IconButton>
    </Box>
  )
}
