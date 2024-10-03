import Link from "next/link";
import { FaCode } from "react-icons/fa6";

export default function TheoryBtn() {
  return (
    <Link
      title="Theory Drive"
      href="https://docs.google.com/document/d/1awRLqK1NFTPIJRxvTUrg5GLiw5m27_GLBjJWr1nnqgQ/preview"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaCode />
    </Link>
  );
}
