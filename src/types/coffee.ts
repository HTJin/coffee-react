import { UserType } from "./user";

export type CoffeeType = {
  id?: number;
  name?: string;
  coffeeType?: string;
  price?: number;
  description?: string;
  rating?: number;
  brewMethod?: string;
  roaster?: string;
  imageUrl?: string;
  brewer?: UserType;
  dateCreated?: string;
};
