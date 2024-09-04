import { Button } from "@/components/ui/button";
import { Container } from "@/components/wrapper";

export function Hero() {
  return (
    <section className="">
      <Container>
        <div className="flex items-center justify-center h-full min-h-screen">
          <div className="flex flex-col gap-4 items-center">
            <h1>TAMIONWEB</h1>
            <p>hello world</p>
            <Button>call me</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
