export interface ListProps<T> {
  items: T[];
  Item: (props: T) => JSX.Element;
}
