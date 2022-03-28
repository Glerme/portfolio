import { NextApiRequest, NextApiResponse } from 'next';

import sgMail from '@sendgrid/mail';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, name, message } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send({
      to: 'guiggff@gmail.com',
      from: {
        email: 'guilhermeanderline2010@hotmail.com',
        name: 'Guilherme Felipe ',
      },
      subject: `Contato - ${name}`,
      text: message,
      html: `<strong>${message}</strong>`,
    });

    return res.status(200).json('Email enviado com sucesso!');
  } catch (error) {
    console.log(error.response.body);

    return res.status(error.statusCode || 500).json({ error: error.message });
  }
};
