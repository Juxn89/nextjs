import { db } from '@database/index';
import {Product} from '@models/index';
import { IProduct } from '@interfaces/index';

export const getProductBySlug = async (slug: string): Promise<IProduct | null> => {
  await db.connect()

  const product = await Product.findOne({ slug }).lean()

  await db.disconnect()

  if(!product) return null;

  return JSON.parse( JSON.stringify(product) );
}

interface IProductSlug {
  slug: string
}

export const getAllProductSlug = async(): Promise<IProductSlug[]> => {
  await db.connect()

  const slug = await Product.find().select('slug -_id').lean()

  await db.disconnect()

  return slug;
}

export const getProductByTerm = async (term: string): Promise<IProduct[]> => {
  await db.connect()

  term = term.toString().toLocaleLowerCase()
  const products = await Product.find({
    $text: { $search: term }
  })
  .select('title images price inStock slug -_id')
  .lean()

  await db.disconnect()

  return products
}
