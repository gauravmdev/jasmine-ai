import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "TAPS",
    description: "America's largest military charity realises the power of ConnexAI.",
    category: "Government & Non-Profit",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
    alt: "Modern office environment showing government and non-profit operations"
  },
  {
    title: "Exact Medicare",
    description: "How AI Agents are transforming the healthcare industry.",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
    alt: "Customer service representatives working in a healthcare call center environment"
  },
  {
    title: "TIH (Telesure)",
    description: "Expand any call centre through the power of AI",
    category: "BPO",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
    alt: "Professional team meeting in a business process outsourcing call center"
  }
];

export default function IndustryShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Adaptable to Any Industry</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Browse the testimonial resource hub to see what our clients and partners have to say about Jasmine AI
          </p>
          <button className="inline-flex items-center text-primary hover:text-primary/80 font-semibold">
            Client Stories <ArrowRight className="ml-2" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group"
            >
              <img
                src={industry.image}
                alt={industry.alt}
                className="rounded-xl w-full h-48 object-cover mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
              <button className="inline-flex items-center text-primary hover:text-primary/80 font-semibold group-hover:translate-x-1 transition-transform">
                Explore {industry.category} <ArrowRight className="ml-2" size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
