"use client";
import { useRef, useState } from "react";

interface FaqsCardProps {
  faqsList: {
    q: string;
    a: string;
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
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
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
            className="h-5 w-5 text-gray-500 ml-2"
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
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqsList = [
    {
      q: "Tôi cần trình độ lập trình nào để tham gia khóa học?",
      a: "Đối với lớp 1 và 2, bạn cần có kinh nghiệm lập trình và đủ trình độ để có thể đi làm ngay. Lớp 3 dành cho những người mới bắt đầu trong lĩnh vực lập trình.",
    },
    {
      q: "Học phí của các khóa học là bao nhiêu?",
      a: "Học phí sẽ được cung cấp sau khi bạn đăng ký và tham gia buổi phỏng vấn. Học phí sẽ phụ thuộc vào khóa học bạn lựa chọn và trình độ của bạn.",
    },
    {
      q: "Sau khi hoàn thành khóa học, tôi sẽ được đảm bảo việc làm tại Hàn Quốc?",
      a: "Chúng tôi sẽ hỗ trợ kết nối và giới thiệu việc làm tại các doanh nghiệp Hàn Quốc. Tuy nhiên, việc có được công việc hay không sẽ phụ thuộc vào năng lực của bạn và quy trình tuyển dụng của doanh nghiệp.",
    },
    {
      q: "Khóa học có cung cấp giáo trình hoặc tài liệu hướng dẫn?",
      a: "Đúng vậy, bạn sẽ được cung cấp giáo trình, tài liệu hướng dẫn và các tài nguyên học tập cần thiết cho khóa học.",
    },
    {
      q: "Hình thức đào tạo của các khóa học là gì?",
      a: "Lớp 1 sẽ được đào tạo theo hình thức online part-time. Lớp 2 và 3 sẽ được đào tạo toàn thời gian tại lớp học hoặc trực tuyến tùy theo tình hình thực tế.",
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 py-20">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl text-gray-800 font-semibold">
          Những Câu Hỏi Thường Gặp
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Dưới đây là những câu hỏi phổ biến về các khóa đào tạo lập trình và
          kết nối việc làm tại Hàn Quốc.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
}
