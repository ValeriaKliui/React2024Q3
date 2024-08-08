
'use client';

import { Header } from '@components/Header';
import { Content } from './styled';
import { PlanetsList } from '@components/PlanetsList';
import { useDetail } from '@hooks/useDetail';
import { useSelectedPlanets } from '@hooks/useSelectedPlanets';
import { Pagination } from '@components/Pagination';
import { SelectedInfo } from '@components/SelectedInfo';
import { FC, ReactNode } from 'react';

export const Layout: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const { isDetailOpened } = useDetail();
  const { selectedPlanets } = useSelectedPlanets();

  return (
    <>
      <Header />
      <Content
        className={`content ${isDetailOpened ? 'splitted' : ''}`}
      >
        <PlanetsList />
        {children}
      </Content>
      <Pagination /> {selectedPlanets.length > 0 && <SelectedInfo />}
    </>
  );
};
export { Layout as default };
