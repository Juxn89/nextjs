import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@database/index';
import { IProduct } from '@interfaces/products';
import {Product} from '@models/index';

type ResponseData =
  | { message: string }
  | IProduct

const handler = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  switch (req.method) {
    case 'GET':
      return getProductBySlug(req, res)
    default:
      return res.status(400).json({ message: 'Bad request' })
  }
}

const getProductBySlug = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const { slug } = req.query

  await db.connect()
  const product = await Product
                  .findOne({ slug })
                  .lean();

  await db.disconnect()

  if(!product)
    return res.status(400).json({ message: 'Product not found!' })

  return res.status(200).json(product)
}

export default handler
