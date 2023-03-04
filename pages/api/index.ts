import { NextApiRequest, NextApiResponse } from "next";

export async function userRoute(req: NextApiRequest, res: NextApiResponse) {
  res.json({ message: "Hello" });
}
