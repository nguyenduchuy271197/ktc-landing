"use client";
import { ReactNode, useRef, useState } from "react";
import AnimationLayout from "./shared/animation-layout";

interface FaqsCardProps {
  faqsList: {
    q: string;
    a: ReactNode;
  };
  idx: number;
}

const FaqsCard = (props: FaqsCardProps) => {
  const answerElRef = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    if (answerElRef.current) {
      const answerElH = (answerElRef.current.childNodes[0] as HTMLElement)
        .offsetHeight;
      setState(!state);
      setAnswerH(`${answerElH + 20}px`);
    }
  };

  return (
    <div className="space-y-3 mt-5 overflow-hidden border-b" key={idx}>
      <h4
        className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium"
        onClick={handleOpenAnswer}
      >
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div className="text-gray-500">{faqsList.a}</div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqsList = [
    {
      q: "Chương trình có yêu cầu về độ tuổi và kinh nghiệm của ứng viên không ạ?",
      a: (
        <div>
          <p>
            Dự án tiếp nhận ứng viên dưới 35 tuổi, lý lịch rõ ràng, không có
            tiền án tiền sự.
          </p>
          <p>
            Quá trình xét tuyển bao gồm thẩm định hồ sơ, kiểm tra đầu vào và
            phỏng vấn chuyên sâu, không yêu cầu số năm kinh nghiệm cụ thể.
          </p>
        </div>
      ),
    },
    {
      q: "Các khoá đào tạo có mở thêm không ạ?",
      a: "Chương trình chỉ được tổ chức một lần trong năm 2024 thôi, vậy nên hãy quyết định nhanh chóng bạn nhé.",
    },
    {
      q: "Cuối khoá học có bài test đầu ra không ạ? Tiêu chí đánh giá ra sao?",
      a: "Kết thúc khóa học, học viên sẽ tham gia phát triển dự án theo yêu cầu đề bài từ chính các doanh nghiệp. Đồng thời sẽ được kết nối tham gia phỏng vấn trực tiếp với các doanh nghiệp có như cầu tuyển dụng nhân lực.",
    },
    {
      q: "Dự án thực tế trong khoá đào tạo có phải là do doanh nghiệp tuyển dụng ra đề?",
      a: "Đúng vậy. Doanh Nghiệp là người ra đề và học viên dựa theo yêu cầu để thực hiện. Sau đó, doanh nghiệp sẽ đánh giá dựa trên bài nhóm và năng lực từng cá nhân.",
    },
    {
      q: "Khi phỏng vấn với doanh nghiệp cần dùng Tiếng Hàn và Tiếng Anh phải không ạ?",
      a: "Điều này còn dựa vào quy trình tuyển dụng của công ty bạn ứng tuyển, tuy nhiên sẽ có thông dịch viên Hàn-Việt hỗ trợ.",
    },
    {
      q: "Khi làm việc tại Hàn có yêu cầu Tiếng Anh không?",
      a: "Không yêu cầu, tuy nhiên có tiếng Anh cơ bản sẽ giúp bạn dễ dàng trao đổi công việc và thực hiện các sinh hoạt khác tại Hàn Quốc.",
    },
    {
      q: "Ứng tuyển K-Tech College 2024 có mất phí không?",
      a: "Ứng viên ứng tuyển K-Tech College 2024 hoàn toàn miễn phí. Chương trình cam kết không phát sinh thêm bất cứ chi phí nào khác trong suốt quá trình ứng tuyển.",
    },
  ];

  return (
    <section className="leading-relaxed sm:py-20 pt-14" id="faqs">
      <AnimationLayout
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0 translate-y-12",
        }}
      >
        <div className="container">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl text-gray-800 font-semibold">
              Các câu hỏi thường gặp về dự án K-Tech College 2024
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto text-lg">
              Dưới đây là những câu hỏi phổ biến về các khóa đào tạo lập trình
              và kết nối việc làm tại Hàn Quốc.
            </p>
          </div>
          <div className="mt-14 max-w-2xl mx-auto">
            {faqsList.map((item, idx) => (
              <FaqsCard key={idx} idx={idx} faqsList={item} />
            ))}
          </div>
        </div>
      </AnimationLayout>
    </section>
  );
}
