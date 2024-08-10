import { ListProps } from "./interfaces";
import { ListStyled } from "./styled";

export const List = <T,>({ items, Item, onClick }: ListProps<T>) => (
  <ListStyled onClick={onClick}>
    {items.map((item, index) => (
      <Item key={index} {...item} />
    ))}
  </ListStyled>
);
