import { UserType } from "../types/user";
import { CategoryType } from "../types/category";

type LoginProps = {
  logUserIn: (user: UserType) => void;
  flashMessage: (message: string | null, category: CategoryType) => void;
};

export const Login = ({ logUserIn, flashMessage }: LoginProps) => {
  return <div>Login</div>;
};
