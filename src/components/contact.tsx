import { Clock, Mail, MapPin, Phone } from "lucide-react";
import GoogleMap from "./shared/google-map";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Phone className="size-6" />,
      contact: "(+84) 86 713 3779",
      title: "Phone",
    },
    {
      icon: <Mail className="size-6" />,
      contact: "likelion.vn@likelion.net",
      title: "Email",
    },
    {
      icon: <Clock className="size-6" />,
      contact: "Thứ 2 - Thứ 6 | 8:30 AM - 5:30 PM",
      title: "Time",
    },
    {
      icon: <MapPin className="size-6" />,
      contact:
        "Cobi Tower 2, 2-4 Đường số 8, Tân Phú, Quận 7, Thành phố Hồ Chí Minh",
      title: "Our office",
    },
  ];

  return (
    <section className="py-14">
      <div className="container text-gray-600">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="max-w-xl space-y-3">
              <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold">
                Liên hệ
              </h2>
              {/* <p>
                We’re here to help and answer any question you might have, We
                look forward to hearing from you .
              </p> */}
            </div>
            <div>
              <ul className="mt-4 sm:mt-8 flex flex-col flex-wrap gap-y-2 sm:gap-y-4">
                {contactMethods.map((item, idx) => (
                  <li key={idx}>
                    <h4 className="sr-only text-gray-800 text-lg font-medium">
                      {item.title}
                    </h4>
                    <div className="mt-2 flex items-center gap-x-3">
                      <div className="flex-none text-gray-400">{item.icon}</div>
                      <p>{item.contact}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <GoogleMap />
          </div>
        </div>
      </div>
    </section>
  );
}
