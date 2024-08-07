import Image from "next/image";
import React from "react";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";

export default function TrainingProgram() {
  return (
    <section className="" id="chuong-trinh-dao-tao">
      <div className="container">
        <div className="py-20">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold">Chương trình đào tạo</h2>
          </div>

          <div className="mt-12 flex rounded-md overflow-hidden">
            <div className="">
              <Image
                src="/training.png"
                alt="training"
                width={493}
                height={456}
                className="object-cover h-full"
              />
            </div>
            <Table className="bg-neutral-50">
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Đối tượng tham gia
                  </TableCell>
                  <TableCell>
                    Lập trình viên đã có kinh nghiệm thực tế, mong muốn làm việc
                    tại Hàn Quốc
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Thời lượng</TableCell>
                  <TableCell>4 tuần</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Hình thức</TableCell>
                  <TableCell>Part-time</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Số lượng</TableCell>
                  <TableCell>70 lập trình viên</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    Nội dung đào tạo
                  </TableCell>
                  <TableCell>
                    Đào tạo tiếng Hàn cơ bản và đi làm Đào tạo kỹ năng làm việc
                    tại công ty Hàn Quốc
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}
