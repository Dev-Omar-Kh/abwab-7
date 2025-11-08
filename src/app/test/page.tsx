"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const phoneNumbers = [
    "010-69-418-701",
    "011-12-808-740",
    "010-05-455-087",
  ];

  const socialMedia = [
    { name: "فيسبوك", icon: "📘", url: "#" },
    { name: "تويتر", icon: "𝕏", url: "#" },
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[var(--lightColor)] py-16 px-4">
      {/* مقدمة الصفحة */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-[var(--blackColor)] mb-4">
          اتصل بنا
        </h1>
        <p className="text-lg text-gray-700">
          يسعدنا تواصلك معنا للإجابة عن استفساراتك أو تلقي اقتراحاتك.
        </p>
      </div>

      {/* الشبكة الرئيسية */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* العمود الأيسر */}
        <div className="flex flex-col gap-8">
          {/* معلومات الاتصال */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📞</span>
              <h2 className="text-2xl font-semibold text-[var(--blackColor)]">
                معلومات التواصل
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--greenColor)] mb-2">
                  أرقام الهاتف والواتساب
                </h3>
                <div className="flex flex-col gap-3">
                  {phoneNumbers.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone}`}
                      className="flex items-center justify-between bg-[var(--lightColor)] px-4 py-3 rounded-lg border border-gray-200 hover:bg-[var(--greenColor)] hover:text-white transition"
                    >
                      <div className="flex items-center gap-2">
                        <span>📞</span>
                        <span className="font-medium">{phone}</span>
                      </div>
                      <span className="text-sm bg-[#25D366] text-white px-3 py-1 rounded-full">
                        واتساب
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--greenColor)] mb-2">
                  أوقات العمل
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between bg-gray-50 px-4 py-2 rounded-lg border">
                    <span>الأحد - الخميس</span>
                    <span className="font-semibold text-[var(--greenColor)]">
                      9:00 ص - 5:00 م
                    </span>
                  </div>
                  <div className="flex justify-between bg-gray-50 px-4 py-2 rounded-lg border">
                    <span>الجمعة والسبت</span>
                    <span className="text-gray-500">إجازة</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* وسائل التواصل */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🌐</span>
              <h2 className="text-2xl font-semibold text-[var(--blackColor)]">
                تابعنا على
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {socialMedia.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center bg-[var(--greenColor)] text-white py-4 rounded-xl hover:scale-105 transition shadow-md"
                >
                  <span className="text-3xl mb-1">{s.icon}</span>
                  <span className="font-semibold">{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* العمود الأيمن */}
        <div className="flex flex-col gap-8">
          {/* التبرعات */}
          <div className="bg-gradient-to-br from-[var(--greenColor)] to-[var(--blackColor)] text-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💰</span>
              <h2 className="text-2xl font-bold">التبرعات</h2>
            </div>
            <p className="mb-3 text-lg">
              يمكنكم دعمنا عبر فودافون كاش على الأرقام التالية:
            </p>
            <ul className="space-y-2 text-lg">
              {phoneNumbers.map((p, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span>📱</span> <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 bg-white/10 p-3 rounded-lg text-sm">
              💡 لمزيد من التفاصيل، تواصل معنا عبر الأرقام المتاحة.
            </div>
          </div>

          {/* نموذج المراسلة */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">✉️</span>
              <h2 className="text-2xl font-semibold text-[var(--blackColor)]">
                أرسل رسالة
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[var(--greenColor)] outline-none"
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[var(--greenColor)] outline-none"
                    placeholder="example@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">
                  رقم الهاتف (اختياري)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[var(--greenColor)] outline-none"
                  placeholder="أدخل رقم الهاتف"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">
                  الرسالة
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[var(--greenColor)] outline-none resize-none"
                  placeholder="اكتب رسالتك هنا..."
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-[var(--greenColor)] hover:bg-[var(--blackColor)] text-white font-semibold py-3 px-6 rounded-lg transition w-full"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
