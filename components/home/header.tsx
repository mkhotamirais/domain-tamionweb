import { Container } from "../wrapper";
import { Logo } from "./logo";

export default function Header() {
  return (
    <header className="h-16 shadow fixed left-0 right-0">
      <Container>
        <div className="h-full flex justify-between items-center">
          <Logo />
          <div>nav</div>
        </div>
      </Container>
    </header>
  );
}
