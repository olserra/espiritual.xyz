import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/boost.svg";

const productLinks = [
  {
    label: `Careers`,
    href: `https://www.linkedin.com/company/boostio-ai/`,
  },
  {
    label: `FAQ`,
    href: `/faq`,
  },
];

const aboutLinks = [
  {
    label: `LinkedIn`,
    href: `https://www.linkedin.com/company/boostio-ai/`,
  },
];

const Footer = () => (
  <footer className="flex lg:flex-row justify-between lg:px-40 border-t border-gray-400 py-16 pl-14 max-lg:flex-col">
    <div className="mb-8">
      <Image
        src={Logo}
        alt="Boostio logo"
        width={40}
        height={10}
        className="mr-4"
      />
    </div>
    <div className="w-full lg:w-2/3">
      <ul className="text-lg font-light flex flex-wrap">
        <li className="w-1/2 md:w-1/3 lg:w-1/3">
          <div className="mb-6">
            <h4 className="text-gray-700 text-base font-bold mb-1">Company</h4>
            <ul>
              {productLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-gray-500 text-sm font-medium leading-6"
                >
                  <a
                    href={link.href}
                    key={index}
                    target={link.label === "FAQ" ? "_self" : "_blank"}
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="w-1/2 md:w-1/3 lg:w-1/3">
          <div>
            <h4 className="text-gray-700 text-base font-bold mb-1">Legal</h4>
            <ul>
              <li className="text-gray-500 text-sm font-medium leading-6">
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
              </li>
              <li className="text-gray-500 text-sm font-medium leading-6">
                <Link href={"/terms-of-service"}>Terms of Service</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="w-1/2 md:w-1/3 lg:w-1/3">
          <div>
            <h4 className="text-gray-700 text-base font-bold mb-1">About Us</h4>
            <ul>
              {aboutLinks.map((link, index) => (
                <li
                  className="text-gray-500 text-sm font-medium leading-6"
                  key={index}
                >
                  <a
                    href={link.href}
                    key={index}
                    target={link.label === "Blog" ? "_self" : "_blank"}
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div className="text-sm text-gray-500 mt-8">
      © {new Date().getFullYear()} Boostio.
    </div>
  </footer>
);

export default Footer;
