/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Users, 
  Trophy, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  Clock, 
  Calendar,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

// --- Types ---
interface Program {
  title: string;
  description: string;
  image: string;
}

interface Trainer {
  name: string;
  role: string;
  image: string;
  ig: string;
}

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Plans', href: '#plans' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-red-900/30' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-red-600 p-1.5 rounded-sm transform group-hover:rotate-12 transition-transform">
            <Dumbbell className="text-white size-6" />
          </div>
          <span className="font-display text-2xl tracking-tighter text-white">ARES <span className="text-red-600">GYM</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium tracking-widest text-gray-400 hover:text-red-600 uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#join"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display text-white hover:text-red-600 uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#join"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-red-600 text-white px-10 py-3 rounded-sm text-lg font-bold uppercase tracking-widest"
            >
              Join Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, light = false }: { title: string; subtitle: string; light?: boolean }) => (
  <div className="mb-12 text-center md:text-left">
    <motion.p 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="text-red-600 font-mono text-sm tracking-[0.3em] uppercase mb-2"
    >
      {subtitle}
    </motion.p>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`text-5xl md:text-7xl font-display uppercase tracking-tighter ${light ? 'text-black' : 'text-white'}`}
    >
      {title}
    </motion.h2>
  </div>
);

export default function App() {
  const [bookingType, setBookingType] = useState('offline');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const programs: Program[] = [
    {
      title: "Strength Warfare",
      description: "Master the big lists. Powerlifting and olympic strength training for true warriors.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Functional Combat",
      description: "High-intensity athletic conditioning. Prepare your body for the variables of real world force.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Body Transformation",
      description: "Shed the weakness. Precision nutrition and hypertrophic training to rebuild your physique.",
      image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const trainers: Trainer[] = [
    {
      name: "Vikram 'The Beast' Singh",
      role: "Head Coach & Founder",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=600&auto=format&fit=crop",
      ig: "@vikram_ares"
    },
    {
      name: "Rohan Malhotra",
      role: "Strength Specialist",
      image: "https://images.unsplash.com/photo-1597347343908-2937e7dcc560?q=80&w=600&auto=format&fit=crop",
      ig: "@rohan_lifts"
    },
    {
      name: "Ananya Desai",
      role: "Performance Nutritionist",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop",
      ig: "@fit_ananya"
    }
  ];

  const plans = [
    { name: "Warrior Lite", price: "2,500", features: ["3 Days/Week", "Standard Gym Access", "Basic Assessment", "Water Station"], color: "gray" },
    { name: "Elite Warrior", price: "4,500", features: ["Unlimited Access", "Personalized Training App", "Nutritional Guide", "1 Guest Pass/Month"], featured: true },
    { name: "Ares Legend", price: "7,000", features: ["All Elite Features", "2 PT Sessions/Month", "Dedicated Locker", "Sauna & recovery access"], color: "silver" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-red-600 font-mono tracking-[0.4em] uppercase mb-4 text-sm md:text-base">
              Colaba, Mumbai • Elite Strength Hub
            </p>
            <h1 className="text-6xl md:text-9xl font-display uppercase tracking-tighter leading-[0.85] mb-8">
              Train Like A <motion.span 
                initial={{ color: "#fff" }}
                animate={{ color: "#dc2626" }}
                transition={{ duration: 1, delay: 0.5 }}
              >Warrior</motion.span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Ares Gym is not a fitness center. It&apos;s an iron chamber where limits are shattered. Join Mumbai&apos;s most elite community of strength seekers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#join" className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 text-lg font-bold uppercase tracking-widest flex items-center justify-center gap-2 group transition-all">
                Start Training <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#plans" className="border-2 border-white/20 hover:border-white hover:bg-white/10 text-white px-10 py-5 text-lg font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                View Plans
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 right-10 hidden lg:flex flex-col items-end gap-2"
        >
          <div className="flex items-center gap-2 text-red-600">
            <Star className="fill-current size-4" />
            <span className="font-mono text-sm uppercase">Rating 4.6/5.0</span>
          </div>
          <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">300+ Active Warriors</span>
        </motion.div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop" 
                alt="Gym Interior" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 rounded-sm"
              />
              <div className="absolute -bottom-8 -right-8 bg-red-600 p-8 hidden md:block">
                <p className="text-4xl font-display text-white">10+</p>
                <p className="text-xs font-mono uppercase tracking-widest">Years of Iron</p>
              </div>
            </motion.div>

            <div>
              <SectionHeader title="The Iron Temple" subtitle="Our Philosophy" />
              <div className="space-y-6 text-gray-400 text-lg">
                <p>
                  Located in the heart of Colaba, Ares Gym provides a raw, no-nonsense environment for those who take their physical potential seriously. We don&apos;t have fancy rows of glowing screens—we have calibrated plates, elite racks, and masters of the craft.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                  <div className="flex gap-4">
                    <div className="bg-red-900/20 p-2 h-fit text-red-600 border border-red-600/30">
                      <Trophy size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-wide mb-1">Elite Gear</h4>
                      <p className="text-sm">Eleiko & Rogue equipment for professional performance.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-red-900/20 p-2 h-fit text-red-600 border border-red-600/30">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-wide mb-1">Brotherhood</h4>
                      <p className="text-sm">Join a community that pushes you past your limits.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROGRAMS SECTION --- */}
      <section id="programs" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <SectionHeader title="Path To Power" subtitle="Our Specialty Programs" />
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-black aspect-[3/4]"
              >
                <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="text-2xl font-display uppercase tracking-tight mb-2 group-hover:text-red-500 transition-colors">{program.title}</h3>
                  <p className="text-gray-400 mb-6 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {program.description}
                  </p>
                  <a href="#join" className="text-sm font-bold uppercase tracking-widest text-red-600 flex items-center gap-2 group/btn">
                    Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRAINERS SECTION --- */}
      <section id="trainers" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <SectionHeader title="Master Coaches" subtitle="Expert Guidance" />
            <a href="#join" className="text-red-600 border-b border-red-600 pb-1 mb-1 font-bold uppercase tracking-widest hover:text-white hover:border-white transition-colors">
              Book a PT Session
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {trainers.map((trainer, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, filter: 'grayscale(1)' }}
                whileInView={{ opacity: 1, filter: 'grayscale(0)' }}
                className="text-center group"
              >
                <div className="relative mb-6 overflow-hidden aspect-square">
                  <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 border-[1rem] border-transparent group-hover:border-red-600/20 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-display uppercase tracking-tight mb-1">{trainer.name}</h3>
                <p className="text-red-600 font-mono text-xs uppercase tracking-widest mb-4">{trainer.role}</p>
                <div className="flex justify-center gap-4 text-gray-500 group-hover:text-white transition-colors">
                  <a href="#" className="hover:text-red-600 transition-colors"><Instagram size={20} /></a>
                  <a href="#" className="hover:text-red-600 transition-colors"><Facebook size={20} /></a>
                  <span className="text-[10px] font-mono mt-1">{trainer.ig}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GALLERY / TRANSFORMATION --- */}
      <section id="gallery" className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <SectionHeader title="Warrior Results" subtitle="Success Stories" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1574673139762-c1488b5840ca?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop"
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 0.98 }}
                className="overflow-hidden aspect-square bg-black cursor-pointer border border-white/5"
              >
                <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MEMBERSHIP PLANS --- */}
      <section id="plans" className="py-24 bg-black relative">
        <div className="container mx-auto px-6">
          <SectionHeader title="Forge Your Future" subtitle="Membership Tiers" />
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 border-2 relative overflow-hidden flex flex-col h-full ${
                  plan.featured ? 'border-red-600 bg-red-950/10' : 'border-zinc-800 bg-zinc-950'
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-4 right-[-35px] bg-red-600 text-white text-[10px] font-bold py-1 w-[120px] text-center transform rotate-45 uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <h3 className="text-3xl font-display uppercase mb-4">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-sm font-mono text-gray-400 mb-2">₹</span>
                  <span className="text-5xl font-display">{plan.price}</span>
                  <span className="text-sm font-mono text-gray-400 mb-2">/Month</span>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-gray-400 text-sm">
                      <CheckCircle2 size={16} className="text-red-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#join"
                  className={`w-full py-4 text-center font-bold uppercase tracking-widest transition-all ${
                    plan.featured ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOOKING SECTION --- */}
      <section id="booking" className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-black border border-red-600/30 p-8 md:p-12">
            <SectionHeader title="Online Booking" subtitle="Book Your Spot" />
            
            <div className="flex gap-4 mb-8 p-1 bg-zinc-900 rounded-sm">
              <button 
                onClick={() => setBookingType('offline')}
                className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest transition-all ${bookingType === 'offline' ? 'bg-red-600 text-white' : 'text-gray-500 hover:text-white'}`}
              >
                Gym Visit
              </button>
              <button 
                onClick={() => setBookingType('online')}
                className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest transition-all ${bookingType === 'online' ? 'bg-red-600 text-white' : 'text-gray-500 hover:text-white'}`}
              >
                Online Class
              </button>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-20 text-center"
                >
                  <div className="inline-flex items-center justify-center size-20 rounded-full bg-red-600 mb-6">
                    <CheckCircle2 size={40} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-display uppercase mb-2">Booking Received</h3>
                  <p className="text-gray-400">A warrior from our team will contact you shortly.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid md:grid-cols-2 gap-6" 
                  onSubmit={handleBookingSubmit}
                >
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-red-600 uppercase tracking-widest">Full Name</label>
                    <input required type="text" className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-red-600 outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-red-600 uppercase tracking-widest">WhatsApp Number</label>
                    <input required type="tel" className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-red-600 outline-none transition-colors" placeholder="+91 98XXX XXXXX" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-red-600 uppercase tracking-widest">Date</label>
                    <input required type="date" className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-red-600 outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-red-600 uppercase tracking-widest">Preferred Time</label>
                    <select className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-red-600 outline-none transition-colors">
                      <option>Morning (6AM - 10AM)</option>
                      <option>Noon (11AM - 3PM)</option>
                      <option>Evening (4PM - 10PM)</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-900 text-white py-5 font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? 'Processing...' : `Confirm ${bookingType === 'online' ? 'Class' : 'Visit'}`} <Calendar size={18} />
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-black overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 hidden lg:block opacity-5">
           <Dumbbell className="size-[400px] text-white" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader title="Warrior Words" subtitle="Testimonials" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Rahul S.", text: "Best gym in Colaba. No fancy distractions, just pure heavy weights and the right atmosphere for deep Focus.", rating: 5 },
              { name: "Jessica K.", text: "The cross-training functional program completely changed my athletic performance. Trainers here are actual masters.", rating: 4 },
              { name: "Aman V.", text: "Transformation journey started 6 months ago, down 15kg and up 10kg muscle. Coaches are brutal but effective.", rating: 5 }
            ].map((t, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-zinc-900 p-8 border-l-4 border-red-600"
              >
                <div className="flex gap-1 text-red-600 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-400 italic mb-6 leading-relaxed">&quot;{t.text}&quot;</p>
                <p className="text-white font-bold uppercase tracking-widest text-sm">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT & MAP --- */}
      <section id="contact" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <SectionHeader title="Contact Us" subtitle="Get In Touch" />
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="text-red-600 flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold uppercase tracking-tight text-sm mb-1">Location</p>
                    <p className="text-gray-400 text-sm">Shop No. 4, Ocean View Building, Colaba Causeway, Mumbai - 400005</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-red-600 flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold uppercase tracking-tight text-sm mb-1">Phone</p>
                    <p className="text-gray-400 text-sm">+91 98675 86790</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-red-600 flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold uppercase tracking-tight text-sm mb-1">Hours</p>
                    <p className="text-gray-400 text-sm">Mon - Sat: 5:00 AM - 11:00 PM</p>
                    <p className="text-gray-400 text-sm">Sun: 7:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">Social Media</p>
                <div className="flex gap-4">
                  <a href="#" className="bg-zinc-900 hover:bg-red-600 p-3 text-white transition-colors duration-300">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-zinc-900 hover:bg-red-600 p-3 text-white transition-colors duration-300">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 h-[500px] grayscale hover:grayscale-0 transition-all duration-700 border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15093.812294116499!2d72.825!3d18.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c2ec443b77%3A0x6e0e0f316e6f4a8e!2sColaba%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713955000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* --- JOIN FORM --- */}
      <section id="join" className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto border-t-8 border-red-600 bg-zinc-950 p-12 shadow-2xl">
            <h2 className="text-5xl font-display uppercase mb-6 tracking-tighter">Become A Legend</h2>
            <p className="text-gray-400 mb-12 text-lg">Leave your details below and a coach will contact you for a free 3-day guest pass and physical assessment.</p>
            <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="flex-1 bg-zinc-900 border border-zinc-800 p-5 focus:border-red-600 outline-none transition-colors" />
              <input type="email" placeholder="Email Address" className="flex-1 bg-zinc-900 border border-zinc-800 p-5 focus:border-red-600 outline-none transition-colors" />
              <button className="bg-red-600 text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-red-700 transition-colors">Apply Now</button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 p-1 rounded-sm">
              <Dumbbell className="text-white size-4" />
            </div>
            <span className="font-display text-xl tracking-tighter text-white">ARES <span className="text-red-600">GYM</span></span>
          </div>
          <p className="text-gray-500 text-xs font-mono uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Ares Gym Colaba. All rights reserved. Built for Warriors.
          </p>
          <div className="flex gap-6 text-gray-500 font-mono text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      {/* --- WHATSAPP BUTTON --- */}
      <a 
        href="https://wa.me/919867586790" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat With Us
        </span>
      </a>
    </div>
  );
}
