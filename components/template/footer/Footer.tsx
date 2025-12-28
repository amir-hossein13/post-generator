import { Github, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-10 py-20">
      <hr />
      <div className="flex flex-row justify-between mt-5">
        <p className="text-md font-medium text-black/30">
          © 2024 made by amirhossein.
        </p>
        <div>
          <ul className="flex flex-row items-center gap-5 text-black/50 ">
            <li>
              <a
                className="hover:text-black/60 transition-colors"
                href="https://github.com/amir-hossein13"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={25} />
              </a>
            </li>
            <li>
              <a
                className="hover:text-black/60 transition-colors"
                href="www.linkedin.com/in/amirhossein-attarnia-2043002bb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={25} />
              </a>
            </li>
            <li>
              <a
                className="hover:text-black/60 transition-colors"
                href="https://www.instagram.com/aa_alfa13/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
