import { CircleDollarSign, LandPlot, Laptop, Soup } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimationLayout from "./shared/animation-layout";

export default function Benefits() {
  const features = [
    {
      icon: <Soup className="size-6" strokeWidth={1.5} />,
      title: "Đào tạo kiến thức và kỹ năng cần thiết",
      desc: "Ứng viên tham gia chương trình sẽ được đào tạo tiếng Hàn từ cơ bản đến giao tiếp trong công việc. Trang bị kiến thức, kỹ năng cần thiết để làm việc tại Hàn Quốc",
    },
    {
      icon: <Laptop className="size-6" strokeWidth={1.5} />,
      title: "Phát triển sự nghiệp toàn diện",
      desc: "Nâng cao kỹ năng chuyên môn, mở rộng mạng lưới, tham gia những dự án lớn tại các công ty công nghệ tại quốc gia có nền kinh tế top 10 thế giới.",
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
          tháng cho nhân sự ngành IT tại Hàn là từ $2,544 - $6,169. Xem thêm
          thông tin{" "}
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
      <AnimationLayout
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0 translate-y-12",
        }}
      >
        <div className="container text-gray-600">
          <div className="max-w-2xl mx-auto md:text-center text-left">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Quyền lợi ứng viên
            </h2>
            <p className="mt-3">
              Ứng tuyển tham gia K-Tech College 2024, bạn sẽ được:
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-2">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="space-y-3 p-6 rounded-md bg-orange-100"
                >
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
      </AnimationLayout>
    </section>
  );
}
