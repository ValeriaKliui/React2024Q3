import { ListProps } from "./interfaces";
import "./index.css";

export const List = <T,>({ items, Item, onClick }: ListProps<T>) => (
  <div className="list" onClick={onClick}>
    {items.map((item, index) => (
      <Item key={index} {...item} />
    ))}
  </div>
);
