import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center m-4">
        Andy Holland • © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
