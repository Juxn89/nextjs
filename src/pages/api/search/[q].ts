import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@database/index';
import {Product} from '@models/index';
import { IProduct } from '@interfaces/index';

type ResponseData =
  | { message: string }
  | IProduct[]

const handler = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  switch (req.method) {
    case 'GET':
      return searchProduct(req, res)  
    default:
      return res.status(400).json({ message: 'Bad request' })
  }
}

export default handler

const searchProduct = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  let { q = '' } = req.query

  if(q.length === 0)
    return res.status(400).json({ message: 'You must specify the search parameter' })

  q = q.toString().toLocaleLowerCase()

  await db.connect()
  const products = await Product
                    .find({ $text: { $search: q } })
                    .select('title images price inStock slug -_id')
                    .lean()
  await db.disconnect()

  return res.status(200).json(products)
}
