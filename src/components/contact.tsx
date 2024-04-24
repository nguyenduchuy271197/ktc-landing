import ContactForm from "./forms/contact-form";

export default function Contact() {
  return (
    <section className="relative py-28 bg-gray-900">
      <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-8 mx-auto text-center sm:px-0">
          <h2 className="text-cyan-400 font-semibold">Contact</h2>
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Form Đăng ký
          </p>
          <p className="text-gray-300">
            Đăng ký ngay trước khi mọi chuyện tồi tệ hơn!
          </p>
        </div>
        <div className="px-8">
          <div className="mt-12 mx-auto p-6 bg-white sm:max-w-lg sm:p-8 rounded-lg">
            <ContactForm />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </section>
  );
}
