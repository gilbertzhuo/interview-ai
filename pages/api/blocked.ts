import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    error: "You are blocked from accessing this site. Please try again later.",
  });
  return res.end();
}
