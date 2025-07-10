import { VercelRequest, VercelResponse } from '@vercel/node';

const voicePersonas = [
  {
    id: 1,
    name: "Alexander",
    language: "English (US)",
    personality: "Professional, confident, and articulate",
    description: "A sophisticated voice ideal for business communications and formal presentations."
  },
  {
    id: 2,
    name: "Sofia",
    language: "Spanish (ES)",
    personality: "Warm, friendly, and approachable",
    description: "Perfect for customer service interactions with a welcoming, empathetic tone."
  },
  {
    id: 3,
    name: "Chen",
    language: "Mandarin (CN)",
    personality: "Clear, precise, and reliable",
    description: "Excellent for technical explanations and educational content delivery."
  },
  {
    id: 4,
    name: "Emma",
    language: "English (UK)",
    personality: "Elegant, refined, and trustworthy",
    description: "Ideal for premium services and luxury brand communications."
  },
  {
    id: 5,
    name: "Marcus",
    language: "German (DE)",
    personality: "Authoritative, knowledgeable, and precise",
    description: "Perfect for technical documentation and expert consultation services."
  }
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    
    if (id) {
      const persona = voicePersonas.find(p => p.id === parseInt(id as string));
      if (persona) {
        res.status(200).json(persona);
      } else {
        res.status(404).json({ error: 'Voice persona not found' });
      }
    } else {
      res.status(200).json(voicePersonas);
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}