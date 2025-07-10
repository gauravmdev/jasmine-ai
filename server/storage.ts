import { products, testimonials, voicePersonas, type Product, type Testimonial, type VoicePersona, type InsertProduct, type InsertTestimonial, type InsertVoicePersona } from "@shared/schema";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Voice Personas
  getVoicePersonas(): Promise<VoicePersona[]>;
  getVoicePersona(id: number): Promise<VoicePersona | undefined>;
  createVoicePersona(persona: InsertVoicePersona): Promise<VoicePersona>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private testimonials: Map<number, Testimonial>;
  private voicePersonas: Map<number, VoicePersona>;
  private currentProductId: number;
  private currentTestimonialId: number;
  private currentVoicePersonaId: number;

  constructor() {
    this.products = new Map();
    this.testimonials = new Map();
    this.voicePersonas = new Map();
    this.currentProductId = 1;
    this.currentTestimonialId = 1;
    this.currentVoicePersonaId = 1;
    
    // Initialize with real data from ConnexAI
    this.initializeData();
  }

  private async initializeData() {
    // Real ConnexAI products
    const productData: InsertProduct[] = [
      {
        name: "AI Agent",
        title: "Conversational AI-Driven Excellence",
        description: "Provides 24/7 support by automating tasks and managing customer interactions across all channels.",
        icon: "user-robot",
        color: "from-indigo-500 to-indigo-600",
        slug: "ai-agent"
      },
      {
        name: "AI Guru",
        title: "Your Intelligent AI Co-Pilot",
        description: "Equips teams with instant answers and guidance by tapping into your knowledge base in real time.",
        icon: "brain",
        color: "from-purple-500 to-purple-600",
        slug: "ai-guru"
      },
      {
        name: "AI Analytics",
        title: "AI Data-Driven Insights",
        description: "Transforms conversations into clear insights, helping you predict trends and optimise performance.",
        icon: "trending-up",
        color: "from-cyan-500 to-cyan-600",
        slug: "ai-analytics"
      },
      {
        name: "AI Voice",
        title: "Power Your Brand with AI Voice",
        description: "Delivers natural-sounding speech from text, creating more engaging and personalised experiences.",
        icon: "mic",
        color: "from-green-500 to-green-600",
        slug: "ai-voice"
      },
      {
        name: "Automatic Speech Recognition",
        title: "Never Miss a Word",
        description: "Accurately transcribes spoken interactions to streamline voice services and improve interaction routing.",
        icon: "audio-waveform",
        color: "from-orange-500 to-orange-600",
        slug: "automatic-speech-recognition"
      }
    ];

    // Real testimonials from ConnexAI website
    const testimonialData: InsertTestimonial[] = [
      {
        name: "Mbusiswa Nyuswa",
        title: "Chief Technology Officer",
        company: "",
        quote: "We've been using Jasmine AI for just over five years now, and I've never been so happy. They are an amazing technology partner to work with.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      {
        name: "Tim Murray",
        title: "Director of IT",
        company: "",
        quote: "The onboarding and programming team were able to help us in a very short 2-week turnaround to go live, where in other cases with vendors it took us six months.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      },
      {
        name: "Justin Freeman",
        title: "Chief Information Officer",
        company: "",
        quote: "If you're somebody that is looking for a complete AI cutting-edge solution I highly recommend Jasmine AI.",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
      },
      {
        name: "Gayle Cathey",
        title: "Director of Call Centre",
        company: "",
        quote: "The Jasmine AI support team has been fabulous. It is honestly, out of all my vendors and anyone I've dealt with, the best one.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b407?w=100&h=100&fit=crop&crop=face"
      },
      {
        name: "Ezequiel Negron",
        title: "Director of IT",
        company: "",
        quote: "I would definitely recommend Jasmine AI to other health care providers. I think it is a leading platform in this industry.",
        avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face"
      },
      {
        name: "Leo Lopez",
        title: "Chief Executive Officer",
        company: "",
        quote: "I think that Jasmine AI offers an exceptional balance of investment, ease of use, support and capabilities for its price point.",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face"
      }
    ];

    // Voice personas from ConnexAI
    const voicePersonaData: InsertVoicePersona[] = [
      {
        name: "Alexander",
        language: "English (UK)",
        tone: "Clear",
        personality: "Assertive",
        description: "Alexander is a clear and assertive AI Agent, delivering sharp, and deliberate advice with high energy and professionalism.",
        color: "from-indigo-500 to-indigo-600"
      },
      {
        name: "Dorothy",
        language: "English (UK)",
        tone: "Relaxed",
        personality: "Calm",
        description: "Dorothy provides a soothing and relaxed experience with calm, measured responses.",
        color: "from-pink-400 to-pink-600"
      },
      {
        name: "Archer",
        language: "English (UK)",
        tone: "Energetic",
        personality: "Caring",
        description: "Archer brings energy and care to every interaction with enthusiastic support.",
        color: "from-blue-400 to-blue-600"
      },
      {
        name: "Annette",
        language: "Spanish (ES)",
        tone: "Energetic",
        personality: "Joyful",
        description: "Annette delivers joyful and energetic assistance in Spanish with warmth.",
        color: "from-orange-400 to-orange-600"
      },
      {
        name: "Michael",
        language: "English (US)",
        tone: "Clear",
        personality: "Upbeat",
        description: "Michael provides clear and upbeat assistance with professional American English.",
        color: "from-green-400 to-green-600"
      },
      {
        name: "Aria",
        language: "English (US)",
        tone: "Patient",
        personality: "Slow",
        description: "Aria takes a patient and thoughtful approach with careful, deliberate responses.",
        color: "from-purple-400 to-purple-600"
      },
      {
        name: "Kyle",
        language: "English (ZA)",
        tone: "Friendly",
        personality: "Warm",
        description: "Kyle brings friendly warmth with a South African accent and approachable manner.",
        color: "from-teal-400 to-teal-600"
      }
    ];

    // Initialize products
    for (const product of productData) {
      await this.createProduct(product);
    }

    // Initialize testimonials
    for (const testimonial of testimonialData) {
      await this.createTestimonial(testimonial);
    }

    // Initialize voice personas
    for (const persona of voicePersonaData) {
      await this.createVoicePersona(persona);
    }
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id,
      company: insertTestimonial.company || null,
      avatar: insertTestimonial.avatar || null
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  // Voice Personas
  async getVoicePersonas(): Promise<VoicePersona[]> {
    return Array.from(this.voicePersonas.values());
  }

  async getVoicePersona(id: number): Promise<VoicePersona | undefined> {
    return this.voicePersonas.get(id);
  }

  async createVoicePersona(insertVoicePersona: InsertVoicePersona): Promise<VoicePersona> {
    const id = this.currentVoicePersonaId++;
    const persona: VoicePersona = { ...insertVoicePersona, id };
    this.voicePersonas.set(id, persona);
    return persona;
  }
}

export const storage = new MemStorage();
