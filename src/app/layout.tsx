import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Upwise - Học thông minh, thành công vượt trội",
  description: "Nền tảng giáo dục trực tuyến hiện đại giúp bạn phát triển kỹ năng và đạt được mục tiêu nghề nghiệp. Khóa học chất lượng cao với AI cá nhân hóa và mentor 1-1.",
  keywords: ["học online", "khóa học", "kỹ năng", "giáo dục", "mentor", "AI", "học tập thông minh", "phát triển bản thân"],
  authors: [{ name: "Upwise Team" }],
  creator: "Upwise",
  publisher: "Upwise",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://upwise.edu.vn"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Upwise - Học thông minh, thành công vượt trội",
    description: "Nền tảng giáo dục trực tuyến hiện đại với AI cá nhân hóa, khóa học chất lượng và mentor 1-1. Tham gia cùng 10K+ học viên thành công.",
    url: "https://upwise.edu.vn",
    siteName: "Upwise",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Upwise - Nền tảng học tập thông minh",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upwise - Học thông minh, thành công vượt trội",
    description: "Nền tảng giáo dục trực tuyến hiện đại với AI cá nhân hóa và mentor 1-1",
    images: ["/twitter-image.jpg"],
    creator: "@upwise_edu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Upwise" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Upwise",
              "description": "Nền tảng giáo dục trực tuyến hiện đại giúp bạn phát triển kỹ năng và đạt được mục tiêu nghề nghiệp",
              "url": "https://upwise.edu.vn",
              "logo": "https://upwise.edu.vn/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+84-123-456-789",
                "contactType": "customer service",
                "availableLanguage": "Vietnamese"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "VN",
                "addressLocality": "Ho Chi Minh City"
              },
              "sameAs": [
                "https://facebook.com/upwise",
                "https://twitter.com/upwise_edu",
                "https://linkedin.com/company/upwise"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "1250",
                "bestRating": "5"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Gói Cơ bản",
                  "price": "299000",
                  "priceCurrency": "VND",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Gói Pro",
                  "price": "599000",
                  "priceCurrency": "VND",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Gói Enterprise", 
                  "price": "999000",
                  "priceCurrency": "VND",
                  "availability": "https://schema.org/InStock"
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
