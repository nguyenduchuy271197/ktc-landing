import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import Link from "next/link";
import { site } from "@/config/site";

export default function Programs() {
  const tableContent = [
    {
      sidebar: "Đối tượng tham gia",
      lv1: "Lập trình viên đã có kinh nghiệm thực tế, mong muốn làm việc tại Hàn Quốc",
      lv2: "Lập trình viên mới đi làm hoặc Sinh viên CNTT sắp/đã ra trường và có kiến thức nền tảng",
      lv3: "Sinh viên CNTT tiềm năng nhưng cần củng cố nền tảng và kỹ năng cơ bản",
    },
    {
      sidebar: "Thời lượng",
      lv1: "4 tuần",
      lv2: "6 tuần",
      lv3: "5 tháng",
    },
    {
      sidebar: "Hình thức",
      lv1: "Part-time",
      lv2: "Full-time",
      lv3: "Full-time",
    },
    {
      sidebar: "Số lượng",
      lv1: (
        <ul>
          <li>Front-end: 20 người</li>
          <li>Back-end: 20 người</li>
        </ul>
      ),
      lv2: (
        <ul>
          <li>Front-end: 20 người</li>
          <li>Back-end: 20 người</li>
        </ul>
      ),
      lv3: (
        <ul>
          <li>Front-end: 40 người</li>
          <li>Back-end: 40 người</li>
        </ul>
      ),
    },
    {
      sidebar: "Nội dung đào tạo",
      lv1: (
        <ul>
          <li>Đào tạo tiếng Hàn cơ bản, tiếng Hàn đi làm</li>
          <li>Đào tạo kỹ năng làm việc tại công ty Hàn Quốc</li>
        </ul>
      ),
      lv2: (
        <ul>
          <li>Tham gia dự án thực chiến để nâng cấp portfolio</li>
          <li>Đào tạo tiếng Hàn cơ bản, tiếng Hàn đi làm</li>
          <li>Đào tạo kỹ năng làm việc tại công ty Hàn Quốc</li>
        </ul>
      ),
      lv3: (
        <ul>
          <li>Kiến thức lập trình Front-end hoặc Back-end</li>
          <li>Tham gia dự án thực chiến để nâng cấp portfolio</li>
          <li>Đào tạo kỹ năng làm việc tại công ty Hàn Quốc</li>
          <li>Đào tạo tiếng Hàn cơ bản, tiếng Hàn đi làm</li>
        </ul>
      ),
    },
  ];
  return (
    <section
      className="bg-[#101416] text-white text-primary-foreground"
      id="chuong-trinh-dao-tao"
    >
      <div className="container">
        <div className="py-20">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold">Chương trình đào tạo</h2>
          </div>

          <div className="mt-12">
            <p className="text-orange-300 mb-2">
              *Ứng viên ngoài khu vực TPHCM cũng có thể đăng ký học theo lộ
              trình online
            </p>
            <div className="[mask-image:linear-gradient(to_left,transparent,white_20%,white_100%,transparent)] md:[mask-image:none]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-28"></TableHead>
                    <TableHead className="text-center text-white w-80">
                      Lớp Cao Cấp
                    </TableHead>
                    <TableHead className="text-center text-white w-80">
                      Lớp Trung Cấp
                    </TableHead>
                    <TableHead className="text-center text-white w-80">
                      Lớp Sơ Cấp
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {tableContent.map((content, idx) => (
                    <TableRow key={idx} className={cn("[&_li]:list-disc")}>
                      <TableCell className="font-medium text-center">
                        {content.sidebar}
                      </TableCell>
                      <TableCell>{content.lv1}</TableCell>
                      <TableCell className="">{content.lv2}</TableCell>
                      <TableCell>{content.lv3}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center text-sm font-medium gap-x-3 gap-y-4 mt-12">
            <Button size="lg" className="w-full md:w-auto" asChild>
              <Link href={site.registrationUrl}>Đăng ký ngay</Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full md:w-auto"
              asChild
            >
              <Link href={site.informationUrl} target="_blank">
                Tải Brochure Dự án
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
