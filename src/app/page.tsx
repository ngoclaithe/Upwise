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
              <Link href="#courses" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors scroll-smooth">
                Khóa học
              </Link>
              <Link href="#testimonials" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors scroll-smooth">
                Đánh giá
              </Link>
              
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setIsCartOpen(true)}
                    className="relative p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                  >
                    🛒
                    {cartItems.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItems.length}
                      </span>
                    )}
                  </button>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Xin chào, {userEmail}</span>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    Đăng xuất
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="outline" size="sm" className="hover:scale-105 transition-transform" onClick={() => setIsLoginOpen(true)}>
                    Đăng nhập
                  </Button>
                  <Button size="sm" className="hover:scale-105 transition-transform" onClick={() => setIsLoginOpen(true)}>
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
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 hero-pattern overflow-hidden">
        {/* Floating Shapes */}
        <div className="floating-shape w-64 h-64 top-20 left-10 opacity-30"></div>
        <div className="floating-shape w-32 h-32 top-40 right-20 opacity-20"></div>
        <div className="floating-shape w-48 h-48 bottom-20 left-1/4 opacity-25"></div>
        <div className="floating-shape w-20 h-20 top-1/3 right-1/3 opacity-15"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="animate-float">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-reveal">
                Học thông minh
                <br />
                <span className="gradient-text glow">thành công vượt trội</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed text-reveal">
              Khám phá phương pháp học tập hiện đại với Upwise - nền tảng giáo dục trực tuyến 
              giúp bạn phát triển kỹ năng và đạt được mục tiêu nghề nghiệp.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 text-reveal">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shimmer glow hover:scale-105 transition-all duration-300">
                Bắt đầu học ngay
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 gradient-border hover:scale-105 transition-all duration-300">
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

      {/* Popular Courses Section */}
      <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Khóa học <span className="gradient-text">phổ biến</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Học cùng hàng nghìn học viên với các khóa học chất lượng cao được thiết kế bởi chuyên gia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="course-card bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 card-hover">
                <div className={`w-full h-48 bg-gradient-to-br ${course.gradient} rounded-xl mb-6 flex items-center justify-center`}>
                  <div className="text-4xl text-white">{course.emoji}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-yellow-400">
                    ⭐⭐⭐⭐⭐ <span className="text-slate-600 dark:text-slate-400 ml-2">({course.rating}/5)</span>
                  </div>
                  <span className="text-slate-500 text-sm">{course.students} học viên</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-2xl font-bold ${course.color}`}>{course.price}K</span>
                  <Button 
                    size="sm" 
                    className={`bg-gradient-to-r ${course.gradient} hover:scale-105 transition-all duration-300`}
                    onClick={() => addToCart(course)}
                  >
                    {cartItems.find(item => item.id === course.id) ? "Đã thêm vào giỏ" : "Thêm vào giỏ"}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="gradient-border hover:scale-105 transition-all duration-300">
              Xem tất cả khóa học
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="floating-shape w-96 h-96 -top-20 -left-20 opacity-10"></div>
          <div className="floating-shape w-64 h-64 top-1/2 -right-20 opacity-10"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tại sao chọn <span className="gradient-text">Upwise</span>?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Ch��ng tôi cung cấp trải nghiệm học tập tốt nhất với công nghệ tiên tiến 
              và phương pháp giảng dạy hiệu quả.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 card-hover border border-indigo-100 dark:border-indigo-800 relative overflow-hidden">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 transition-colors">Học tập thông minh</h3>
              <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                AI cá nhân hóa lộ trình học tập phù hợp với khả năng và mục tiêu của bạn.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 card-hover border border-purple-100 dark:border-purple-800 relative overflow-hidden">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors">Nội dung chất lượng</h3>
              <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                Khóa học được thiết kế bởi các chuyên gia hàng đầu trong từng lĩnh vực.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 card-hover border border-pink-100 dark:border-pink-800 relative overflow-hidden">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-blue-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-600 transition-colors">Cộng đồng học tập</h3>
              <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                Kết nối với hàng nghìn học viên và mentor để cùng nhau phát triển.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Học viên nói gì về <span className="gradient-text">Upwise</span>?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 card-hover relative overflow-hidden">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Nguyễn Văn A</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Software Engineer</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                &ldquo;Upwise đã giúp tôi nâng cao kỹ năng lập trình một cách hiệu quả. 
                Nội dung rất thực tế và dễ hiểu.&rdquo;
              </p>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 card-hover relative overflow-hidden">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Trần Thị B</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Marketing Manager</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                &ldquo;Các khóa học marketing digital rất chất lượng. Tôi đã áp dụng được 
                ngay vào công việc và thấy hiệu quả rõ rệt.&rdquo;
              </p>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 card-hover relative overflow-hidden">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-blue-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Lê Văn C</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">UI/UX Designer</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                &ldquo;Platform rất user-friendly và có hệ thống tracking tiến độ tuyệt vời. 
                Highly recommend!&rdquo;
              </p>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sẵn sàng bắt đầu hành trình học tập?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn học viên đã thành công với Upwise. 
            Dùng thử miễn phí 7 ngày, không cần thẻ tín dụng.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 glow">
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
