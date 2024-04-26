import Image from "next/image";
import logo from "/public/MSS x LIKELION.svg";
import facebook from "/public/socials/facebook.svg";
import instagram from "/public/socials/instagram.svg";
import tiktok from "/public/socials/tiktok.svg";
import youtube from "/public/socials/youtube.svg";
import Link from "next/link";

export default function Footer() {
  const footerNavs = [
    {
      href: "#",
      name: "Về chúng tôi",
    },
    {
      href: "#",
      name: "Khoá học",
    },
    {
      href: "#",
      name: "Review",
    },
    {
      href: "#",
      name: "FAQs",
    },
  ];

  const socials = [
    {
      label: "LIKELION Facebook",
      href: "https://www.facebook.com/likelionvietnam",
      src: facebook,
    },
    {
      label: "LIKELION Instagram",
      href: "https://www.instagram.com/likelionvn",
      src: instagram,
    },
    {
      label: "LIKELION Youtube",
      href: "https://www.youtube.com/@likelionvietnam",
      src: youtube,
    },
    {
      label: "LIKELION Tiktok",
      href: "https://www.tiktok.com/@likelionvietnam",
      src: tiktok,
    },
  ];

  return (
    <footer className="text-gray-500 bg-white py-5 max-w-screen-xl mx-auto">
      <div className="container">
        <div className="max-w-lg sm:mx-auto sm:text-center">
          <Image
            src={logo}
            alt="LIKELION"
            className=" sm:mx-auto"
            height={36}
          />
          <p className="leading-relaxed mt-4 text-[15px] max-w-sm mx-auto">
            Với K-Tech College 2024, chúng tôi mang đến cho bạn công việc, cơ
            hội và tương lai!
          </p>
        </div>
        <ul className="items-center justify-center mt-12 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
          {footerNavs.map((item, idx) => (
            <li key={idx} className=" hover:text-gray-800">
              <a key={idx} href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 items-center justify-between sm:flex border-t pt-4">
          <div className="mt-4 sm:mt-0">
            &copy; 2024 LIKELION All rights reserved.
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              {socials.map((social, idx) => (
                <li
                  className="w-10 h-10 border rounded-full flex items-center justify-center"
                  key={idx}
                >
                  <Link href={social.href} target="_blank">
                    <Image
                      src={social.src}
                      alt={social.label}
                      width={32}
                      height={32}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
