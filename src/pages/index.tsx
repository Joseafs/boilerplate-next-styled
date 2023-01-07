import { HeadSEO } from '~/components/templates/head';
import { ScreenHome } from '~/screens/home';
import { fixPath } from '~/utils/theme/render';

export default function Home() {
  const urlRoot = fixPath('');

  return (
    <>
      <HeadSEO title="Boilerplate" url={urlRoot} />
      <ScreenHome />
    </>
  );
}
