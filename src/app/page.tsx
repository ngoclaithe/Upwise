import { Button } from "@/components/ui/button"
import { FAQ } from "@/components/faq"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg"></div>
              <span className="text-2xl font-bold gradient-text">Upwise</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors scroll-smooth">
                Tính năng
              </Link>
              <Link href="#pricing" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors scroll-smooth">
                Giá cả
              </Link>
              <Link href="#testimonials" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors scroll-smooth">
                Đánh giá
              </Link>
              <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                Đăng nhập
              </Button>
              <Button size="sm" className="hover:scale-105 transition-transform">
                Đăng ký ngay
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="animate-float">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Học thông minh
                <br />
                <span className="gradient-text">thành công vượt trội</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Khám phá phương pháp học tập hiện đại với Upwise - nền tảng giáo dục trực tuyến 
              giúp bạn phát triển kỹ năng và đạt được mục tiêu nghề nghiệp.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Bắt đầu học ngay
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Xem demo miễn phí
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">10K+</div>
                <div className="text-slate-600 dark:text-slate-400">Học viên</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                <div className="text-slate-600 dark:text-slate-400">Khóa học</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">95%</div>
                <div className="text-slate-600 dark:text-slate-400">Hài lòng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                <div className="text-slate-600 dark:text-slate-400">Hỗ trợ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tại sao chọn <span className="gradient-text">Upwise</span>?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Chúng tôi cung cấp trải nghiệm học tập tốt nhất với công nghệ tiên tiến 
              và phương pháp giảng dạy hiệu quả.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 hover:shadow-xl transition-all duration-300 border border-indigo-100 dark:border-indigo-800">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Học tập thông minh</h3>
              <p className="text-slate-600 dark:text-slate-400">
                AI cá nhân hóa lộ trình học tập phù hợp với khả năng và mục tiêu của bạn.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-800">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Nội dung chất lượng</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Khóa học được thiết kế bởi các chuyên gia hàng đầu trong từng lĩnh vực.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 hover:shadow-xl transition-all duration-300 border border-pink-100 dark:border-pink-800">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-blue-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cộng đồng học tập</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Kết nối với hàng nghìn học viên và mentor để cùng nhau phát triển.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Học viên nói gì về <span className="gradient-text">Upwise</span>?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Nguyễn Văn A</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Software Engineer</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                "Upwise đã giúp tôi nâng cao kỹ năng lập trình một cách hiệu quả. 
                Nội dung rất thực tế và dễ hiểu."
              </p>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Trần Thị B</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Marketing Manager</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                "Các khóa học marketing digital rất chất lượng. Tôi đã áp dụng được 
                ngay vào công việc và thấy hiệu quả rõ rệt."
              </p>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-blue-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Lê Văn C</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">UI/UX Designer</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                "Platform rất user-friendly và có hệ thống tracking tiến độ tuyệt vời. 
                Highly recommend!"
              </p>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Gói học phí <span className="gradient-text">linh hoạt</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Chọn gói học phù hợp với nhu cầu và ngân sách của bạn
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
              <h3 className="text-2xl font-bold mb-4">Cơ bản</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">299K</span>
                <span className="text-slate-600 dark:text-slate-400">/tháng</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Truy cập 10 khóa học
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Hỗ trợ cộng đồng
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Chứng chỉ hoàn thành
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Chọn gói này
              </Button>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white relative scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                Phổ biến nhất
              </div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">599K</span>
                <span className="text-indigo-200">/tháng</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Truy cập tất cả khóa học
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Mentor 1-1
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Dự án thực tế
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Hỗ trợ priority
                </li>
              </ul>
              <Button variant="secondary" className="w-full bg-white text-indigo-600 hover:bg-slate-100">
                Chọn gói này
              </Button>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">999K</span>
                <span className="text-slate-600 dark:text-slate-400">/tháng</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Tất cả tính năng Pro
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Khóa học tùy chỉnh
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Team management
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  API access
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Liên hệ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sẵn sàng bắt đầu hành trình học tập?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn học viên đã thành công với Upwise. 
            Dùng thử miễn phí 7 ngày, không cần thẻ tín dụng.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Dùng thử miễn phí 7 ngày
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-300">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg"></div>
                <span className="text-2xl font-bold text-white">Upwise</span>
              </div>
              <p className="text-slate-400">
                Nền tảng học tập trực tuyến hiện đại, giúp bạn phát triển kỹ năng và đạt được thành công.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Sản phẩm</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors">Khóa học</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Mentor</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Cộng đồng</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Doanh nghiệp</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Hỗ trợ</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors">Trung tâm trợ giúp</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Liên hệ</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Theo dõi chúng tôi</h4>
              <div className="flex space-x-4">
                <Link href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <span className="sr-only">Facebook</span>
                  📘
                </Link>
                <Link href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <span className="sr-only">Twitter</span>
                  🐦
                </Link>
                <Link href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  💼
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400">
                © 2024 Upwise. Tất cả quyền được bảo lưu.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Điều khoản sử dụng
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Chính sách bảo mật
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
