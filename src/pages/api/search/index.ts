import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData =
  | { message: string }

const handler = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
    return res.status(404).json({ message: 'This endpoint doesn\'t exist' })
}

export default handler
