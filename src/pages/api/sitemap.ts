import type { NextApiRequest, NextApiResponse } from 'next'
import { createSitemap } from 'lib/services/sitemap'

/**
 * API endpoint to build new sitemap.xml
 */
const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const sitemap = await createSitemap()
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
}

export default handler
