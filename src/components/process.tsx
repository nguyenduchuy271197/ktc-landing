const steps = [
  {
    time: new Date(),
    title: "Xét duyệt hồ sơ",
    description: "Ứng viên gửi Hồ sơ ứng tuyển về LIKELION trước hạn",
  },
  {
    time: new Date(),
    title: "Bài kiểm tra năng lực",
    description:
      "Ứng viên tham gia làm bài kiểm tra kiến thức và năng lực chuyên môn",
  },
  {
    time: new Date(),
    title: "Phỏng vấn đầu vào",
    description:
      "Ứng viên trình bày động lực và thuyết phục Đơn vị đào tạo để nhận học bổng 100%",
  },
  {
    time: new Date(),
    title: "Xếp lớp",
    description:
      "Sau khi vượt qua 3 vòng đánh giá, ứng viên sẽ được xếp vào cấp lớp phù hợp",
  },
  {
    time: new Date(),
    title: "Đào tạo",
    description: "Ứng viên trải qua 1-5 tháng đào tạo tuỳ vào cấp lớp",
  },
  {
    time: new Date(),
    title: "Phỏng vấn đầu ra",
    description:
      "Ứng viên trao đổi và thuyết phục Nhà tuyển dụng để lấy offer vị trí mình mong muốn",
  },
  {
    time: new Date(),
    title: "Cấp VISA đi Hàn",
    description:
      "Sau khi có kết quả đậu phỏng vấn, các ứng viên sẽ được cấp VISA làm việc tại Hàn",
  },
  {
    time: new Date(),
    title: "Học hỏi và trải nghiệm",
    description:
      "Ứng viên sẽ được học hỏi và tích luỹ kinh nghiệm thực tế khi làm tại các Start-up Hàn",
  },
];

export default function Process() {
  return (
    <div className="container">
      <div className="grid grid-cols-[2fr_3fr] gap-8 py-20">
        <div>
          <div className="max-w-md space-y-3 sticky top-10">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Quy trình xét tuyển
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              congue, nisl eget molestie varius, enim ex faucibus purus
            </p>
          </div>
        </div>

        <div className="-my-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-32 py-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-orange-400 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute -left-2 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-24 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  {step.time.toLocaleDateString("vi-VN", {
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <div className="text-xl font-bold text-slate-900">
                  {step.title}
                </div>
              </div>
              {/* Content */}
              <div className="text-slate-500">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
