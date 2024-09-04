import { Container } from "../wrapper";
import { Logo } from "./logo";

export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <Container>
        <div className="flex justify-center flex-col items-center">
          <Logo className="scale-90" />
          <small className="text-muted-foreground">
            Copyright &copy; {new Date().getFullYear()} <a href="/">Tamionweb</a>. All rights reserved
          </small>
        </div>
      </Container>
    </footer>
  );
}
