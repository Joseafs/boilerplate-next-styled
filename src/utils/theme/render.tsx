const isProd = process.env.NODE_ENV === 'production';

const rootPath = isProd ? process.env.NEXT_PUBLIC_DOMAIN : '/';

export const fixPath = (path = ''): string => `${rootPath}${path}`;
