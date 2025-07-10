import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Play, Pause, Star, Shield, Zap, Plug, BarChart3 } from "lucide-react";
import type { VoicePersona } from "@shared/schema";

export default function VoiceDemo() {
  const [selectedPersona, setSelectedPersona] = useState<VoicePersona | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { data: personas = [], isLoading } = useQuery<VoicePersona[]>({
    queryKey: ['/api/voice-personas'],
  });

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Simulate audio playback
    if (!isPlaying) {
      setTimeout(() => setIsPlaying(false), 3000);
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Security",
      description: "Deliver AI-led support across voice, chat, email and digital channels for a seamless customer experience.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Zap,
      title: "Efficiency", 
      description: "Understand intent, history and sentiment in real time to drive faster and more accurate responses.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Plug,
      title: "Integration",
      description: "Improve response accuracy over time through continuous learning from real-world interactions.",
      color: "text-purple-600", 
      bgColor: "bg-purple-100"
    },
    {
      icon: BarChart3,
      title: "Scalability",
      description: "Connects to your knowledge base and LLM sources to deliver accurate, compliant and up-to-date responses.",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto mb-8"></div>
            <div className="bg-gray-200 rounded-2xl p-8 h-96"></div>
          </div>
        </div>
      </section>
    );
  }

  const currentPersona = selectedPersona || personas[0];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Star className="mr-2" size={16} />
            Athena AI Voice
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Future-Proof Your Contact Centre With <span className="text-primary">AI Agents</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Optimise and accelerate the resolution of high volumes of phone enquiries, all while maintaining a personal connection. Deploy AI Agents to craft seamless, natural-sounding conversations in over 100 languages.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* Voice Demo Interface */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg"
            >
              {/* Main Voice Player */}
              {currentPersona && (
                <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${currentPersona.color} flex items-center justify-center mr-4`}>
                        <span className="text-white font-bold">
                          {currentPersona.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{currentPersona.name}</h3>
                        <p className="text-sm text-gray-600">
                          {currentPersona.language} • {currentPersona.tone} • {currentPersona.personality}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">0:00/1:34</div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={handlePlayPause}
                          className="w-8 h-8 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center transition-colors"
                        >
                          {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{currentPersona.description}</p>
                  {/* Audio waveform visualization */}
                  <div className="h-16 bg-gray-100 rounded-lg flex items-end justify-center space-x-1 p-2">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: isPlaying 
                            ? Math.random() * 40 + 8 
                            : 8
                        }}
                        transition={{ 
                          duration: 0.5,
                          repeat: isPlaying ? Infinity : 0,
                          repeatType: "mirror"
                        }}
                        className={`w-1 rounded-full ${
                          i < 8 ? 'bg-primary' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Voice Personas Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {personas.map((persona) => (
                  <motion.div
                    key={persona.id}
                    onClick={() => setSelectedPersona(persona)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-white rounded-lg p-4 hover:shadow-md transition-all cursor-pointer ${
                      selectedPersona?.id === persona.id ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${persona.color} flex items-center justify-center mb-3`}>
                      <span className="text-white text-sm font-bold">
                        {persona.name.charAt(0)}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">{persona.name}</h4>
                    <p className="text-xs text-gray-600">
                      {persona.language} • {persona.tone} • {persona.personality}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 mt-12 lg:mt-0"
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="flex items-start space-x-4"
                >
                  <div className={`flex-shrink-0 w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center`}>
                    <feature.icon className={feature.color} size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
