import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-center p-4">
        <Link href="/">
          <FontAwesomeIcon className="fa-xl p-2" icon={faGithub} />
        </Link>

        <Link href="/" className="fa-xl p-2">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
      </div>
      <div className="flex justify-center">
        Andy Holland • © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
