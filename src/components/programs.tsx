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
      lv2: "Mid-level developers hoặc Sinh viên CNTT mới ra trường đã có kiến thức về Front-end, Back-end, Phát triển ứng dụng và mong muốn tìm việc tại Hàn Quốc",
      lv3: "Các lập trình viên dự bị (sinh viên CNTT sắp tốt nghiệp) đang tìm kiếm việc làm tại Hàn Quốc",
    },
    {
      sidebar: "Thời lượng",
      lv1: "4 tuần",
      lv2: "4 tuần",
      lv3: "5 tháng (tương đương 800 giờ)",
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
      className="bg-gray-900 text-white text-primary-foreground"
      id="chuong-trinh-dao-tao"
    >
      <div className="container">
        <div className="py-20">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold">Chương trình đào tạo</h2>
            <p className="max-w-lg mx-auto text-lg">
              Dưới đây là những câu hỏi phổ biến về các khóa đào tạo lập trình
              và kết nối việc làm tại Hàn Quốc.
            </p>
          </div>

          <div className="mt-12">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-28"></TableHead>
                  <TableHead className="text-center text-white w-80">
                    Level 1 (Advanced)
                  </TableHead>
                  <TableHead className="text-center text-white w-80">
                    Level 2 (Intermediate)
                  </TableHead>
                  <TableHead className="text-center text-white w-80">
                    Level 3 (Basic)
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

          <div className="mt-8 flex justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href={site.informationUrl} target="_blank">
                Xem chi tiết
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
