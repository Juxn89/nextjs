import { NextApiRequest, NextApiResponse } from 'next';
import { db, SHOP_CONSTANTS } from '@database/index';
import { Product } from '@models/index';
import { IProduct } from '@interfaces/products';

type ResposeData = 
  | { message: string }
  | IProduct[]

const handler = (req: NextApiRequest, res: NextApiResponse<ResposeData>) => {
  switch (req.method) {
    case 'GET':
      return getProducts(req, res)
    default:
      return res.status(400).json({
        message: 'Bad request'
      })
  }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<ResposeData>) => {
  const { gender = 'all' } = req.query;

  let condition = {}

  if(gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(gender as string) ) { 
    condition = { gender } 
  }

  await db.connect();
  const products = await Product
                        .find(condition)
                        .select('title images price inStock slug -_id')
                        .lean();

  await db.disconnect();

  return res.status(200).json(products)
}

export default handler
