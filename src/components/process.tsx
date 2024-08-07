import AnimationLayout from "./shared/animation-layout";

const steps = [
  {
    // time: "22/04/2024 - 15/05/2024",
    title: "Nộp đơn ứng tuyển",
    description: "Ứng viên điền mẫu ứng tuyển trước hạn chót đăng ký",
  },
  {
    // time: "16/05/2024 - 20/05/2024",
    title: "Xét duyệt hồ sơ",
    description: "Chọn lọc các hồ sơ phù hợp với yêu cầu chương trình",
  },
  // {
  //   // time: "21/05/2024",
  //   title: "Kiểm tra năng lực (Online)",
  //   description: "Làm bài kiểm tra kiến thức và năng lực chuyên môn",
  // },
  {
    // time: "22/05/2024 - 24/05/2024",
    title: "Phỏng vấn đầu vào",
    description:
      "Tham gia phỏng vấn trực tiếp (offline) hoặc trực tuyến (online)",
  },
  {
    // time: "27/05/2024 - 31/05/2024",
    title: "Đào tạo",
    description:
      "Tham gia đào lớp đào tạo tiếng Hàn cơ bản, tiếng Hàn giao tiếp & các kỹ năng khác trong vòng 4 tuần (2 buổi tối / tuần)",
  },
  {
    // time: "06/2024 - 11/2024",
    title: "Phỏng vấn đầu ra",
    description:
      "Phỏng vấn trực tiếp với các công ty công nghệ Hàn Quốc để tìm kiếm việc làm mong muốn",
  },
  // {
  //   time: "12/2024",
  //   title: "Phỏng vấn đầu ra",
  //   description:
  //     "Ứng viên trao đổi và thuyết phục Nhà tuyển dụng để lấy offer vị trí mình mong muốn",
  // },
  // {
  //   time: "2025",
  //   title: "Cấp VISA đi Hàn",
  //   description:
  //     "Sau khi có kết quả đậu phỏng vấn, các ứng viên sẽ được cấp VISA làm việc tại Hàn",
  // },
  // {
  //   time: "2025",
  //   title: "Học hỏi và trải nghiệm",
  //   description:
  //     "Ứng viên sẽ được học hỏi và tích luỹ kinh nghiệm thực tế khi làm tại các Start-up Hàn",
  // },
];

export default function Process() {
  return (
    <div className="container">
      <AnimationLayout
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <div className="grid md:grid-cols-[2fr_3fr] gap-8 py-20">
          <div>
            <div className="max-w-md space-y-3 sticky top-10">
              <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Quy trình xét tuyển
              </h2>
              {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              congue, nisl eget molestie varius, enim ex faucibus purus
            </p> */}
            </div>
          </div>

          <div className="-my-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative pl-8 py-6 group">
                <div className="flex flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 after:w-2 after:h-2 after:bg-orange-400 after:border-4 after:box-content after:border-slate-50 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
                  {/* <time className="-left-2 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase px-2 h-6 mb-3 text-orange-600 bg-orange-100 rounded-full">
                    {step.time}
                  </time> */}
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
      </AnimationLayout>
    </div>
  );
}
