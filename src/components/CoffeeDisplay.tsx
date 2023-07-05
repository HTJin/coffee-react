import { Dispatch, SetStateAction, MouseEvent } from "react";
import { CoffeeType } from "../types/coffee";
import { UserType } from "../types/user";
import { deleteCoffee } from "../lib/apiWrapper";

type CoffeeDisplayProps = {
  coffee: CoffeeType;
  user: UserType | null;
  setUpdate: Dispatch<SetStateAction<boolean>>;
  update: boolean;
};

export const CoffeeDisplay = ({
  coffee,
  user,
  setUpdate,
  update,
}: CoffeeDisplayProps) => {
  const date = new Date(coffee.dateCreated as string);
  const handleDelete = (e: MouseEvent): void => {
    const token = localStorage.getItem("token");
    deleteCoffee(coffee.id!, token!);
    setTimeout(() => {
      setUpdate(!update);
    }, 1000);
  };

  return (
    <div>
      <div>{coffee.name}</div>
      <div>{coffee.coffeeType}</div>
      <div>{coffee.price}</div>
      <div>{coffee.description}</div>
      <div>{coffee.rating}</div>
      <div>{coffee.brewMethod}</div>
      <div>{coffee.roaster}</div>
      <div>Created by: {coffee.brewer?.username}</div>
      <div>on {date.toString()}</div>
      <div>
        {coffee.brewer?.username === user?.username ? (
          <button onClick={handleDelete}>Delete Coffee</button>
        ) : null}
      </div>
    </div>
  );
};
