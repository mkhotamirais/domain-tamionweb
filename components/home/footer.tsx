import { Socials } from "../socials";
// import { Logo } from "./logo";

export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
          <small className="text-muted-foreground">
            Copyright &copy; {new Date().getFullYear()} <a href="/">Tamionweb</a>. All rights reserved
          </small>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
