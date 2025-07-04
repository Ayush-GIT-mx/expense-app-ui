import { useState } from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { Receipt, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Card className="mt-4 h-full w-full max-w-sm rounded">
        <form className="flex flex-col gap-4">
          <div className="mb-2 block">
            <div className="flex items-center">
              <Receipt className="mr-2" />
              <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
                <b>Flowtrack</b>
              </span>
            </div>
          </div>

          <div>
            <Label htmlFor="email1" className="font-bold">
              Email
            </Label>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowtrack.com"
              required
              className="font-bold"
            />
          </div>

          <div>
            <Label htmlFor="password1" className="font-bold">
              Password
            </Label>
            <div className="relative">
              <TextInput
                id="password1"
                type={showPassword ? "text" : "password"}
                required
                className="pr-10 font-bold"
              />
              <div
                className="absolute inset-y-0 right-2 flex cursor-pointer items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={18} className="text-gray-500" />
                ) : (
                  <Eye size={18} className="text-gray-500" />
                )}
              </div>
            </div>
          </div>

          <Button color="light" type="submit" className="mt-2 font-bold">
            Login
          </Button>

          <p className="my-1 text-center text-sm font-bold text-gray-600 dark:text-gray-300">
            <b>or</b>
          </p>

          <Button
            color="light"
            className="mt-1 flex items-center justify-center font-bold"
          >
            <FcGoogle className="mr-2" />
            <b>Login with Google</b>
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;

