/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  ChevronRight, 
  Zap, 
  Shield, 
  Cpu, 
  Gauge, 
  Wind, 
  Battery, 
  Navigation,
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CAR_IMAGE_HERO = "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop";
const CAR_IMAGE_SIDE = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop";
const CAR_IMAGE_INTERIOR = "https://images.unsplash.com/photo-1542362567-b055002b9134?q=80&w=2070&auto=format&fit=crop";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-black rotate-45" />
            </div>
            <span className="font-display font-bold text-xl tracking-tighter">AURA</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#performance" className="hover:text-white transition-colors">Performance</a>
            <a href="#design" className="hover:text-white transition-colors">Design</a>
            <a href="#technology" className="hover:text-white transition-colors">Technology</a>
            <a href="#specs" className="hover:text-white transition-colors">Specifications</a>
          </div>

          <div className="hidden md:block">
            <Button variant="outline" className="rounded-full border-white/20 hover:bg-white hover:text-black transition-all">
              Reserve Now
            </Button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-20 left-6 right-6 glass rounded-2xl p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#performance" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Performance</a>
            <a href="#design" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Design</a>
            <a href="#technology" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Technology</a>
            <a href="#specs" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Specifications</a>
            <Button className="w-full rounded-full">Reserve Now</Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, y: heroY }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={CAR_IMAGE_HERO} 
            alt="Aura Supercar" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="outline" className="mb-6 border-white/20 text-white/60 px-4 py-1 rounded-full uppercase tracking-widest text-[10px]">
              The Future of Performance
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.85]"
          >
            AURA <span className="text-white/30">GENESIS</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Engineered for the bold. Designed for the elite. Experience the pinnacle of automotive innovation with the all-electric Aura Genesis.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold bg-white text-black hover:bg-white/90 group">
              Explore Design
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-semibold border-white/20 hover:bg-white/5">
              Watch Film
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll to discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
          {[
            { label: "0-60 MPH", value: "1.9s", sub: "Lightning Fast" },
            { label: "TOP SPEED", value: "250+", sub: "MPH" },
            { label: "RANGE", value: "520", sub: "Miles" },
            { label: "POWER", value: "1,200", sub: "HP Peak" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-1"
            >
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">{stat.label}</span>
              <span className="text-4xl md:text-6xl font-display font-bold">{stat.value}</span>
              <span className="text-xs text-white/20 font-medium">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 px-4 py-1 rounded-full uppercase tracking-widest text-[10px]">
              Performance
            </Badge>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8 leading-none">
              PURE POWER. <br />
              <span className="text-white/40">ZERO EMISSIONS.</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
              The tri-motor powertrain delivers instantaneous torque to all four wheels, propelling you into the future with unprecedented control and precision.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Zap, title: "Tri-Motor AWD", desc: "Independent torque vectoring for surgical precision." },
                { icon: Gauge, title: "Track Mode", desc: "Optimized cooling and aero for sustained performance." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent/20 blur-[100px] rounded-full opacity-30" />
            <img 
              src={CAR_IMAGE_SIDE} 
              alt="Car Side View" 
              className="relative z-10 rounded-2xl shadow-2xl shadow-black/50"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Design Section */}
      <section id="design" className="py-32 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-white/5 text-white/60 border-white/10 px-4 py-1 rounded-full uppercase tracking-widest text-[10px]">
              Design Philosophy
            </Badge>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
              SCULPTED BY THE <span className="text-white/40 italic">WIND</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2070&auto=format&fit=crop", 
                title: "Aerodynamic Excellence", 
                desc: "A drag coefficient of just 0.208 Cd ensures maximum efficiency and stability at high speeds." 
              },
              { 
                img: CAR_IMAGE_INTERIOR, 
                title: "Minimalist Interior", 
                desc: "A driver-centric cockpit featuring sustainable materials and immersive digital displays." 
              },
              { 
                img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop", 
                title: "Signature Lighting", 
                desc: "Adaptive LED matrix headlights that anticipate the road ahead with intelligent beam control." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 px-4 py-1 rounded-full uppercase tracking-widest text-[10px]">
              Intelligence
            </Badge>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8 leading-none">
              SMARTER <br />
              <span className="text-white/40">BY DESIGN.</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
              Equipped with AuraOS, the Genesis learns your preferences and adapts to your driving style. Over-the-air updates ensure your vehicle is always at the cutting edge.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Cpu, title: "Neural Processing Unit", desc: "Real-time environment mapping with 360° awareness." },
                { icon: Navigation, title: "Autonomous Drive 4.0", desc: "Level 4 autonomy for stress-free long-distance travel." },
                { icon: Battery, title: "Quantum Charge", desc: "Add 200 miles of range in just 10 minutes." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4">TECHNICAL SPECS</h2>
            <p className="text-white/40 font-mono text-xs tracking-widest uppercase">Precision Engineering Data</p>
          </div>

          <div className="space-y-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {[
              { label: "Powertrain", value: "Tri-Motor All-Wheel Drive" },
              { label: "Battery Capacity", value: "120 kWh Quantum Cell" },
              { label: "Peak Power", value: "895 kW (1,200 hp)" },
              { label: "Torque", value: "1,400 Nm" },
              { label: "Wheelbase", value: "2,960 mm" },
              { label: "Curb Weight", value: "2,150 kg" },
              { label: "Cargo Volume", value: "850 Liters" },
              { label: "Infotainment", value: "17-inch OLED 4K Display" }
            ].map((spec, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-background hover:bg-white/5 transition-colors group">
                <span className="text-sm font-medium text-white/40 uppercase tracking-wider group-hover:text-white/60 transition-colors">{spec.label}</span>
                <span className="text-sm font-mono text-white group-hover:text-accent transition-colors">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop" 
            alt="Car Detail" 
            className="w-full h-full object-cover brightness-[0.2]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-10">
            OWN THE <br />
            <span className="text-glow">FUTURE.</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light">
            Reservations are now open for the 2026 Aura Genesis. Be among the first to experience the evolution of driving.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold bg-white text-black hover:bg-white/90">
              Reserve Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-12 h-16 text-lg font-bold border-white/20 hover:bg-white/5">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-black rotate-45" />
              </div>
              <span className="font-display font-bold text-xl tracking-tighter">AURA</span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed">
              Aura Motors is committed to accelerating the world's transition to sustainable energy through high-performance electric vehicles.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Models</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Genesis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Spectre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Horizon</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apex</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-6 pt-10 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <p>© 2026 AURA MOTORS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
