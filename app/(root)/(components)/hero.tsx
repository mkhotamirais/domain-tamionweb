import { Button } from "@/components/ui/button";
import { Container } from "@/components/wrapper";
import Link from "next/link";

export function Hero() {
  return (
    <section className="">
      <Container>
        <div className="flex items-center justify-center h-full min-h-screen">
          <div className="flex flex-col gap-4 items-center">
            <h1>TAMIONWEB</h1>
            <p>halo lagi</p>
            <p>hello world</p>
            <Button>call me</Button>
            <Button asChild>
              <Link href="/about">About</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
