import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import ProductsShowcase from "@/components/sections/products-showcase";
import ClientsTestimonials from "@/components/sections/clients-testimonials";
import PerformanceMetrics from "@/components/sections/performance-metrics";
import VoiceDemo from "@/components/sections/voice-demo";
import IndustryShowcase from "@/components/sections/industry-showcase";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Adaptable to any industry</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover how ConnexAI transforms customer engagement across various sectors</p>
            </div>
            {/* Ticker Animation Container */}
            <div className="relative">
              <div className="ticker-wrapper">
                <div className="ticker-content">
                  {/* First set of industries */}
                  {[
                    { icon: "🏥", label: "Healthcare" },
                    { icon: "🏛️", label: "Finance" },
                    { icon: "🛒", label: "Retail" },
                    { icon: "🎓", label: "Education" },
                    { icon: "🚗", label: "Automotive" },
                    { icon: "✈️", label: "Travel" },
                    { icon: "🛡️", label: "Government" },
                    { icon: "⚙️", label: "Manufacturing" },
                  ].map((industry, index) => (
                    <div key={index} className="ticker-item">
                      <div className="text-4xl mb-2">{industry.icon}</div>
                      <div className="text-sm text-gray-600 font-medium">{industry.label}</div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {[
                    { icon: "🏥", label: "Healthcare" },
                    { icon: "🏛️", label: "Finance" },
                    { icon: "🛒", label: "Retail" },
                    { icon: "🎓", label: "Education" },
                    { icon: "🚗", label: "Automotive" },
                    { icon: "✈️", label: "Travel" },
                    { icon: "🛡️", label: "Government" },
                    { icon: "⚙️", label: "Manufacturing" },
                  ].map((industry, index) => (
                    <div key={`duplicate-${index}`} className="ticker-item">
                      <div className="text-4xl mb-2">{industry.icon}</div>
                      <div className="text-sm text-gray-600 font-medium">{industry.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductsShowcase />
        <ClientsTestimonials />
        <PerformanceMetrics />
        <VoiceDemo />
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Discover the Full AI Suite</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Athena is ConnexAI's all-in-one AI engine, designed to elevate customer experience by streamlining communication, automating processes, and empowering smarter, faster decisions.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Athena AI
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Security",
                  description: "Deliver AI-led support across voice, chat, email and digital channels for a seamless customer experience.",
                  icon: "🛡️",
                  color: "bg-blue-100"
                },
                {
                  title: "Efficiency",
                  description: "Understand intent, history and sentiment in real time to drive faster and more accurate responses.",
                  icon: "⚡",
                  color: "bg-green-100"
                },
                {
                  title: "Integration", 
                  description: "Improve response accuracy over time through continuous learning from real-world interactions.",
                  icon: "🔌",
                  color: "bg-purple-100"
                },
                {
                  title: "Scalability",
                  description: "Connects to your knowledge base and LLM sources to deliver accurate, compliant and up-to-date responses.",
                  icon: "📈",
                  color: "bg-orange-100"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 text-2xl`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <IndustryShowcase />
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              A New Age of Customer Service
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to start your AI journey? Book your demo today.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-lg text-xl font-semibold transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl">
              Begin
            </button>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                No Setup Fees
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">⏱️</span>
                Quick Implementation
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-2">🎧</span>
                24/7 Support
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
