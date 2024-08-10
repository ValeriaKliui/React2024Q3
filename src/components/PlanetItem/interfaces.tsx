import { Planet } from "@constants/interfaces";

export type PlanetItemProps = Pick<Planet, "name" | "diameter" | "climate"> & {
  onClick: (name: string) => void;
};
