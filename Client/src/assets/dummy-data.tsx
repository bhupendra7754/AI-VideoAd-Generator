import { UploadIcon, VideoIcon, ZapIcon } from "lucide-react";

export const featuresData = [
  {
    icon: <UploadIcon className="w-6 h-6" />,
    title: "Smart Upload",
    desc: "Drag and drop your assets.we auto-optimize formats and sizes.",
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    title: "Instant Generation",
    desc: "Optimized models deliver output in seconds with great fidelity.",
  },
  {
    icon: <VideoIcon className="w-6 h-6" />,
    title: "Video synthesis",
    desc: "Bring product images to life with dynamic video ads.",
  },
];

export const plansData = [
  {
    id: "starter",
    name: "Starter",
    price: "$10",
    desc: "Try the plateform at no cost.",
    credits: "25",
    features: [
      "25 Creadits",
      "Standard quality",
      "No watermark",
      "Slower generation speed",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29",
    desc: "Creators & small teams.",
    credits: "80",
    features: [
      "80 Credits",
      "High quality",
      "No watermark",
      "Faster generation speed",
      "Priority email support",
    ],
    popular: true,
  },
  {
    id: "ultra",
    name: "Ultra",
    price: "$99",
    desc: "Scale across teams and guidance ",
    credits: "300",
    features: [
      "300 Credits",
      "Premium quality",
      "No watermark",
      "Fastest generation speed",
      "Dedicated support",
    ],
  },
];

export const faqData = [
  {
    question: "How does Ai generation work?",
    answer:
      "AI generation works by turning your input into a complete video ad using trained AI models that create scripts, visuals, scenes, and voiceovers automatically.",
  },
  {
    question: 'Who can use the AI Video Ad Generator?',
    answer: 'Our platform is built for startups, businesses, marketers, and creators of all sizes. Anyone can generate professional video ads with ease.'
},
  {
    question: "How long does it take to generate a video ad?",
    answer:
      "Most video ads are generated within a few minutes, depending on the complexity and customization options selected.",
  },
  {
    question: "Can I edit or regenerate the video after creation?",
    answer:
      "Yes. You can easily edit text, visuals, styles, and regenerate the video instantly until it fits your needs.",
  },
  {
    question: "Are the videos ready for social media platforms?",
    answer:
      "Absolutely. All generated video ads are optimized for platforms like Instagram, YouTube, Facebook, and other social channels.",
  },
  {
    question: "Do I need any video editing experience?",
    answer:
      "No. The entire process is automated and user-friendly, so no prior editing or technical skills are required.",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", url: "#" },
      { name:  "features", url: "#" },
      { name: "Pricing", url: "#" },
      { name: "FAQ", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Twitter", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "GitHub", url: "#" },
    ],
  },
];
