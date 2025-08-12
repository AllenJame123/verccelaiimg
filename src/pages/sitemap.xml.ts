import { NextApiRequest, NextApiResponse } from 'next';
import { blogPosts } from '../data/blogPosts';

const BASE_URL = 'https://aiimagegenerator.site';

const staticPaths = [
  '/',
  '/about',
  '/contact',
  '/blog',
  '/logo-generator',
  '/favicon-generator',
  '/add-text-to-photo',
  '/meme-generator',
];

function generateSitemapXml() {
  const urls = [
    ...staticPaths.map(
      (path) => `<url><loc>${BASE_URL}${path}</loc></url>`
    ),
    ...Object.values(blogPosts).map(
      (post) => `<url><loc>${BASE_URL}/blog/${post.slug}</loc></url>`
    ),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(generateSitemapXml());
}

export const config = {
  api: {
    bodyParser: false,
  },
};
