"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Upwise có phù hợp với người mới bắt đầu không?",
    answer: "Hoàn toàn phù hợp! Chúng tôi có các khóa học từ cơ bản đến nâng cao. Hệ thống AI sẽ đánh giá trình độ của bạn và gợi ý lộ trình học tập phù hợp nhất."
  },
  {
    question: "Tôi có thể hủy gói đăng ký bất cứ lúc nào không?",
    answer: "Có, bạn có thể hủy đăng ký bất cứ lúc nào mà không mất phí. Tài khoản của bạn sẽ vẫn hoạt động đến hết chu kỳ thanh toán hiện tại."
  },
  {
    question: "Chứng chỉ của Upwise có đư���c công nhận không?",
    answer: "Chứng chỉ Upwise được nhiều doanh nghiệp trong và ngoài nước công nhận. Chúng tôi cũng là đối tác của nhiều tập đoàn lớn trong việc đào tạo nhân sự."
  },
  {
    question: "Tôi có thể học offline không?",
    answer: "Có, ứng dụng mobile của chúng tôi cho phép tải video và tài liệu để học offline. Bạn có thể đồng bộ tiến độ khi có kết nối internet."
  },
  {
    question: "Mentor 1-1 hoạt động như thế nào?",
    answer: "Mentor 1-1 là các chuyên gia hàng đầu trong từng lĩnh vực. Bạn có thể đặt lịch họp trực tuyến, nhận feedback về dự án và được hướng dẫn phát triển sự nghiệp."
  },
  {
    question: "Có hỗ trợ tiếng Việt không?",
    answer: "Có, toàn bộ nội dung và hỗ trợ khách hàng đều bằng tiếng Việt. Chúng tôi cũng có subtitle tiếng Việt cho tất cả video bài giảng."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Câu hỏi <span className="gradient-text">thường gặp</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Tìm hiểu thêm về Upwise qua những câu hỏi phổ biến nhất
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                <div className={`flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Không tìm thấy câu trả lời bạn cần?
          </p>
          <button className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
            Liên hệ với chúng tôi
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
