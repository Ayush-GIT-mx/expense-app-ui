import { Button, Card, Label, TextInput } from "flowbite-react";
import { Receipt } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const Login = () => (
  <div className="flex min-h-screen flex-col items-center justify-center">
    <Card className="mt-4 h-full w-full max-w-sm rounded">
      <form className="flex flex-col gap-4">
        <div className="mb-2 block">
          <div className="flex items-center">
            <Receipt className="mr-2" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowtrack
            </span>
          </div>
        </div>
        <div>
          <Label htmlFor="email1">Email</Label>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowtrack.com"
            required
          />
        </div>
        <div>
          <Label htmlFor="password1">Password</Label>
          <TextInput id="password1" type="password" required />
        </div>
        <Button color={"light"} type="submit" className="mt-2">
          Login
        </Button>
        <p className="my-1 text-center text-sm font-bold text-gray-600 dark:text-gray-300">
          <b>or</b>
        </p>
        <Button
          color={"light"}
          className="mt-1 flex items-center justify-center"
        >
          <FcGoogle className="mr-2" />
          Login with Google
        </Button>
      </form>
    </Card>
  </div>
);

export default Login;
