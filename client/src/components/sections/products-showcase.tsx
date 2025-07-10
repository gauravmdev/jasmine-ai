import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Brain, TrendingUp, Mic, AudioWaveform, Shield } from "lucide-react";
import type { Product } from "@shared/schema";

const iconMap = {
  "user-robot": Bot,
  "brain": Brain,
  "trending-up": TrendingUp,
  "mic": Mic,
  "audio-waveform": AudioWaveform,
};

export default function ProductsShowcase() {
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-8 animate-pulse">
                <div className="w-16 h-16 bg-gray-200 rounded-xl mb-6"></div>
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-6"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary">AI Products</span> to Power Any Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover ConnexAI's diverse range of AI products, designed to power any business.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => {
            const IconComponent = iconMap[product.icon as keyof typeof iconMap] || Bot;
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <IconComponent className="text-white" size={24} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.title}</p>
                  <p className="text-gray-500 text-sm mb-6">{product.description}</p>
                  <button className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors group-hover:translate-x-1 transform transition-transform">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}

          {/* Enterprise Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: products.length * 0.1 }}
            className="bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group text-white"
          >
            <div className="p-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6"
              >
                <Shield className="text-white" size={24} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Ready</h3>
              <p className="opacity-90 mb-6 leading-relaxed">Scalable & Secure Solutions</p>
              <p className="opacity-80 text-sm mb-6">Built for enterprise with advanced security, compliance, and seamless integration capabilities.</p>
              <button className="inline-flex items-center text-white hover:text-gray-200 font-semibold transition-colors group-hover:translate-x-1 transform transition-transform">
                Learn More <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
