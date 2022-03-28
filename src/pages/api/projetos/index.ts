import { NextApiRequest, NextApiResponse } from 'next';

import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../../services/prismic';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const prismic = getPrismicClient();

    const response = await prismic.query(
      [Prismic.predicates.any('document.type', ['projetos'])],
      {
        pageSize: 100,
        page: 1,
      },
    );

    const cardProjetos = response.results
      .filter(resposta => resposta.type === 'projetos')
      .sort((a, b) =>
        a.first_publication_date > b.first_publication_date ? 1 : -1,
      );

    const parsedCardProjetos = cardProjetos.map(post => ({
      uid: post.uid,
      title: RichText.asText(post.data.title),
      url: post.data.url,
      image: post.data.image,
      text: RichText.asText(post.data.text),
    }));

    return res.status(200).json(parsedCardProjetos);
  } catch (error) {
    res.status(500).json(error);
  }
};
