// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import UAParser from "ua-parser-js";
import { useUserAgent } from 'next-useragent';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // let ua;
  // if (props.uaString) {
  //   ua = useUserAgent(props.uaString)
  // } else {
  //   ua = useUserAgent(window.navigator.userAgent)
  // }
  res.status(200).json({ type: req.headers })
}