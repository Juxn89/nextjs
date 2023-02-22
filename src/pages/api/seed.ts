import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { db, seedDatabase } from "@database/index";
import { Product } from '@models/index';

type ResponseType = {
  message: string
}

const seed: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  if(process.env.NODE_ENV === 'production')
    return res.status(404).json({ message: "Access denied!" });
  
  await db.connect()
  await Product.deleteMany()
  await Product.insertMany(seedDatabase.initialData.products)
  await db.disconnect()

  return res.status(201).json({ message: 'Seed' });
}

export default seed;