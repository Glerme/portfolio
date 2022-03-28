import { NextApiRequest, NextApiResponse } from 'next';

import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../../services/prismic';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
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
  } catch (error) {
    res.status(500).json(error);
  }
};
