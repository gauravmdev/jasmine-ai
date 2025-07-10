import { useState } from "react";
import { Menu, X, ChevronDown, Brain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top announcement banner */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 text-center text-sm font-medium">
        🏆 Jasmine AI named by Viva Tech: Top 10 Next Unicorns
      </div>

      {/* Navigation Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg mr-3 flex items-center justify-center">
                  <Brain className="text-white" size={16} />
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">Jasmine AI</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <div className="relative group">
                  <button className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    Product <ChevronDown className="ml-1" size={14} />
                  </button>
                </div>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Clients</a>
                <div className="relative group">
                  <button className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    Company <ChevronDown className="ml-1" size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Theme Toggle and CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                  <a href="#" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">Product</a>
                  <a href="#" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">Clients</a>
                  <a href="#" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">Company</a>
                  <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors w-full mt-4">
                    Get Started
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
}
