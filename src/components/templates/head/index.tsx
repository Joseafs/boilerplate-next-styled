import Head from 'next/head';
import { memo } from 'react';
import { useTheme } from 'styled-components';
import { fixPath } from '~/utils/theme/render';

type Props = {
  title: string;
  url: string;
  description?: string;
};

const siteName = process.env.NODE_ENV as string;

const OgHeadSEO = ({ title, description, url }: Props) => {
  const urlRoot = fixPath();
  const theme = useTheme();

  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content={theme.palette.primary.main} />
      <link rel="icon" href={`${urlRoot}favicon/favicon.ico`} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} key="title" />
      {description && (
        <meta
          property="og:description"
          content={description}
          key="description"
        />
      )}
      <meta key="og_url" name="og:url" content={url} />
    </Head>
  );
};

export const HeadSEO = memo(OgHeadSEO);
