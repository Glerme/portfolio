declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    APP_NAME: string;
    APP_IMAGE: string;
    API_URL: string;
    PRISMIC_ACCESS_TOKEN: string;
    PRISMIC_ENDPOINT: string;
    SENDGRID_API_KEY: string;
    BASE_URL: string;
    PORT: string;
  }
}
