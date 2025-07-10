import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function ClientsTestimonials() {
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 animate-pulse">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Chosen by Leading Global Brands</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore excellent reviews from our vast portfolio of client success stories.
          </p>
          <button className="inline-flex items-center text-primary hover:text-primary/80 font-semibold">
            Client Stories <ArrowRight className="ml-2" size={16} />
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'}
                  alt={`Professional headshot of ${testimonial.name}`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  {testimonial.company && (
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  )}
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-8">Trusted by industry leaders worldwide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
            {[
              "Microsoft", "Google", "Amazon", "IBM", "Oracle", "Salesforce", "SAP", "Adobe"
            ].map((company, index) => (
              <div key={index} className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="text-2xl font-bold text-gray-400">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
