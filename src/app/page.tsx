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
    description: "H��c tiếng Anh giao tiếp hàng ngày với phương pháp thực tế"
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
    description: "Nâng cao trình độ tiếng Trung với ngữ pháp phức tạp"
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
    description: "Học lập trình web từ A-Z với React, Node.js"
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
    description: "Làm chủ marketing online với SEO, Facebook Ads"
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
    description: "Thiết kế giao diện chuyên nghiệp với Figma"
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
    description: "Khám phá thế giới dữ liệu với Python, ML"
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
    <div className="min-h-screen overflow-x-hidden">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 glass-card rounded-full px-8 py-4 backdrop-blur-xl">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg"></div>
            <span className="text-xl font-bold gradient-text">Upwise</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">
              Tính năng
            </Link>
            <Link href="#courses" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">
              Khóa học
            </Link>
            <Link href="#testimonials" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">
              Đánh giá
            </Link>
          </div>
          
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-slate-600 hover:text-indigo-600 transition-colors"
              >
                🛒
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
              <Button variant="outline" size="sm" onClick={handleLogout} className="rounded-full">
                Đăng xuất
              </Button>
            </div>
          ) : (
            <Button 
              size="sm" 
              className="rounded-full magnetic-btn bg-gradient-to-r from-indigo-600 to-purple-600" 
              onClick={() => setIsLoginOpen(true)}
            >
              Đăng nhập
            </Button>
          )}
        </div>
      </nav>

      {/* Hero Section - Asymmetric Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden">
        {/* Morphing Background Shapes */}
        <div className="morph-blob absolute w-96 h-96 top-20 -left-20 opacity-30"></div>
        <div className="morph-blob absolute w-64 h-64 top-1/2 -right-32 opacity-20" style={{animationDelay: '2s'}}></div>
        <div className="morph-blob absolute w-48 h-48 bottom-20 left-1/4 opacity-25" style={{animationDelay: '4s'}}></div>
        
        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="stagger-item">
                <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
                  🚀 Nền tảng học tập hiện đại
                </span>
              </div>
              
              <h1 className="text-mega font-black text-slate-900 dark:text-white leading-none stagger-item">
                Học
                <br />
                <span className="gradient-text">thông minh</span>
                <br />
                thành công
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg stagger-item">
                Khám phá phương pháp học tập tiên tiến với AI cá nhân hóa và trải nghiệm tương tác đỉnh cao
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 stagger-item">
                <Button size="lg" className="magnetic-btn bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-8 py-4 text-lg">
                  Bắt đầu ngay → 
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 py-4 text-lg glass-card">
                  Khám phá khóa học
                </Button>
              </div>
            </div>
            
            {/* Right Column - Visual Element */}
            <div className="relative lg:h-[600px] stagger-item">
              <div className="glass-card rounded-3xl p-8 h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                <div className="relative z-10 h-full flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <div className="text-6xl">📚</div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">10,000+ Học viên tin tưởng</h3>
                    <p className="text-slate-600 dark:text-slate-400">Tham gia cộng đồng học tập lớn nhất Việt Nam</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 rounded-xl">
                      <div className="text-2xl font-bold text-indigo-600">95%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Hài lòng</div>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">24/7</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Hỗ trợ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section - Bento Box Layout */}
      <section id="courses" className="py-20 px-4 relative section-curve-top bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-display font-black mb-6">
              Khóa học <span className="gradient-text">được yêu thích</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Học cùng hàng nghìn học viên với các khóa học được thiết kế bởi chuyên gia hàng đầu
            </p>
          </div>
          
          {/* Bento Grid */}
          <div className="bento-grid max-w-7xl mx-auto">
            {/* Large Feature Course */}
            <div className="bento-item-2 stagger-item">
              <div className="glass-card h-full p-8 rounded-3xl relative overflow-hidden group cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${courses[0].gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-5xl mb-4">{courses[0].emoji}</div>
                    <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{courses[0].title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">{courses[0].description}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-3xl font-bold ${courses[0].color}`}>{courses[0].price}K</span>
                      <div className="text-right">
                        <div className="text-yellow-400">⭐ {courses[0].rating}</div>
                        <div className="text-sm text-slate-500">{courses[0].students} học viên</div>
                      </div>
                    </div>
                    <Button 
                      className={`w-full rounded-xl bg-gradient-to-r ${courses[0].gradient} magnetic-btn`}
                      onClick={() => addToCart(courses[0])}
                    >
                      {cartItems.find(item => item.id === courses[0].id) ? "Đã thêm ✓" : "Thêm vào giỏ"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Courses */}
            {courses.slice(1, 4).map((course, index) => (
              <div key={course.id} className={`bento-item-${index + 1 === 1 ? '1' : index + 1 === 2 ? '4' : '5'} stagger-item`}>
                <div className="glass-card h-full p-6 rounded-2xl relative overflow-hidden group cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="text-3xl mb-3">{course.emoji}</div>
                      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{course.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{course.description}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className={`text-xl font-bold ${course.color}`}>{course.price}K</span>
                        <div className="text-yellow-400 text-sm">⭐ {course.rating}</div>
                      </div>
                      <Button 
                        size="sm"
                        className={`w-full rounded-lg bg-gradient-to-r ${course.gradient}`}
                        onClick={() => addToCart(course)}
                      >
                        {cartItems.find(item => item.id === course.id) ? "✓" : "Thêm"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Small Courses */}
            {courses.slice(4).map((course, index) => (
              <div key={course.id} className={`bento-item-${index + 6} stagger-item`}>
                <div className="glass-card h-full p-4 rounded-xl relative overflow-hidden group cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-2xl mb-2">{course.emoji}</div>
                      <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white leading-tight">{course.title}</h3>
                      <div className={`text-lg font-bold ${course.color} mb-2`}>{course.price}K</div>
                    </div>
                    <Button 
                      size="sm"
                      className={`w-full rounded-lg bg-gradient-to-r ${course.gradient} text-xs`}
                      onClick={() => addToCart(course)}
                    >
                      {cartItems.find(item => item.id === course.id) ? "✓" : "Mua"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats Card */}
            <div className="bento-item-3 stagger-item">
              <div className="glass-card h-full p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
                <div className="relative z-10 h-full flex flex-col justify-center text-center space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">50+ Khóa học</h3>
                  <p className="text-slate-600 dark:text-slate-400">Được cập nhật liên tục</p>
                  <div className="text-4xl">🎓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Diagonal */}
      <section id="features" className="diagonal-section bg-slate-50 dark:bg-slate-900 py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-display font-black mb-6">
              Tại sao chọn <span className="gradient-text">Upwise</span>?
            </h2>
          </div>
          
          <div className="overlap-container flex justify-center max-w-6xl mx-auto">
            <div className="overlap-card glass-card p-8 rounded-3xl w-80 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/20 dark:to-purple-900/20">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Cá nhân hóa</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Lộ trình học tập được tối ưu hóa riêng cho từng học viên
              </p>
            </div>
            
            <div className="overlap-card glass-card p-8 rounded-3xl w-80 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Học nhanh hiệu quả</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Phương pháp học tập khoa học giúp tiết kiệm 70% thời gian
              </p>
            </div>
            
            <div className="overlap-card glass-card p-8 rounded-3xl w-80 bg-gradient-to-br from-pink-50/50 to-blue-50/50 dark:from-pink-900/20 dark:to-blue-900/20">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Chứng chỉ uy tín</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Được công nhận bởi các doanh nghiệp hàng đầu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white dark:bg-slate-800 section-curve-bottom">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-display font-black mb-6">
              Học viên <span className="gradient-text">yêu thích</span> Upwise
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Nguyễn Văn A",
                role: "Software Engineer",
                content: "Upwise đã thay đổi hoàn toàn cách tôi học lập trình. Chỉ sau 3 tháng tôi đã có thể làm việc tại Google!",
                avatar: "👨‍💻",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                name: "Trần Thị B", 
                role: "Marketing Manager",
                content: "Khóa học Marketing ở đây thực sự tuyệt vời. Doanh thu công ty tôi đã tăng 300% sau khi áp dụng kiến thức học được.",
                avatar: "👩‍💼",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                name: "Lê Văn C",
                role: "UI/UX Designer", 
                content: "Platform học tập tuyệt vời nhất tôi từng trải nghiệm. Giao diện đẹp, nội dung chất lượng, support nhiệt tình.",
                avatar: "🎨",
                gradient: "from-green-500 to-blue-500"
              }
            ].map((testimonial, index) => (
              <div key={index} className="stagger-item">
                <div className="glass-card p-8 rounded-3xl h-full relative overflow-hidden group hover:scale-105 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-2xl flex items-center justify-center text-2xl mr-4`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
                    <div className="flex text-yellow-400 mt-4">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="bg-slate-50 dark:bg-slate-900">
        <FAQ />
      </div>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="morph-blob absolute w-96 h-96 top-0 right-0 opacity-20" style={{animationDelay: '1s'}}></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-display font-black text-white mb-8">
            Sẵn sàng thay đổi<br />cuộc đời bạn?
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Tham gia ngay hôm nay và trải nghiệm sự khác biệt cùng hàng nghìn học viên thành công
          </p>
          <Button size="lg" variant="secondary" className="magnetic-btn text-lg px-12 py-6 rounded-full">
            Bắt đầu miễn phí 7 ngày ✨
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-slate-900 text-slate-300 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl"></div>
                <span className="text-2xl font-bold text-white">Upwise</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Nền tảng h���c tập thông minh được tin tưởng bởi hàng nghìn học viên trên toàn quốc
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Sản phẩm</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="hover:text-white transition-colors">Khóa học trực tuyến</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Mentor 1:1</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Cộng đồng học tập</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Enterprise</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Hỗ trợ</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="hover:text-white transition-colors">Trung tâm trợ giúp</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Liên hệ hỗ trợ</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Câu hỏi thường gặp</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Kết nối</h4>
              <div className="flex space-x-4">
                {['📘', '🐦', '💼', '📸'].map((icon, index) => (
                  <Link key={index} href="#" className="w-12 h-12 glass-card-dark rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-xl">{icon}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 Upwise. Tất cả quyền được bảo lưu. Made with ❤️ in Vietnam
            </p>
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
