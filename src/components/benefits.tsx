import {
  BookCheck,
  BriefcaseBusiness,
  CircleDollarSign,
  Handshake,
  LandPlot,
  Laptop,
  MountainSnow,
  Play,
  Soup,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import benefitSrc from "/public/benefits.jpg";
import Link from "next/link";

export default function Benefits() {
  const features = [
    {
      icon: <LandPlot className="size-6" strokeWidth={1.5} />,
      title: "Được cấp làm việc tại VISA Hàn Quốc",
      desc: "Nhân sự hoàn thành chương trình đào tạo và nhận offer từ công ty Hàn Quốc sẽ được Bộ Ngoại Giao Hàn Quốc cấp VISA để làm việc tại Hàn Quốc.",
    },
    {
      icon: <CircleDollarSign className="size-6" strokeWidth={1.5} />,
      title: "Tăng thu nhập cá nhân",
      desc: (
        <p>
          Đạt mức lương ngang bằng với lập trình viên Hàn Quốc. Trung bình mỗi
          tháng cho nhân sự ngành IT tại Hàn là từ 3,453,150 KRW - 8,371,053
          KRW. Xem thêm thông tin{" "}
          <Link
            href="https://www.paylab.com/kr/salaryinfo/information-technology"
            className="underline"
            target="_blank"
          >
            tại đây
          </Link>
        </p>
      ),
    },
    {
      icon: <Laptop className="size-6" strokeWidth={1.5} />,
      title: "Hỗ trợ cho mượn laptop và Monitor",
      desc: "Ứng viên được hỗ trợ cho mượn laptop trong suốt quá trình học (tùy theo nhu cầu), nhằm đảm bảo việc học không bị gián đoạn và thực hành hiệu quả",
    },
    {
      icon: <Soup className="size-6" strokeWidth={1.5} />,
      title: "Miễn phí 100% chi phí, bao gồm ăn trưa",
      desc: "Ứng viên tham gia dự án được miễn phí toàn bộ chi phí đào tạo, kết nối việc làm. Ứng viên học fulltime được hỗ trợ cơm trưa và chỗ nghỉ ngơi.",
    },
  ];

  return (
    <section className="pt-14 md:pb-20">
      <div className="container">
        <div className=" text-gray-600 gap-8 grid md:grid-cols-[3fr_2fr] overflow-hidden">
          <div className="max-w-xl">
            <div className="max-w-xl space-y-3">
              <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Lợi ích khi tham gia dự án
              </h2>
              <p>
                Dự án K-Tech College được Bộ Doanh nghiệp vừa và nhỏ và Khởi
                nghiệp Hàn Quốc (MSS) tài trợ với mục đích đào tạo và kết nối
                nhân lực IT tài năng của Việt Nam đến làm việc cho các Start-up
                tại Hàn Quốc. Các lợi ích khi đăng ký tham gia dự án bao gồm:
              </p>
            </div>
            <div className="mt-12 max-w-lg lg:max-w-none">
              <ul className="space-y-8">
                {features.map((item, idx) => (
                  <li key={idx} className="flex gap-x-4">
                    <div className="flex-none w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-800 font-semibold">
                        {item.title}
                      </h4>
                      <div className="mt-3">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="relative w-full h-full shadow-2xl">
              <Image
                src={benefitSrc}
                alt="Benefits"
                className="object-cover rounded-lg"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
