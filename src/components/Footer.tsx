import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
interface LinkItem {
  label: string;
  href: string;
}

const socialLinks: LinkItem[] = [
  {
    label: `LinkedIn`,
    href: `https://www.linkedin.com/company/espiritual-xyz/`,
  },
  {
    label: `Facebook`,
    href: `https://www.facebook.com/profile.php?id=61559070203543`,
  },
];

const aboutLinks: LinkItem[] = [
  {
    label: `FAQ`,
    href: `/faq`,
  },
];

interface FooterLinkListProps {
  links: LinkItem[];
  title: string;
}

const FooterLinkList: React.FC<FooterLinkListProps> = ({ links, title }) => (
  <li className="w-1/2 md:w-1/3 lg:w-1/3">
    <div className="mb-6">
      <h4 className="text-gray-500 text-base font-bold mb-1">{title}</h4>
      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            className="text-gray-400 text-sm font-medium leading-6"
          >
            {link.href.startsWith("http") ? (
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ) : (
              <Link href={link.href}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  </li>
);

const Footer: React.FC = () => {
  const legalLinks = useMemo(
    () => [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
    []
  );

  return (
    <footer className="flex lg:flex-row justify-between lg:px-40 border-t border-gray-400 py-16 pl-14 max-lg:flex-col">
      <div className="mb-8">
        <Logo />
      </div>
      <div className="w-full lg:w-2/3">
        <ul className="text-lg font-light flex flex-wrap">
          <FooterLinkList title="Social" links={socialLinks} />
          <FooterLinkList title="Legal" links={legalLinks} />
          <FooterLinkList title="About Us" links={aboutLinks} />
        </ul>
      </div>
      <div className="text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} espiritual.xyz
      </div>
    </footer>
  );
};

export default Footer;
