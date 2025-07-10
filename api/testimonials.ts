import { VercelRequest, VercelResponse } from '@vercel/node';

const testimonials = [
  {
    id: 1,
    name: "Mbusiswa Nyuswa",
    title: "Chief Technology Officer",
    company: "",
    quote: "We've been using Jasmine AI for just over five years now, and I've never been so happy. They are an amazing technology partner to work with.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Tim Murray",
    title: "VP of Customer Experience",
    company: "",
    quote: "The results we've seen with Jasmine AI have been outstanding. Our customer satisfaction scores have improved dramatically.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Justin Freeman",
    title: "Chief Information Officer",
    company: "",
    quote: "If you're somebody that is looking for a complete AI cutting-edge solution I highly recommend Jasmine AI.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Gayle Cathey",
    title: "Director of Call Centre",
    company: "",
    quote: "The Jasmine AI support team has been fabulous. It is honestly, out of all my vendors and anyone I've dealt with, the best one.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b407?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Ezequiel Negron",
    title: "Director of IT",
    company: "",
    quote: "I would definitely recommend Jasmine AI to other health care providers. I think it is a leading platform in this industry.",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Leo Lopez",
    title: "Chief Executive Officer",
    company: "",
    quote: "I think that Jasmine AI offers an exceptional balance of investment, ease of use, support and capabilities for its price point.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face"
  }
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    
    if (id) {
      const testimonial = testimonials.find(t => t.id === parseInt(id as string));
      if (testimonial) {
        res.status(200).json(testimonial);
      } else {
        res.status(404).json({ error: 'Testimonial not found' });
      }
    } else {
      res.status(200).json(testimonials);
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}