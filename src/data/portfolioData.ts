/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  THE ONLY FILE YOU NEED TO EDIT FOR TEXT CONTENT             ║
 * ║  (images live in /public – see README.md)                    ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'Gowshik Raj I', // shown in navbar, footer, hero, about
  pageTitle: 'Gowshik Raj I – Full Stack Developer', // browser tab title
  role: 'Full Stack Developer', // footer subtitle
  email: 'gowshik923@gmail.com',
  // digits only, with country code, no + or spaces (e.g. 919876543210)
  phone: '916379461979',
  whatsappMessage: 'Hi, I visited your portfolio and would like to get in touch.',
  available: true,
};

/* ───────────── 2. HERO (top of page) ───────────── */
export const HERO = {
  eyebrow: 'FULL STACK DEVELOPER • WEB & IOT SOLUTIONS',
  headline: 'GOWSHIK RAJ I', // big text, use CAPS
  roles: ['FULL STACK DEVELOPER', 'IT UNDERGRADUATE'] as [string, string],
  tagline: 'I build practical web applications and clean, responsive interfaces that solve real-world problems.',
  primaryButton: 'EXPLORE MY WORK',
  secondaryButton: 'Get In Touch',
  image: '/assets/hero-red-bg.jpg', // 1920x1080, subject on the RIGHT side
  imageAlt: 'Portrait of Gowshik Raj I',
  imagePosition: '69% center', // CSS object-position fallback
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: 'TURNING IDEAS INTO INNOVATIVE DIGITAL SOLUTIONS THROUGH CODE.',
  redWords: ['INNOVATIVE', 'CODE'], // words highlighted in red
};

/* ───────────── 4. ABOUT ───────────── */
export const ABOUT = {
  eyebrow: 'Full Stack Developer · Information Technology · Problem Solver',
  portrait: '/media/profile.webp', // 4:5 portrait photo
  portraitAlt: 'Portrait of Gowshik Raj I',
  portraitCaption: 'Full Stack Developer', // small red text under the name on the photo
  paragraphs: [
    'I am an Information Technology undergraduate at Velammal Engineering College, focused on full stack development and software engineering. I build practical web applications, interactive interfaces and technology-driven solutions for real-world problems.',
    'I care about reliable, user-friendly software and I keep learning new technologies to build it better. My work spans web apps, backend APIs, IoT systems and Android prototypes.',
  ],
  technologies: [
    'Java Programming',
    'React & Frontend Development',
    'JavaScript & TypeScript',
    'HTML & CSS',
    'SQL & Database Management',
    'Git & GitHub',
  ],
  focus: ['Full Stack Web Development', 'Frontend Development', 'Backend Development & API Integration'],
};

/* ───────────── 5. SOCIAL LINKS (footer) ───────────── */
export const SOCIALS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/GOWSHIKRAJ' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/gowshik-raj-89a053302/' },
] as const;

/* ───────────── 6. TECHNICAL SKILLS (6 cards look best) ───────────── */
export const SKILL_CARDS: { name: string; category: string; level: string }[] = [
  { name: 'Java Programming', category: 'Java', level: 'Proficient' },
  { name: 'React & Frontend Development', category: 'React · Next.js · Tailwind CSS', level: 'Proficient' },
  { name: 'JavaScript & TypeScript', category: 'JavaScript · TypeScript · Express.js', level: 'Proficient' },
  { name: 'HTML & CSS', category: 'HTML5 · CSS3 · Responsive Design', level: 'Proficient' },
  { name: 'SQL & Database Management', category: 'SQL · SQLite · Supabase', level: 'Proficient' },
  { name: 'Git & GitHub', category: 'Git · GitHub · Version Control', level: 'Proficient' },
];

/* ───────────── 6b. TECH STACK STRIP (logos under the skills) ─────────────
 * Use names with a built-in logo: React, JavaScript, Python, FastAPI, PostgreSQL,
 * Supabase, SQLite, Three.js, GSAP. Any other name still shows as a lettered badge. */
export const TECH_STACK: string[] = [
  'Java',
  'JavaScript',
  'TypeScript',
  'React',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Flask',
  'Express.js',
  'Next.js',
  'Supabase',
  'SQLite',
  'SQL',
  'Android',
  'ESP32',
  'MQTT',
  'Git',
  'GitHub',
];

/* ───────────── 7. PROJECTS ─────────────
 * Thumbnails: put project-<n>-1.jpg, -2.jpg, -3.jpg in /public/assets/thumbnails/
 * (card cycles through 1-3). Set poster to the "-1.jpg" file.
 * Add liveUrl / repoUrl to show "View Live" / "View Code" buttons.
 * 6 or 9 projects fill the 3D grid best.
 * NOTE: TrustTrap and Tripora tags are placeholders – replace them with each project's actual tech stack. */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'secureflux-banking',
    kind: 'software',
    title: 'SecureFlux Banking',
    subtitle: 'Secure digital banking with a privacy-focused architecture',
    category: 'Fintech',
    poster: '/assets/thumbnails/project-1-1.jpg',
    description:
      'A secure banking application with authentication and privacy-focused financial operations. I built the interface and integrated the backend with Supabase.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    liveUrl: 'https://secure-flux-banking.vercel.app/',
    repoUrl: 'https://github.com/GOWSHIKRAJ/SecureFlux-Banking',
  },
  {
    id: 'trusttrap',
    kind: 'software',
    title: 'TrustTrap',
    subtitle: 'Building a safer digital environment',
    category: 'Cybersecurity',
    poster: '/assets/thumbnails/project-2-1.jpg',
    description:
      'A cybersecurity-focused web application that addresses digital trust and online safety. I designed and built it to help users stay protected online.',
    tags: ['Cybersecurity', 'Web App', 'Vercel'],
    liveUrl: 'https://trusttrap.vercel.app',
    repoUrl: 'https://github.com/GOWSHIKRAJ/trusttrap',
  },
  {
    id: 'eb-fallen-wire-system',
    kind: 'software',
    title: 'EB-FALLEN-WIRE-SYSTEM',
    subtitle: 'Real-time electric line fault detection and monitoring',
    category: 'IoT',
    poster: '/assets/thumbnails/project-3-1.jpg',
    description:
      'An IoT system that detects electrical line faults, monitors them in real time and triggers an automated power cut-off. I built the full pipeline from the ESP32 device to the live dashboard.',
    tags: ['ESP32', 'Express.js', 'Socket.IO', 'MQTT', 'HiveMQ', 'Next.js'],
    liveUrl: 'https://eb-fallen-wire-system.vercel.app/',
    repoUrl: 'https://github.com/GOWSHIKRAJ/eb-fallen-wire-system',
  },
  {
    id: 'ai-resume-screener',
    kind: 'software',
    title: 'AI Resume Screener',
    subtitle: 'Intelligent resume screening and candidate analysis',
    category: 'Web Application',
    poster: '/assets/thumbnails/project-4-1.jpg',
    description:
      'A web application that analyzes uploaded resumes and screens candidates against selected job roles. Results appear in an interactive dashboard.',
    tags: ['Python', 'Flask', 'SQLite', 'PyPDF2', 'Chart.js'],
    liveUrl: 'https://ai-resume-screening-portal.vercel.app',
    repoUrl: 'https://github.com/GOWSHIKRAJ/ai-resume-screening-portal',
  },
  {
    id: 'tripora',
    kind: 'software',
    title: 'Tripora',
    subtitle: 'Your smart travel planning companion',
    category: 'Web Application',
    poster: '/assets/thumbnails/project-5-1.jpg',
    description:
      'A travel planning web application that helps users explore destinations and organize their trips in one place.',
    tags: ['Travel Planning', 'Web App', 'Vercel'],
    liveUrl: 'https://tripora-sooty-mu.vercel.app/',
    repoUrl: 'https://github.com/GOWSHIKRAJ/Tripora',
  },
  {
    id: 'morphed-image-detection',
    kind: 'software',
    title: 'Morphed Image Detection',
    subtitle: 'Detecting manipulated images using image processing',
    category: 'Mobile & Image Processing',
    poster: '/assets/thumbnails/project-6-1.jpg',
    description:
      'An offline Android prototype that detects morphed or tampered images straight from the device gallery using image processing. It reached about 85–90% detection accuracy in prototype testing.',
    tags: ['Android', 'Java/Kotlin', 'OpenCV', 'Image Processing'],
    repoUrl: 'https://github.com/GOWSHIKRAJ/morph-image-detection',
  },
];

/* ───────────── 8. SERVICES & PRICING ───────────── */
export const SERVICES_PRICING = [
  { id: 'service-1', title: 'Responsive Website Development', priceLabel: 'Pricing', price: 5000, featured: true },
  { id: 'service-2', title: 'Portfolio Website Development', priceLabel: 'Pricing', price: 4000, featured: false },
  { id: 'service-3', title: 'Frontend Development', priceLabel: 'Pricing', price: 3000, featured: false },
  { id: 'service-4', title: 'Backend & API Development', priceLabel: 'Pricing', price: 5000, featured: false },
  { id: 'service-5', title: 'Database Integration', priceLabel: 'Pricing', price: 3000, featured: false },
] as const;

/* ───────────── 9. HEADLINE NUMBERS (under hero) ───────────── */
export const CLIENT_STATS = [
  { id: 'stat-1', value: 6, suffix: '', label: 'Projects Built' },
  { id: 'stat-2', value: 20, suffix: '+', label: 'Technologies' },
  { id: 'stat-3', value: 5, suffix: '', label: 'Services' },
] as const;

/* Derived – do not edit */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;