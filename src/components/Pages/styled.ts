import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  flex-shrink: 0;
`;
export const Page = styled.div<{ $active: boolean }>`
  width: 50px;
  height: 50px;
  background-color: ${({ $active, theme: { colors } }) =>
    $active ? colors.light : colors.secondary};
  color: ${({ $active, theme: { colors } }) =>
    $active ? colors.secondary : colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 4px solid
    ${({ $active, theme: { colors } }) =>
      $active ? colors.secondary : 'transparent'};
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
`;
