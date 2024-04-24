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
import benefitGif from "/public/benefits.gif";

export default function Benefits() {
  const features = [
    {
      icon: <BookCheck className="size-6" strokeWidth={1.5} />,
      title: "Được cấp VISA Hàn Quốc",
      desc: "Nhân sự hoàn thành chương trình đào tạo và nhận offer từ công ty Hàn Quốc sẽ được Bộ Ngoại Giao Hàn Quốc cấp VISA làm việc tại Hàn",
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
      title: "Công tác ngắn hạn tại Hàn",
      desc: "Đây là cơ hội để các bạn học hỏi kinh nghiệm từ đất nước dẫn đầu về công nghệ và CNTT",
    },
    {
      icon: <CircleDollarSign className="size-6" strokeWidth={1.5} />,
      title: "Tăng thu nhập cá nhân",
      desc: "Mức lương trung bình mỗi  tháng cho nhân sự ngành IT tại Hàn là từ 3,453,150 KRW - 8,371,053 KRW ",
    },
    {
      icon: <Handshake className="size-6" strokeWidth={1.5} />,
      title: "Xây dựng mối quan hệ hợp tác",
      desc: "Kết nối với các đồng nghiệp, bạn bè Việt/ Hàn cùng mục tiêu để giúp đỡ nhau trong tương lai.",
    },
  ];

  return (
    <section className="py-14">
      <div className="container">
        <div className=" text-gray-600 gap-16 justify-between lg:flex">
          <div className="max-w-xl">
            <div className="max-w-xl space-y-3">
              <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Lợi ích khi tham gia
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                congue, nisl eget molestie varius, enim ex faucibus purus
              </p>
            </div>
            <div className="mt-12 max-w-lg lg:max-w-none">
              <ul className="space-y-8">
                {features.map((item, idx) => (
                  <li key={idx} className="flex gap-x-4">
                    <div className="flex-none w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-800 font-semibold">
                        {item.title}
                      </h4>
                      <p className="mt-3">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <Image
              src={benefitGif}
              className="shadow-lg rounded-lg border sticky top-10"
              alt="Benefits"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
