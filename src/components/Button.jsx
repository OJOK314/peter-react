import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function LoginForm() {
  return (
    <div style={{ textAlign:"center", backgroundColor:"orangered", padding:"50px", margin:"50px"}}>
    <form className="flex max-w-md flex-col gap-4 justifyContent-center">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Your password</Label>
        </div>
        <TextInput
          id="password1"
          type="password"
          minLength={4}
          maxLength={8}
          required
          pattern="^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,8}$"
          title="Password must be 4-8 characters, include a lowercase letter, a number, and a special character"
        />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>

      <Button type="submit" style={{ color: "pink" }}>
        Submit
      </Button>
    </form>
    </div>
  );
}

export default LoginForm;
