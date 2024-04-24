// export default function Reviews() {
//   const testimonials = [
//     {
//       avatar:
//         "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//       name: "Nguyễn Văn A",
//       title: "Lập trình viên Front-end",
//       quote:
//         "Khóa đào tạo này đã cung cấp cho tôi những kiến thức và kỹ năng cần thiết để trở thành một lập trình viên Front-end chuyên nghiệp. Điều tôi yêu thích nhất là sự kết hợp giữa việc học lý thuyết và thực hành dự án thực tế, giúp tôi có cái nhìn toàn diện hơn về nghề nghiệp mình đã chọn.",
//     },
//     {
//       avatar:
//         "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//       name: "Trần Thị B",
//       title: "Lập trình viên Back-end",
//       quote:
//         "Không chỉ đào tạo về kỹ thuật lập trình, khóa học còn chuẩn bị rất kỹ lưỡng về tiếng Hàn và văn hóa doanh nghiệp Hàn Quốc. Điều này giúp tôi dễ dàng hòa nhập và thích nghi với môi trường làm việc mới tại Hàn Quốc sau khi hoàn thành khóa học.",
//     },
//     {
//       avatar:
//         "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//       name: "Lê Văn C",
//       title: "Lập trình viên Back-end",
//       quote:
//         "Giảng viên tận tâm và giàu kinh nghiệm, luôn sẵn sàng giải đáp mọi thắc mắc của sinh viên. Tôi đánh giá cao chất lượng đào tạo cũng như sự hỗ trợ nhiệt tình từ đội ngũ giảng dạy và quản lý khóa học.",
//     },
//     {
//       avatar:
//         "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//       name: "Phạm Thị D",
//       title: "Lập trình viên Front-end",
//       quote:
//         "Việc được tham gia dự án thực tế ngay trong quá trình học đã giúp tôi rèn luyện và nâng cao kỹ năng một cách hiệu quả. Các dự án này cũng là cơ hội để tôi xây dựng portfolio đầy đủ và thuyết phục hơn khi đi phỏng vấn xin việc.",
//     },
//     {
//       avatar:
//         "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//       name: "Vũ Đình E",
//       title: "Lập trình viên Full-stack",
//       quote:
//         "Không chỉ đạt được kiến thức chuyên môn, tôi còn được trau dồi các kỹ năng mềm như làm việc nhóm, quản lý thời gian và giao tiếp hiệu quả. Đây là những kỹ năng quan trọng giúp tôi thành công trong công việc và sự nghiệp sau này.",
//     },
//     {
//       avatar:
//         "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//       name: "Hoàng Thị F",
//       title: "Lập trình viên Mobile",
//       quote:
//         "Tôi rất hài lòng với sự hỗ trợ tận tình từ đội ngũ của khóa học trong việc kết nối và giới thiệu việc làm. Chỉ trong vòng một tháng sau khi tốt nghiệp, tôi đã có được công việc đầu tiên tại một công ty phần mềm hàng đầu của Hàn Quốc.",
//     },
//   ];
//   return (
//     <div
//       id="testimonials"
//       className="max-w-screen-xl mx-auto px-4 md:px-8 py-20"
//     >
//       <div className="max-w-2xl sm:text-center md:mx-auto">
//         <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
//           Những Lời Nhận Xét Từ Học Viên
//         </h2>
//         <p className="mt-3 text-gray-600">
//           Không chỉ là những con số thống kê, chúng tôi tự hào vì những lời nhận
//           xét tích cực từ các học viên đã tham gia các khóa đào tạo của mình
//         </p>
//       </div>
//       <div className="mt-12">
//         <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {testimonials.map((item, idx) => (
//             <li key={idx} className="bg-white border p-4 rounded-xl">
//               <figure>
//                 <div className="flex items-center gap-x-4">
//                   <img
//                     src={item.avatar}
//                     className="w-14 h-14 object-cover rounded-full"
//                     alt={item.name}
//                   />
//                   <div>
//                     <span className="block text-gray-800 font-semibold">
//                       {item.name}
//                     </span>
//                     <span className="block text-gray-600 text-sm mt-0.5">
//                       {item.title}
//                     </span>
//                   </div>
//                 </div>
//                 <blockquote>
//                   <p className="mt-6 text-gray-700">{item.quote}</p>
//                 </blockquote>
//               </figure>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

export default function Reviews() {
  return (
    <div
      className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900 py-20"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Cùng những người đã đồng hành...
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          <div className="aspect-auto p-8 border border-gray-100 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="user avatar"
                width={400}
                height={400}
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Daniella Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Mobile dev
                </p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus
              libero aspernatur laborum cum, a suscipit, ratione ea totam ullam!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/14.jpg"
                alt="user avatar"
                width={200}
                height={200}
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Jane doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Marketing
                </p>
              </div>
            </div>
            <p className="mt-8">
              {" "}
              Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non
              cumque quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/18.jpg"
                alt="user avatar"
                width={200}
                height={200}
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Yanick Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Developer
                </p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="user avatar"
                width={200}
                height={200}
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Jane Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Mobile dev
                </p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/62.jpg"
                alt="user avatar"
                width={200}
                height={200}
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Andy Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Manager
                </p>
              </div>
            </div>
            <p className="mt-8">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/19.jpg"
                alt="user avatar"
                width={400}
                height={400}
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Yanndy Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Mobile dev
                </p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
