import { ListProps } from "./interfaces";
import "./index.css";

export const List = <T,>({ items, Item }: ListProps<T>) => {
  return (
    <div className="list">
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
};
