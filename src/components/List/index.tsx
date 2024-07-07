import { ListProps } from "./interfaces";

export const List = <T,>({ items, Item }: ListProps<T>) => {
  return (
    <div>
      {items.map((item) => (
        <Item {...item} />
      ))}
    </div>
  );
};
