export type Facility = {
  id: string;
  createdAt: string;
  name: string;
  type: Type;
  address: string;
};

export enum Type {
  range = "range",
  indoor = "indoor",
}
