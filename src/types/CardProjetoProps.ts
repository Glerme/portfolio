export interface CardProjetosProps {
  uid: string;
  title: string;
  url: { link_type: string; url: string };
  image: {
    dimensions: { width: number; height: number };
    alt: string;
    copyright: string | null;
    url: string;
  };
  text: string;
}
