import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import {
  MapPin,
  Scale,
  Phone,
  BarChart3,
  Heart,
  Users,
  AlertTriangle,
  ChevronDown,
  ArrowRight,
  Check,
  X,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

// Custom Arc Radius Logo Component - Rainbow circle with map pin
const ArcRadiusLogo = ({
  size = 36,
  className = '',
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Rainbow circle arcs - Pride flag colors */}
    <circle
      cx="50"
      cy="50"
      r="46"
      stroke="#E40303"
      strokeWidth="8"
      strokeDasharray="48 240"
      strokeDashoffset="0"
      strokeLinecap="round"
    />
    <circle
      cx="50"
      cy="50"
      r="46"
      stroke="#FF8C00"
      strokeWidth="8"
      strokeDasharray="48 240"
      strokeDashoffset="-48"
      strokeLinecap="round"
    />
    <circle
      cx="50"
      cy="50"
      r="46"
      stroke="#FFED00"
      strokeWidth="8"
      strokeDasharray="48 240"
      strokeDashoffset="-96"
      strokeLinecap="round"
    />
    <circle
      cx="50"
      cy="50"
      r="46"
      stroke="#008026"
      strokeWidth="8"
      strokeDasharray="48 240"
      strokeDashoffset="-144"
      strokeLinecap="round"
    />
    <circle
      cx="50"
      cy="50"
      r="46"
      stroke="#24408E"
      strokeWidth="8"
      strokeDasharray="48 240"
      strokeDashoffset="-192"
      strokeLinecap="round"
    />
    <circle
      cx="50"
      cy="50"
      r="46"
      stroke="#732982"
      strokeWidth="8"
      strokeDasharray="48 240"
      strokeDashoffset="-240"
      strokeLinecap="round"
    />

    {/* Map pin icon in center */}
    <path
      d="M50 25C40.059 25 32 32.835 32 42.5C32 55.625 50 75 50 75C50 75 68 55.625 68 42.5C68 32.835 59.941 25 50 25ZM50 49C46.134 49 43 45.866 43 42C43 38.134 46.134 35 50 35C53.866 35 57 38.134 57 42C57 45.866 53.866 49 50 49Z"
      fill="#2D3436"
    />
  </svg>
);

// Smaller logo variant for nav
const ArcRadiusLogoSmall = ({ size = 32 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Rainbow circle arcs */}
    <circle
      cx="50"
      cy="50"
      r="44"
      stroke="#E40303"
      strokeWidth="10"
      strokeDasharray="46 230"
      strokeDashoffset="0"
      strokeLinecap="round"
    />
    <circle
      cx="50"
      cy="50"
      r="44"
      stroke="#FF8C00"
      strokeWidth="10"
      strokeDasharray="46 230"
      strokeDashoffset="-46"
      strokeLinecap="round"
    />
    <circle
      cx="50"
      cy="50"
      r="44"
      stroke="#FFED00"
      strokeWidth="10"
      strokeDasharray="46 230"
      strokeDashoffset="-92"
      strokeLinecap="round"
    />
    <circle
      cx="50"
      cy="50"
      r="44"
      stroke="#008026"
      strokeWidth="10"
      strokeDasharray="46 230"
      strokeDashoffset="-138"
      strokeLinecap="round"
    />
    <circle
      cx="50"
      cy="50"
      r="44"
      stroke="#24408E"
      strokeWidth="10"
      strokeDasharray="46 230"
      strokeDashoffset="-184"
      strokeLinecap="round"
    />
    <circle
      cx="50"
      cy="50"
      r="44"
      stroke="#732982"
      strokeWidth="10"
      strokeDasharray="46 230"
      strokeDashoffset="-230"
      strokeLinecap="round"
    />

    {/* Map pin */}
    <path
      d="M50 25C40.059 25 32 32.835 32 42.5C32 55.625 50 75 50 75C50 75 68 55.625 68 42.5C68 32.835 59.941 25 50 25ZM50 49C46.134 49 43 45.866 43 42C43 38.134 46.134 35 50 35C53.866 35 57 38.134 57 42C57 45.866 53.866 49 50 49Z"
      fill="#2D3436"
    />
  </svg>
);

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  tech: string;
};

type Stat = {
  value: string;
  label: string;
  highlight: boolean;
};

type Competitor = {
  name: string;
  resources: boolean;
  policy: boolean;
  crisis: boolean;
  highlight?: boolean;
};

export default function ArcRadiusShowcase(): React.ReactElement {
  const [scrollY, setScrollY] = useState<number>(0);
  const [activeFeature, setActiveFeature] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats: Stat[] = [
    {
      value: '39%',
      label: 'seriously considered suicide in the past year',
      highlight: true,
    },
    {
      value: '50%',
      label: 'unable to access desired mental health care',
      highlight: false,
    },
    {
      value: '530+',
      label: 'anti-LGBTQ+ bills proposed in 2024',
      highlight: false,
    },
    {
      value: '28%',
      label: 'of youth mental health facilities offer LGBTQ-specific services',
      highlight: true,
    },
  ];

  const features: Feature[] = [
    {
      icon: MapPin,
      title: 'Arc Radius Map',
      description:
        'Location-based discovery of LGBTQ+-affirming healthcare providers, mental health services, community centers, and safe spaces within a configurable radius.',
      color: 'from-rose-400 to-orange-400',
      tech: 'Geospatial Analysis • Recommendation Systems',
    },
    {
      icon: Scale,
      title: 'Policy Navigator',
      description:
        'NLP-powered Q&A interface for asking questions about local laws in plain language. Real-time legislative tracking with personalized alerts.',
      color: 'from-teal-400 to-cyan-400',
      tech: 'LegalBERT • RAG Pipeline • Semantic Search',
    },
    {
      icon: Phone,
      title: 'Crisis Connect',
      description:
        'Integrated connections to Trevor Project, Trans Lifeline, and other crisis resources with warm handoffs based on user needs assessment.',
      color: 'from-amber-400 to-yellow-400',
      tech: 'Multi-label Classification • Intake Routing',
    },
    {
      icon: BarChart3,
      title: 'Policy Dashboard',
      description:
        'Visualizations comparing state/city policy environments, trend analysis, and actionable information on civic engagement opportunities.',
      color: 'from-emerald-400 to-teal-400',
      tech: 'Time-series Analysis • Sentiment Classification',
    },
  ];

  const techniques: { name: string; desc: string }[] = [
    {
      name: 'NLP / LegalBERT',
      desc: 'Bill classification and plain-language summarization',
    },
    {
      name: 'RAG Pipeline',
      desc: 'Grounded responses with citations via semantic search',
    },
    {
      name: 'Geospatial Analysis',
      desc: 'Location-based resource filtering and discovery',
    },
    {
      name: 'Sentiment Analysis',
      desc: 'Track legislative trajectory and emerging threats',
    },
    {
      name: 'Multi-label Classification',
      desc: 'Match user needs to appropriate services',
    },
  ];

  const competitors: Competitor[] = [
    { name: 'Trevor Project', resources: true, policy: false, crisis: true },
    { name: 'Findhelp', resources: true, policy: false, crisis: false },
    { name: 'MAP Equality', resources: false, policy: true, crisis: false },
    {
      name: 'Arc Radius',
      resources: true,
      policy: true,
      crisis: true,
      highlight: true,
    },
  ];

  const techStack: { category: string; items: string[] }[] = [
    {
      category: 'Frontend',
      items: ['React Native', 'React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['FastAPI', 'Python', 'PostgreSQL', 'pgvector'],
    },
    {
      category: 'AI/ML',
      items: ['LegalBERT', 'LangChain', 'LlamaIndex', 'Transformers'],
    },
    {
      category: 'Infrastructure',
      items: ['AWS EKS', 'Docker', 'Kubernetes', 'S3'],
    },
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-orange-50 via-rose-50 to-sky-50 min-h-screen text-slate-800 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          scrollY > 50
            ? 'bg-white/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ArcRadiusLogoSmall size={36} />
            <span className="font-bold text-xl tracking-tight">Arc Radius</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a
              href="#problem"
              className="hover:text-slate-900 transition-colors"
            >
              Problem
            </a>
            <a
              href="#solution"
              className="hover:text-slate-900 transition-colors"
            >
              Solution
            </a>
            <a href="#tech" className="hover:text-slate-900 transition-colors">
              Technology
            </a>
            <a href="#about" className="hover:text-slate-900 transition-colors">
              About
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-rose-200/40 to-orange-200/40 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-200/40 to-cyan-200/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-slate-600 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            UC Berkeley MIDS • W210 Capstone Project
          </div>

          {/* Large centered logo */}
          <div className="mb-8 flex justify-center">
            <ArcRadiusLogo size={140} className="drop-shadow-lg" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
            Arc Radius
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            An AI-powered platform helping LGBTQ+ youth discover affirming
            resources, understand their rights, and connect to crisis support.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#solution"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300"
            >
              Explore Solution
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#tech"
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-slate-700 px-6 py-3 rounded-full font-semibold hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              View Tech Stack
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'NLP',
              'LegalBERT',
              'RAG',
              'Geospatial',
              'FastAPI',
              'React Native',
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-600 border border-slate-200/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-slate-400" />
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-rose-100 text-rose-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              The Problem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A Mental Health Crisis
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              LGBTQ+ youth in the United States face unprecedented challenges.
              The data from The Trevor Project's 2024 National Survey paints a
              stark picture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default ${
                  stat.highlight
                    ? 'bg-gradient-to-br from-rose-500 to-orange-500 text-white'
                    : 'bg-white shadow-sm hover:shadow-lg'
                }`}
              >
                <div
                  className={`text-4xl font-bold mb-2 ${
                    stat.highlight ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {stat.value}
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    stat.highlight ? 'text-white/90' : 'text-slate-600'
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="text-amber-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">The Core Problem</h3>
                <p className="text-slate-600 leading-relaxed">
                  LGBTQ+ youth lack a unified, intelligent platform that
                  combines local resource discovery with real-time policy
                  awareness and crisis support connections. Current solutions
                  are fragmented across multiple apps, websites, and
                  organizations.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <Heart className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-semibold mb-1">Healthcare Gap</div>
                  <p className="text-sm text-slate-600">
                    50% who wanted mental health care couldn't access it
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Scale className="text-teal-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-semibold mb-1">Policy Chaos</div>
                  <p className="text-sm text-slate-600">
                    375+ active anti-LGBTQ bills across 43+ states
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users
                  className="text-amber-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <div className="font-semibold mb-1">Family Impact</div>
                  <p className="text-sm text-slate-600">
                    45% of trans youth families considered relocating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section
        id="solution"
        className="py-24 px-6 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              The Solution
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Introducing Arc Radius
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A unified AI-powered platform for LGBTQ+ youth ages 13-24 to
              discover affirming resources, understand their legal rights, and
              connect to crisis support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default"
                onMouseEnter={() => setActiveFeature(i)}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-sm font-medium text-slate-400">
                  {feature.tech}
                </div>
              </div>
            ))}
          </div>

          {/* Competitive Analysis */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Market Gap Analysis
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-4 font-semibold text-slate-600">
                      Platform
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-slate-600">
                      Resource Discovery
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-slate-600">
                      Policy Tracking
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-slate-600">
                      Crisis Support
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((comp, i) => (
                    <tr
                      key={i}
                      className={`border-b border-slate-100 ${
                        comp.highlight
                          ? 'bg-gradient-to-r from-rose-50 to-orange-50'
                          : ''
                      }`}
                    >
                      <td
                        className={`py-4 px-4 font-semibold flex items-center gap-2 ${
                          comp.highlight ? 'text-rose-600' : ''
                        }`}
                      >
                        {comp.highlight && <ArcRadiusLogoSmall size={24} />}
                        <span>{comp.name}</span>
                      </td>
                      <td className="text-center py-4 px-4">
                        {comp.resources ? (
                          <Check
                            className="inline text-emerald-500"
                            size={20}
                          />
                        ) : (
                          <X className="inline text-slate-300" size={20} />
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {comp.policy ? (
                          <Check
                            className="inline text-emerald-500"
                            size={20}
                          />
                        ) : (
                          <X className="inline text-slate-300" size={20} />
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {comp.crisis ? (
                          <Check
                            className="inline text-emerald-500"
                            size={20}
                          />
                        ) : (
                          <X className="inline text-slate-300" size={20} />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-slate-500 mt-6 text-sm">
              Arc Radius is the only platform combining all three critical
              functions in a unified experience.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Technology
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Data Science Techniques
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Leveraging state-of-the-art NLP, retrieval-augmented generation,
              and geospatial analysis to deliver accurate, personalized support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {techniques.map((tech, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white font-bold mb-4">
                  {i + 1}
                </div>
                <h4 className="font-bold mb-2">{tech.name}</h4>
                <p className="text-sm text-slate-600">{tech.desc}</p>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Technical Architecture
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techStack.map((stack, i) => (
                <div key={i}>
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    {stack.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className="bg-white/10 px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the Creator
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-rose-400 via-orange-400 to-amber-400 flex items-center justify-center flex-shrink-0">
                <span className="text-4xl font-bold text-white">AQ</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Ambro Quach</h3>
                <p className="text-slate-600 mb-4">
                  UC Berkeley MIDS Candidate
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  CS graduate from UCSD with experience as a SWE at Shell Green
                  Energy. Background in full-stack development, DevOps, and
                  machine learning at scale. Passionate about projects
                  integrating AI applications with social impact and ethical
                  safeguards.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    'Algorithmic Fairness',
                    'Privacy by Design',
                    'Legal AI',
                    'Bias Detection',
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="bg-slate-100 px-3 py-1 rounded-full text-sm font-medium text-slate-600"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                  >
                    <Github size={20} className="text-slate-600" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                  >
                    <Linkedin size={20} className="text-slate-600" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                  >
                    <Mail size={20} className="text-slate-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-slate-500 text-sm">
            <p>
              Relevant Coursework: W231 Behind the Data • W255 ML Systems
              Engineering • W261 ML at Scale
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <ArcRadiusLogoSmall size={32} />
              <span className="font-bold">Arc Radius</span>
            </div>
            <p className="text-slate-400 text-sm">
              UC Berkeley MIDS W210 Capstone Project • 2025
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Documentation
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('app')!).render(<ArcRadiusShowcase />);
