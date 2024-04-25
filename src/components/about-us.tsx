import { cn } from "@/lib/utils";
import Link from "next/link";

const stats = [
  {
    data: "35K",
    title: "Customers",
  },
  {
    data: "10K+",
    title: "Downloads",
  },
  {
    data: "40+",
    title: "Countries",
  },
  {
    data: "30M+",
    title: "Total revenue",
  },
];

const text = [
  {
    title: "Giới thiệu về LIKELION",
    description: (
      <div>
        <div>
          <p>
            <Link
              href="https://www.likelion.edu.vn"
              target="_blank"
              className="text-indigo-600 font-bold"
            >
              LIKELION
            </Link>{" "}
            là công ty đào tạo lập trình hàng đầu tại Hàn Quốc thành lập từ 2018
            với các khoá học đào tạo lập trình cho hơn 24.000 sinh viên đến từ
            06 quốc gia khác nhau như Hàn Quốc, Mỹ, Úc, Hong Kong, Nhật Bản, và
            Việt Nam.
          </p>

          <p>
            Trong dự án <strong>K-tech College 2024</strong>, LIKELION vinh dự
            là đơn vị được tín nhiệm bởi Bộ Doanh nghiệp vừa và nhỏ và khởi
            nghiệp Hàn Quốc (MSS - The Ministry of SMEs and Startups), thực hiện
            đào tạo nhân lực Việt Nam chất lượng cao mảng CNTT và kết nối đến
            làm việc tại các công ty Start-up ở Hàn Quốc.
          </p>
        </div>

        <div className="flex-none mt-6 md:mt-0 lg:mt-8">
          <ul className="inline-grid gap-y-4 gap-x-12 grid-cols-2">
            {stats.map((item, idx) => (
              <li key={idx} className="">
                <h4 className="text-4xl text-indigo-600 font-semibold">
                  {item.data}
                </h4>
                <p className="mt-2 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
    img: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Mục tiêu của dự án K-TECH College 2024",
    description: (
      <div>
        <p>
          <b>
            Dự án được tài trợ 100% bởi Bộ Doanh nghiệp vừa và nhỏ và khởi
            nghiệp Hàn Quốc (MSS).
          </b>
        </p>
        <p>
          Mục tiêu: Đào tạo nghiệp vụ và kỹ năng thực chiến cho nguồn nhân lực
          CNTT có triển vọng ở nước ngoài, sau đó kết nối làm việc tại các công
          ty ở Hàn Quốc, nhằm góp phần giảm bớt tình trạng thiếu nhân lực ở các
          công ty Start-up Hàn Quốc.
        </p>
        <p>
          Đây là cơ hội cho những nhân lực ngành CNTT chất lượng cao ở Việt Nam,
          mong muốn được làm việc ở các Công ty tại Hàn Quốc với chi phí 0đ.
        </p>
      </div>
    ),

    img: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

export default function AboutUs() {
  return (
    <section className="py-14">
      <div className="container">
        <div className="space-y-12 border-t-2 border-b-2 py-20">
          {text.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "mx-auto text-gray-600 gap-x-12 items-start justify-between lg:flex md:pb-8",
                idx % 2 != 1 && "lg:flex-row-reverse"
              )}
            >
              <div className="hidden lg:block lg:max-w-xl">
                <img src={item.img} className="rounded-lg" alt="" />
              </div>

              <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                <div className="max-w-2xl">
                  <h3 className="text-gray-800 text-2xl font-semibold sm:text-3xl mb-4">
                    {item.title}
                  </h3>

                  <div className="[&_p]:mb-3">{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
