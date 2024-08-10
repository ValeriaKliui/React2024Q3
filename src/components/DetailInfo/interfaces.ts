import { Planet } from "@constants/interfaces";

export type DetailInfo = Pick<
  Planet,
  "name" | "diameter" | "climate" | "gravity"
> & {
  rotationPeriod: string;
};

export type DetailInfoProps = Partial<DetailInfo>;
