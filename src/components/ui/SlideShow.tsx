import { FC } from "react"
import { Slide } from "react-slideshow-image"
import styles from '@components/ui/SlideShow.module.css'

interface SlideShowProps {
    images: string[]
}

export const SlideShow: FC<SlideShowProps> = ({ images }) => {
  return (
    <Slide easing="ease" duration={7000} indicators>
      {
        images.map(image => {
            const url = `/products/${image}`;
            return (
                <div key={ image } className={ styles['each-slide'] }>
                    <div 
                        style={{ 
                            backgroundImage: `url(${url})`,
                            backgroundSize: 'cover'
                        }}>                        
                    </div>
                </div>
            )
        })
      }
    </Slide>
  )
}
