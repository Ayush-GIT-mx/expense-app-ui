import { useState } from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { Receipt, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
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
            <Label htmlFor="email2">
              <b>Email</b>
            </Label>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@flowtrack.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="username2">
              <b>Username</b>
            </Label>
            <TextInput
              id="username2"
              type="text"
              placeholder="Choose a username"
              required
            />
          </div>

          <div>
            <Label htmlFor="password2">
              <b>Password</b>
            </Label>
            <div className="relative">
              <TextInput
                id="password2"
                type={showPassword ? "text" : "password"}
                required
                className="pr-10"
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

          <Button color="light" type="submit" className="mt-2">
            <b>Sign Up</b>
          </Button>

          <p className="my-1 text-center text-sm font-bold text-gray-600 dark:text-gray-300">
            <b>or</b>
          </p>

          <Button
            color="light"
            className="mt-1 flex items-center justify-center"
          >
            <FcGoogle className="mr-2" />
            <b>Sign Up with Google</b>
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;

