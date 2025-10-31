"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProjectIdeaPage() {
  return (
    <main className="bg-[#f6f9f6] text-center text-gray-800">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-green-700 mb-4"
        >
          فكرة المشروع
        </motion.h1>

        {/* مكان الصورة الرئيسية */}
        <div className="w-full max-w-4xl h-64 bg-green-100 rounded-2xl mx-auto mb-6 flex items-center justify-center text-green-700 font-semibold">
          مساحة صورة رئيسية للمشروع
        </div>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          مشروع <span className="text-green-700 font-semibold">الأبواب السبعة للصدقة الجارية</span> هو مبادرة خيرية شاملة
          تهدف إلى إنشاء مصادر دائمة للعطاء والخير، تستمر في نفع الناس وتدر الأجر المستمر للمتبرعين. 
          نحن نؤمن بأن الصدقة الجارية هي استثمار في الآخرة يظل يثمر حتى بعد رحيل الإنسان.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">رسالتنا</h2>

        {/* صورة توضيحية */}
        <div className="w-full max-w-3xl h-56 bg-emerald-100 rounded-2xl mx-auto mb-6 flex items-center justify-center text-emerald-700 font-semibold">
          صورة توضيحية للرسالة
        </div>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          نسعى ليكون مشروعنا بوابة مفتوحة للخير والعطاء، نقدم من خلالها مشاريع مستدامة 
          تلامس احتياجات المسلمين حول العالم، وتكون سبباً في نشر الإسلام ودعم المجتمعات المحتاجة.
        </p>
      </section>

      {/* Main Pillars */}
      <section className="py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-12">
          محاور عملنا الرئيسية
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-start">
          {/* المحور الأول */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
            <div className="w-full h-40 bg-green-100 rounded-xl mb-4 flex items-center justify-center text-green-700 font-medium">
              صورة للمشاريع الإنسانية
            </div>
            <h3 className="text-green-700 font-bold text-xl mb-3">١. المشاريع الإنسانية العاجلة</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>حفر الآبار وتوفير مياه الشرب في أفريقيا واليمن وغزة</li>
              <li>كفالة الأيتام في المناطق المحتاجة</li>
              <li>توزيع الكسوة الشتوية في المناطق الباردة</li>
            </ul>
          </div>

          {/* المحور الثاني */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
            <div className="w-full h-40 bg-lime-100 rounded-xl mb-4 flex items-center justify-center text-lime-700 font-medium">
              صورة للمشاريع الدعوية
            </div>
            <h3 className="text-green-700 font-bold text-xl mb-3">٢. المشاريع الدعوية والتعليمية</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>طباعة وتوزيع المصاحف</li>
              <li>إنشاء ودعم مراكز تحفيظ القرآن</li>
              <li>بناء وترميم المساجد</li>
              <li>الدعوة الإلكترونية بلغات متعددة</li>
              <li>مشاريع مواجهة الإلحاد</li>
            </ul>
          </div>

          {/* المحور الثالث */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
            <div className="w-full h-40 bg-teal-100 rounded-xl mb-4 flex items-center justify-center text-teal-700 font-medium">
              صورة للمشاريع التنموية
            </div>
            <h3 className="text-green-700 font-bold text-xl mb-3">٣. المشاريع التنموية المستدامة</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>إقامة المشاريع الصغيرة للأرامل والمحتاجين</li>
              <li>منح الزواج للشباب والفتيات الفقراء</li>
              <li>مشروع "إتعلم حرفة" لتمكين الفقراء</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Donation System */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-8">آلية المشاركة</h2>

        {/* صورة */}
        <div className="w-full max-w-3xl h-56 bg-green-100 rounded-2xl mx-auto mb-8 flex items-center justify-center text-green-700 font-semibold">
          صورة توضيحية للتبرع
        </div>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
          نقدم نظاماً مرناً للتبرع الشهري يتناسب مع قدرات الجميع:
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { title: "السهم الماسي", price: "700 جنيه / 1000 ريال / 200 دولار" },
            { title: "السهم الذهبي", price: "500 جنيه / 100 ريال / 50 دولار" },
            { title: "السهم الفضي", price: "300 جنيه / 50 دولار" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-green-50 border border-green-200 rounded-2xl px-8 py-5 w-64 text-center shadow-sm"
            >
              <h4 className="font-semibold text-green-700 mb-2">{item.title}</h4>
              <p className="text-gray-700">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-8">الشفافية والمتابعة</h2>

        {/* صورة */}
        <div className="w-full max-w-3xl h-56 bg-emerald-100 rounded-2xl mx-auto mb-8 flex items-center justify-center text-emerald-700 font-semibold">
          صورة لتوثيق المشاريع
        </div>

        <ul className="max-w-3xl mx-auto text-lg space-y-3 text-gray-700 text-start list-disc list-inside">
          <li>توثيق جميع المشاريع بالفيديو والصور</li>
          <li>إرسال تقارير شهرية للمتبرعين</li>
          <li>متابعة تأثير المشاريع على المستفيدين</li>
        </ul>
      </section>

      {/* Join Section */}
      <section className="py-20 px-4 bg-green-50">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">انضم إلى ركب الخير</h2>

        {/* صورة */}
        <div className="w-full max-w-3xl h-56 bg-lime-100 rounded-2xl mx-auto mb-8 flex items-center justify-center text-lime-700 font-semibold">
          صورة ختامية تحفيزية
        </div>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
          ساهم معنا في بناء مستقبل أفضل للمسلمين حول العالم، واجعل لك صدقة جارية تظل تنفعك بعد مماتك.
        </p>
        <p className="text-green-700 font-semibold">"خير الناس أنفعهم للناس"</p>
      </section>
    </main>
  );
}
