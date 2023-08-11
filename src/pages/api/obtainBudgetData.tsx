import conn from './db';
import {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    try {
        conn.connect()
        .then(() => {
            const data: {} = conn.query(`SELECT * FROM public.${process.env.PGSQL_DATABASE}`)
        })
        .then((data) => {
            res.locals = data
        })
    } catch {

    }
    res.status(200).json({ name: 'John Doe' })
  }