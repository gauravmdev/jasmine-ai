import { VercelRequest, VercelResponse } from '@vercel/node';

const products = [
  {
    id: 1,
    name: "AI Agent",
    title: "Conversational AI-powered virtual assistant",
    description: "Deploy intelligent virtual assistants that understand context, provide personalized responses, and seamlessly handle complex customer interactions across multiple channels.",
    icon: "🤖",
    features: ["Natural Language Processing", "Multi-channel Support", "24/7 Availability", "Contextual Understanding"]
  },
  {
    id: 2,
    name: "AI Guru",
    title: "Expert knowledge and advisory system",
    description: "Leverage AI-powered expertise to provide instant, accurate answers and recommendations based on your industry knowledge base and best practices.",
    icon: "🧠",
    features: ["Knowledge Management", "Expert Recommendations", "Industry Insights", "Decision Support"]
  },
  {
    id: 3,
    name: "AI Analytics",
    title: "Advanced analytics and insights platform",
    description: "Transform raw data into actionable business intelligence with AI-driven analytics that predict trends, identify opportunities, and optimize performance.",
    icon: "📊",
    features: ["Predictive Analytics", "Real-time Insights", "Performance Optimization", "Trend Analysis"]
  },
  {
    id: 4,
    name: "AI Voice",
    title: "Natural voice synthesis and recognition",
    description: "Create lifelike voice interactions with advanced speech synthesis and recognition technology that understands intent and emotion.",
    icon: "🎤",
    features: ["Voice Synthesis", "Speech Recognition", "Emotion Detection", "Multi-language Support"]
  },
  {
    id: 5,
    name: "Speech Recognition",
    title: "Advanced speech-to-text processing",
    description: "Convert speech to text with industry-leading accuracy, supporting multiple languages, accents, and real-time processing for seamless communication.",
    icon: "🗣️",
    features: ["High Accuracy", "Real-time Processing", "Multi-language", "Noise Reduction"]
  }
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    
    if (id) {
      const product = products.find(p => p.id === parseInt(id as string));
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } else {
      res.status(200).json(products);
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}