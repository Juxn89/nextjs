import { IProduct } from "@interfaces/products"
import mongoose, { Schema, model, Model } from "mongoose"

const productSchema = new Schema({
  description: { type: String, require: true },
  images: [{ type: String }],
  inStock: { type: Number, require: true, default: 0 },
  price: { type: Number, require: true, default: 0 },
  sizes: [{ 
    type: String, 
    enum: { 
      values: ['XS','S','M','L','XL','XXL','XXXL'],
      message: '${value} is not a valid size.'
    } 
  }],
  slug: { type: String, require: true, unique: true },
  tags: { type: String },
  title: { type: String, require: true },
  type: { 
    type: String,
    enum: {
      values: [ 'shirts','pants','hoodies','hats' ],
      message: '${value} is not a valid type'
    }
  },
  gender: { 
    type: String,
    enum: {
      values: [ 'men','women','kid','unisex' ],
      message: "${value} is not a valid gender"
    }
  }
},
{
  timestamps: true
})

const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema)