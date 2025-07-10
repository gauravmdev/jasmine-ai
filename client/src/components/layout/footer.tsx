import { Brain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg mr-3 flex items-center justify-center">
                <Brain className="text-white" size={16} />
              </div>
              <span className="text-xl font-bold">ConnexAI</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              The global leader in conversational AI, empowering businesses to transform customer engagement through intelligent automation and natural conversation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <span className="text-sm">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <span className="text-sm">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <span className="text-sm">▶</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Agent</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Guru</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Voice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Speech Recognition</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Clients</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 ConnexAI. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
