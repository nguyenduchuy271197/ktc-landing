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
      q: "Chương trình có yêu cầu về độ tuổi và kinh nghiệm của ứng viên không ạ?",
      a: "Dự án tiếp nhận ứng viên dưới 35 tuổi, lý lịch không có tiền án tiền sự. Đơn vị sẽ tuyển chọn dựa trên mặt bằng chung, không yêu cầu số năm kinh nghiệm cụ thể.",
    },
    {
      q: "Các khoá đào tạo có mở thêm không ạ?",
      a: "Chương trình chỉ được tổ chức một lần trong năm 2024 thôi, vậy nên hãy quyết định nhanh chóng bạn nhé.",
    },
    {
      q: "Cuối khoá học có bài test đầu ra không ạ? Tiêu chí đánh giá ra sao?",
      a: "Sau khoá học, học viên không làm test cuối khoá mà sẽ gửi hồ sơ và tham gia phỏng vấn với các doanh nghiệp Hàn Quốc.",
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
      a: "Không yêu cầu, tuy nhiên có tiếng Anh cơ bản sẽ giúp bạn dễ dàng trao đổi công việc và thực hiện các sinh hoạt khác tại Hàn.",
    },
    {
      q: "Chi phí học như thế nào?",
      a: "Để tham gia chương trình học viên cần đóng phí bảo chứng, LIKELION sẽ hoàn lại học phí khi (đậu phỏng vấn/ hay chỉ cần đi học đầy đủ?)",
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto py-20">
      <div className="container">
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
      </div>
    </section>
  );
}
