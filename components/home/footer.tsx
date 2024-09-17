import { Socials } from "../socials";
// import { Logo } from "./logo";

export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container">
        <div className="flex justify-center flex-col gap-4 items-center">
          {/* <Logo className="scale-90" /> */}
          <small className="text-muted-foreground">
            Copyright &copy; {new Date().getFullYear()} <a href="/">Tamionweb</a>. All rights reserved
          </small>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
