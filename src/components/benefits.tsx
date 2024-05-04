import { CircleDollarSign, LandPlot, Laptop, Soup } from "lucide-react";
import Link from "next/link";

export default function Benefits() {
  const features = [
    {
      icon: <Soup className="size-6" strokeWidth={1.5} />,
      title: "Miễn phí 100% chi phí, bao gồm ăn trưa",
      desc: "Ứng viên tham gia dự án được miễn phí toàn bộ chi phí đào tạo, kết nối việc làm. Ứng viên học fulltime được hỗ trợ cơm trưa và chỗ nghỉ ngơi.",
    },
    {
      icon: <Laptop className="size-6" strokeWidth={1.5} />,
      title: "Hỗ trợ cho mượn laptop và Monitor",
      desc: "Ứng viên được hỗ trợ cho mượn laptop trong suốt quá trình học (tùy theo nhu cầu), nhằm đảm bảo việc học không bị gián đoạn và thực hành hiệu quả",
    },
    {
      icon: <LandPlot className="size-6" strokeWidth={1.5} />,
      title: "Được cấp VISA làm việc tại Hàn Quốc",
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
  ];

  return (
    <section className="py-14">
      <div className="container text-gray-600">
        <div className="max-w-2xl mx-auto md:text-center text-left">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Lợi ích khi tham gia dự án
          </h2>
          <p className="mt-3">
            Với dự án K-Tech College, chúng tôi mang đến cho bạn không chỉ là
            một khóa học, mà còn là cơ hội và tương lai thể hiện qua các lợi ích
            như sau:
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((item, idx) => (
              <li key={idx} className="space-y-3 p-6 rounded-md bg-orange-100">
                <div className="flex-none w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center border text-white">
                  {item.icon}
                </div>
                <h4 className="md:text-xl text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <div>{item.desc}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
