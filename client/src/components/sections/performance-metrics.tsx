import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const metrics = [
  {
    value: "10x",
    label: "More Interactions Handled Following AI Implementation"
  },
  {
    value: "70%",
    label: "Decrease in Handle Time"
  },
  {
    value: "65%", 
    label: "Reduction of Inbound Calls"
  },
  {
    value: "24/7",
    label: "AI Agent Availability"
  },
  {
    value: "5x",
    label: "Faster Data Processing"
  },
  {
    value: "100+",
    label: "Languages Supported"
  }
];

export default function PerformanceMetrics() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Industry-Leading Performance</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover Athena, ConnexAI's innovative AI product suite designed to reshape customer engagement.
          </p>
          <button className="inline-flex items-center text-white hover:text-gray-200 font-semibold mt-4">
            Find out more <ArrowRight className="ml-2" size={16} />
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                className="text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                {metric.value}
              </motion.div>
              <p className="text-white/90 text-lg font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
