"use client"

import { Button } from "@/components/ui/button"
import { FAQ } from "@/components/faq"
import { LoginModal } from "@/components/ui/login-modal"
import { CartModal } from "@/components/ui/cart-modal"
import Link from "next/link"
import { useState } from "react"

interface Course {
  id: string
  title: string
  price: number
  color: string
  emoji: string
  gradient: string
  rating: number
  students: number
  description: string
}

const courses: Course[] = [
  {
    id: "english",
    title: "Tiếng Anh Giao Tiếp Cơ Bản", 
    price: 299,
    color: "text-blue-600",
    emoji: "🇺🇸",
    gradient: "from-blue-500 to-blue-600",
    rating: 4.8,
    students: 124,
    description: "Học tiếng Anh giao tiếp hàng ngày với phương pháp thực tế, từ cơ bản đến tự tin trò chuyện."
  },
  {
    id: "chinese",
    title: "Tiếng Trung Nâng Cao",
    price: 599,
    color: "text-red-600", 
    emoji: "🇨🇳",
    gradient: "from-red-500 to-red-600",
    rating: 4.9,
    students: 89,
    description: "Nâng cao trình độ tiếng Trung với ngữ pháp phức tạp và kỹ năng giao tiếp trong kinh doanh."
  },
  {
    id: "fullstack",
    title: "Lập Trình Web Fullstack",
    price: 899,
    color: "text-green-600",
    emoji: "💻", 
    gradient: "from-green-500 to-green-600",
    rating: 4.7,
    students: 256,
    description: "Học lập trình web từ A-Z với React, Node.js và database. Xây dựng ứng dụng thực tế."
  },
  {
    id: "marketing",
    title: "Digital Marketing Chuyên Nghiệp",
    price: 699,
    color: "text-purple-600",
    emoji: "📈",
    gradient: "from-purple-500 to-purple-600", 
    rating: 4.8,
    students: 189,
    description: "Làm chủ marketing online với SEO, Facebook Ads, Google Ads và content marketing hiệu quả."
  },
  {
    id: "design",
    title: "UI/UX Design Thực Chiến",
    price: 799,
    color: "text-pink-600",
    emoji: "🎨",
    gradient: "from-pink-500 to-pink-600",
    rating: 4.9,
    students: 167,
    description: "Thiết kế giao diện và trải nghiệm người dùng chuyên nghiệp với Figma và Adobe XD."
  },
  {
    id: "datascience", 
    title: "Data Science & AI",
    price: 1199,
    color: "text-indigo-600",
    emoji: "📊",
    gradient: "from-indigo-500 to-indigo-600",
    rating: 4.6,
    students: 145,
    description: "Khám phá thế giới dữ liệu với Python, Machine Learning và Deep Learning ứng dụng thực tế."
  }
]

export default function HomePage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [cartItems, setCartItems] = useState<Course[]>([])

  const handleLogin = (email: string, password: string) => {
    setIsLoggedIn(true)
    setUserEmail(email)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserEmail("")
    setCartItems([])
  }

  const addToCart = (course: Course) => {
    if (!isLoggedIn) {
      setIsLoginOpen(true)
      return
    }
    
    if (!cartItems.find(item => item.id === course.id)) {
      setCartItems([...cartItems, course])
    }
  }

  const removeFromCart = (courseId: string) => {
    setCartItems(cartItems.filter(item => item.id !== courseId))
  }

  const handleCheckout = () => {
    alert(`Thanh toán thành công! Tổng số tiền: ${cartItems.reduce((sum, item) => sum + item.price, 0).toLocaleString()}K VND`)
    setCartItems([])
    setIsCartOpen(false)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Clean Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">Upwise</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Tính năng
              </Link>
              <Link href="#courses" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Khóa học
              </Link>
              <Link href="#testimonials" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Đánh giá
              </Link>
              
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setIsCartOpen(true)}
                    className="relative p-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    🛒
                    {cartItems.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItems.length}
                      </span>
                    )}
                  </button>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Xin chào, {userEmail.split('@')[0]}</span>
                  <Button variant="outline" size="sm" onClick={handleLogout} className="hover:bg-slate-50 dark:hover:bg-slate-800">
                    Đăng xuất
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="ghost" size="sm" onClick={() => setIsLoginOpen(true)} className="hover:bg-slate-50 dark:hover:bg-slate-800">
                    Đăng nhập
                  </Button>
                  <Button size="sm" onClick={() => setIsLoginOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    Đăng ký ngay
                  </Button>
                </>
              )}
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
      <section className="pt-20 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8">
              🚀 Nền tảng học tập thông minh #1 Việt Nam
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Học thông minh,
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                thành công vượt trội
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Khám phá phương pháp học tập hiện đại với Upwise - nền tảng giáo dục trực tuyến giúp bạn phát triển kỹ năng và đạt được mục tiêu nghề nghiệp.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="text-lg px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white">
                Bắt đầu học ngay
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                Xem demo miễn phí
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">10K+</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">Học viên</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">Khóa học</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">95%</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">Hài lòng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">Hỗ trợ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Khóa học <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">phổ biến</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Học cùng hàng nghìn học viên với các khóa học chất lượng cao được thiết kế bởi chuyên gia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className={`w-full h-48 bg-gradient-to-br ${course.gradient} rounded-xl mb-6 flex items-center justify-center`}>
                  <div className="text-5xl">{course.emoji}</div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{course.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-yellow-500">
                    <span className="mr-1">⭐</span>
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-slate-500 dark:text-slate-400 ml-2 text-sm">({course.students} học viên)</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-2xl font-bold ${course.color}`}>
                    {course.price.toLocaleString()}K
                  </span>
                  <Button 
                    size="sm" 
                    className={`bg-gradient-to-r ${course.gradient} hover:scale-105 transition-all duration-200 text-white`}
                    onClick={() => addToCart(course)}
                  >
                    {cartItems.find(item => item.id === course.id) ? "Đã thêm ✓" : "Thêm vào giỏ"}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
              Xem tất cả khóa học
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Tại sao chọn <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Upwise</span>?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Chúng tôi cung cấp trải nghiệm học tập tốt nhất với công nghệ tiên tiến và phương pháp giảng dạy hiệu quả.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Học tập thông minh</h3>
              <p className="text-slate-600 dark:text-slate-400">
                AI cá nhân hóa lộ trình học tập phù hợp với khả năng và mục tiêu của bạn.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Nội dung chất lượng</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Khóa học được thiết kế bởi các chuyên gia hàng đầu trong từng lĩnh vực.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Cộng đồng học tập</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Kết nối với hàng nghìn học viên và mentor để cùng nhau phát triển.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Học viên nói gì về <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Upwise</span>?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Nguyễn Văn A</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Software Engineer</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                &ldquo;Upwise đã giúp tôi nâng cao kỹ năng lập trình một cách hiệu quả. 
                Nội dung rất thực tế và dễ hiểu.&rdquo;
              </p>
              <div className="flex text-yellow-500">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold">B</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Trần Thị B</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Marketing Manager</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                &ldquo;Các khóa học marketing digital rất chất lượng. Tôi đã áp dụng được 
                ngay vào công việc và thấy hiệu quả rõ rệt.&rdquo;
              </p>
              <div className="flex text-yellow-500">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-blue-600 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold">C</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Lê Văn C</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">UI/UX Designer</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                &ldquo;Platform rất user-friendly và có hệ thống tracking tiến độ tuyệt vời. 
                Highly recommend!&rdquo;
              </p>
              <div className="flex text-yellow-500">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="bg-slate-50 dark:bg-slate-800">
        <FAQ />
      </div>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sẵn sàng bắt đầu hành trình học tập?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Tham gia cùng hàng nghìn học viên đã thành công với Upwise. 
            Dùng thử miễn phí 7 ngày, không cần thẻ tín dụng.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-indigo-600 hover:bg-slate-50">
            Dùng thử miễn phí 7 ngày
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">U</span>
                </div>
                <span className="text-xl font-bold text-white">Upwise</span>
              </div>
              <p className="text-slate-400">
                Nền tảng học tập trực tuyến hiện đại, giúp bạn phát triển kỹ năng và đạt được thành công.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Sản phẩm</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Khóa học</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Mentor</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Cộng đồng</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Doanh nghiệp</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Hỗ trợ</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Trung tâm trợ giúp</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Liên hệ</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
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

      {/* Modals */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
      
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  )
}
