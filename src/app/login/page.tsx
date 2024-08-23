import Link from "next/link";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <main className="flex items-center flex-col">
      <div className="mt-10 flex w-full max-w-sm flex-col items-center rounded-lg border bg-popover p-8">
        <h1 className="mb-8 text-center text-2xl font-semibold">Login</h1>

        <LoginForm />

        <p className="mt-4 text-xs text-muted-foreground">
          Want an email account?{" "}
          <Link
            href="/create-account"
            className="underline transition-colors duration-200 ease-in-out hover:text-foreground"
          >
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}

export default LoginPage;
