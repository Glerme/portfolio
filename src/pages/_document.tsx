import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta
            name="keywords"
            content="Guilherme Felipe, Guilherme, gui, glerme, Glerme, G felipe, porfolio, Portfolio Guilherme Felipe, Glerme dev, developer, web developer, react, nextjs, CSS3, sass"
          />
          <meta name="title" content="Guilherme Felipe | Dev. Júnior " />
          <meta name="theme-color" content="#0B0A0A" />
          <meta
            name="description"
            content="Sou um desenvolvedor web profissional. Tenho experiência em desenvolvimento de sites e aplicativos com React.js e Next.js."
          />

          <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Titillium+Web:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

          <meta property="og:site_name" content="Portfolio Guilherme Felipe" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:url" content="https://glerme.dev/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Guilherme Felipe | Dev. Júnior " />
          <meta
            property="og:description"
            content="Sou um desenvolvedor web profissional. Tenho experiência em desenvolvimento de sites e aplicativos com React.js e Next.js."
          />
          <meta property="og:image" content="https://glerme.dev/foto.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="glerme.dev" />
          <meta property="twitter:url" content="https://glerme.dev/" />
          <meta
            name="twitter:title"
            content="Guilherme Felipe | Dev. Júnior "
          />
          <meta
            name="twitter:description"
            content="Sou um desenvolvedor web profissional. Tenho experiência em desenvolvimento de sites e aplicativos com React.js e Next.js."
          />
          <meta name="twitter:image" content="https://glerme.dev/foto.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
