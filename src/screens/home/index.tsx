import Image from 'next/image';
import { memo } from 'react';
import { SectionBase } from '~/components/sections/base';
import { TemplateScreen } from '~/components/templates/screen';
import { ByName, FlexAlign, Title } from './styled';

const OgScreenHome = () => {
  return (
    <TemplateScreen>
      <FlexAlign>
        <SectionBase>
          <FlexAlign>
            <Image
              src="/favicon/mstile-150x150.png"
              width={150}
              height={150}
              alt="Logo boilerplate"
            ></Image>
            <Title>Boilerplate NextJs + Styled-components</Title>
            <ByName>By Joseafs</ByName>
          </FlexAlign>
        </SectionBase>
      </FlexAlign>
    </TemplateScreen>
  );
};

export const ScreenHome = memo(OgScreenHome);
