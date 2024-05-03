import {
  BookCheck,
  BriefcaseBusiness,
  CircleDollarSign,
  Handshake,
  MountainSnow,
  Play,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import benefitSrc from "/public/benefits.jpg";
import Link from "next/link";

export default function Benefits() {
  const features = [
    {
      icon: <BookCheck className="size-6" strokeWidth={1.5} />,
      title: "Được cấp VISA Hàn Quốc",
      desc: "Nhân sự hoàn thành chương trình đào tạo và nhận offer từ công ty Hàn Quốc sẽ được Bộ Ngoại Giao Hàn Quốc cấp VISA làm việc tại Hàn Quốc",
    },
    {
      icon: <MountainSnow className="size-6" strokeWidth={1.5} />,
      title: "Trải nghiệm cuộc sống tại Hàn",
      desc: "Sống ở đất nước khác giúp bạn có trải nghiệm đa chiều về văn hoá, góc nhìn cởi mở và vững vàng hơn",
    },
    {
      icon: <TrendingUp className="size-6" strokeWidth={1.5} />,
      title: "Nâng cấp profile",
      desc: "CV có kinh nghiệm làm việc ở nước ngoài là điểm thu hút với các Nhà tuyển dụng Việt Nam và Quốc tế",
    },
    {
      icon: <BriefcaseBusiness className="size-6" strokeWidth={1.5} />,
      title: "Làm việc tại Hàn Quốc",
      desc: "Đây là cơ hội để các bạn học hỏi kinh nghiệm từ đất nước dẫn đầu về công nghệ và CNTT",
    },
    {
      icon: <CircleDollarSign className="size-6" strokeWidth={1.5} />,
      title: "Tăng thu nhập cá nhân",
      desc: (
        <p>
          Mức lương trung bình mỗi tháng cho nhân sự ngành IT tại Hàn là từ
          2,506 USD - 6,075 USD. Xem thêm thông tin{" "}
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
      icon: <Handshake className="size-6" strokeWidth={1.5} />,
      title: "Xây dựng mối quan hệ hợp tác",
      desc: "Kết nối với các đồng nghiệp, bạn bè Việt/ Hàn cùng mục tiêu để giúp đỡ nhau trong tương lai.",
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
