import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function Programs() {
  const tableContent = [
    {
      sidebar: "Đối tượng tham gia",
      lv1: "Lập trình viên front-end, back-end, app đã có kinh nghiệm thực tế, mong muốn làm việc tại Hàn Quốc",
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
      sidebar: "Địa điểm",
      lv1: "Online",
      lv2: "Offline tại Văn phòng LIKELION Quận 7",
      lv3: "Offline tại Văn phòng LIKELION Quận 7",
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
          <li>Giáo dục văn hóa doanh nghiệp Hàn Quốc</li>
          <li>Hướng dẫn chuẩn bị sơ yếu lý lịch/phỏng vấn</li>
          <li>Liên kết giới thiệu việc làm với doanh nghiệp tại Hàn Quốc</li>
        </ul>
      ),
      lv2: (
        <ul>
          <li>Tham gia phát triển dự án thực tế để nâng cấp portfolio</li>
          <li>Đào tạo tiếng Hàn cơ bản, tiếng Hàn đi làm</li>
          <li>Giáo dục văn hóa doanh nghiệp Hàn Quốc</li>
          <li>Hướng dẫn chuẩn bị sơ yếu lý lịch/phỏng vấn</li>
          <li>Liên kết giới thiệu việc làm với doanh nghiệp tại Hàn Quốc</li>
        </ul>
      ),
      lv3: (
        <ul>
          <li>Kiến thức lập trình Front-end hoặc Back-end</li>
          <li>Đào tạo tiếng Hàn cơ bản, tiếng Hàn đi làm</li>
          <li>Giáo dục văn hóa doanh nghiệp Hàn Quốc</li>
          <li>Hướng dẫn chuẩn bị sơ yếu lý lịch/phỏng vấn</li>
          <li>Liên kết giới thiệu việc làm với doanh nghiệp tại Hàn Quốc</li>
        </ul>
      ),
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="py-20">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl text-gray-800 font-semibold">
              Chương trình đào tạo
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto text-lg">
              Chương trình đào tạo có thể sẽ thay đổi tùy theo năng lực chuyên
              ngành software thực tế của các ứng viên được chọn.
            </p>
          </div>

          <div className="mt-12">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead className="text-center">
                    Level 1 (Advanced)
                  </TableHead>
                  <TableHead className="text-center">
                    Level 2 (Intermediate)
                  </TableHead>
                  <TableHead className="text-center">Level 3 (Basic)</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {tableContent.map((content, idx) => (
                  <TableRow key={idx} className={cn("[&_li]:list-disc")}>
                    <TableCell className="font-medium text-[#64748b] text-center">
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
      </div>
    </section>
  );
}
