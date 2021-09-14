import { NextApiRequest, NextApiResponse } from 'next';

import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../../services/prismic';
import { RichText } from 'prismic-dom';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const prismic = getPrismicClient();

    const response = await prismic.query(
      [Prismic.predicates.any('document.type', ['habilidades'])],
      {
        pageSize: 100,
        page: 1,
      },
    );

    const cardHabilidades = response.results
      .filter(resposta => resposta.type === 'habilidades')
      .sort((a, b) =>
        a.first_publication_date > b.first_publication_date ? 1 : -1,
      );

    const parsedCardHabilidades = cardHabilidades.map(post => ({
      uid: post.uid,
      title: RichText.asText(post.data.title),
      image: post.data.image,
    }));

    return res.status(200).json(parsedCardHabilidades);
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};
