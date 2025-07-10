import { motion } from "framer-motion";
import { Star, Shield, Clock, Globe, Play } from "lucide-react";
import { Typewriter } from "@/components/ui/typewriter";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 lg:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Star className="mr-2" size={16} />
              Athena 2.0 - Now Available
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
            >
              The Global Leader in{" "}
              <span className="text-gradient">
                <Typewriter text="Conversational AI" delay={150} />
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Explore an AI solution that seamlessly engages in conversation, automates support, and provides real-time insights to drive growth and enhance customer satisfaction.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-center">
                Get Started
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center flex items-center justify-center">
                <Play className="mr-2" size={20} />
                Watch Demo
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 flex-wrap"
            >
              <div className="flex items-center">
                <Shield className="text-green-500 mr-2" size={16} />
                Enterprise Security
              </div>
              <div className="flex items-center">
                <Clock className="text-blue-500 mr-2" size={16} />
                24/7 Support
              </div>
              <div className="flex items-center">
                <Globe className="text-purple-500 mr-2" size={16} />
                100+ Languages
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 mt-12 lg:mt-0"
          >
            {/* AI Technology visualization with dashboard mockup */}
            <div className="relative">
              {/* Modern technology dashboard mockup */}
              <motion.div
                initial={{ rotate: 3 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Athena Dashboard</span>
                </div>
                {/* AI technology business scene */}
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
                  alt="AI technology dashboard with analytics and data visualization"
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary">10x</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">More Interactions</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-500">70%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Faster Response</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg flex items-center justify-center"
              >
                🤖
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg shadow-lg flex items-center justify-center"
              >
                💬
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
