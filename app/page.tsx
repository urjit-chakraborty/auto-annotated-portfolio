'use client';

import { useState, useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import wLogo from '@/components/w.svg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import smedia from '@/components/social-media-6557345_1280.jpg';
import tech from '@/components/engineer-4922413_1920.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
  Plane,
  Code,
  Palette,
  Megaphone,
  Users,
  ArrowRight,
  Clock,
  DollarSign,
  Star,
  StarHalf,
  ChartLine,
  Cpu
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import bagel from '@/components/bagel-min.jpg';
import blend from '@/components/blend.png';
import spice from '@/components/spice.jpg';
const services = [
  {
    title: 'Web Development',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
    description: 'Crafting stunning websites tailored to your brand. From wireframes to seamless functionality, bring your vision to life.'
  },
  {
    title: 'Design Services',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
    description: 'Transforming ideas into captivating visuals. Whether it\'s logos, branding, or graphics, we design to impress and inspire.'
  },
  {
    title: 'Digital Marketing',
    icon: Megaphone,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    description: 'Driving traffic, leads, and sales with data-driven strategies. From SEO to ads, we help your business thrive in the digital world.'
  },
  {
    title: 'Social Media Management',
    icon: ChartLine,
    image: smedia,
    description: 'Elevating your online presence with strategic content, engagement, and growth. We handle the posts, you enjoy the results.'
  },
  {
    title: 'Custom Tech Solutions',
    icon: Cpu,
    image: tech,
    description: 'Building innovative, tailor-made software and tools to solve your unique business challenges. Your ideas, our expertise.'
  }
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#3775d2' },
          dark: { 'cal-brand': '#3775d2' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <main className="min-h-screen relative">
      <style jsx global>{`
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }

        /* For Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
        }
      `}</style>

      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-24 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 ">
              <p className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase flex items-center gap-1 hidden sm:flex ">
                <Clock className="w-8 h-8 md:w-4 md:h-4" />
                <DollarSign className="w-8 h-8 md:w-4 md:h-4" />
                Our clients have saved over thousands of hours and dollars
              </p>
              <h1 className="text-3xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#3775d2]">
                Leave your generic templates & pricey subscriptions behind
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                Kontrail empowers your business with custom and innovative
                solutions designed to optimize operations and enhance your
                brand. From cutting-edge technology to creative design, we
                provide the tools and expertise to help you reach new heights.
              </p>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex-grow"
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  data-cal-namespace="30min"
                  data-cal-link="kontrail/30min"
                  data-cal-config={JSON.stringify({
                    layout: 'month_view',
                    theme: 'auto',
                    name: name,
                    email: email,
                  })}
                >
                  Book my 100% free consultation
                  <Plane className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  We'll never share your info with anyone.
                </p>
              </div>
            </div>

            <div className="relative h-[300px] lg:h-[600px]">
              <img
                src="https://i.postimg.cc/VNj7hMqR/fffinalhero.png"
                alt="Person celebrating his success from working with Kontrail"
                className="object-cover w-full h-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl" />
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="max-w-4xl mx-auto mt-16 pt-8 border-t">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Reviews */}
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center gap-1">
                  <Star className="w-9 h-9 fill-yellow-400 text-yellow-400" />
                  <Star className="w-9 h-9 fill-yellow-400 text-yellow-400" />
                  <Star className="w-9 h-9 fill-yellow-400 text-yellow-400" />
                  <Star className="w-9 h-9 fill-yellow-400 text-yellow-400" />
                  <Star className="w-9 h-9 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  5.0 average rating
                </p>
              </div>

              {/* Certifications */}
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center gap-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    alt="Google Partner"
                    className="h-9 w-auto"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/25/Microsoft_icon.svg"
                    alt="Microsoft Certified"
                    className="h-8 w-auto"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg"
                    alt="Adobe Solution Partner"
                    className="h-8 w-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Certified by market leaders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Work</h2>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 1, spaceBetween: 16 },
              800: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 16 }
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <Card className="overflow-hidden group">
                  <div className="relative h-56">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={800}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-4xl font-bold mb-16 text-center">
            What Our Clients Say
          </h2>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Bagel Bakery Café Salisbury',
                role: 'Café with fresh bagels and pastries',
                image: bagel,
                quote:
                  'Kontrail transformed our business with innovative solutions. We have achieved record growth with the numerous automation and management applications they have built for us.',
              },
              {
                name: 'Blending Cultures Society Corp.',
                role: 'Nonprofit celebrating culture & diversity',
                image: blend,
                quote:
                  "The team's attention to detail and creative approach sets them apart. Kontrail developed our website, designed our logo, and they create flyers and graphics for new events and activites we host. ",
              },
              {
                name: 'Spice Bazaar Salisbury',
                role: 'International grocery store',
                image: spice,
                quote:
                  'Kontrail delivers brilliant and timely results that transformed our business, exceeding expectation every time. They set up our social media accounts, built our website, and created graphics for our store.',
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.quote}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center text-center md:text-left">
            {/* Company Info */}
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <div className="flex items-center justify-center">
                <span className="inline-flex items-center justify-center w-32">
                  <Image
                    src={wLogo}
                    width="12"
                    alt="N"
                    height="12"
                    className="w-auto h-full"
                  />
                </span>
              </div>

              <div className="text-center md:text-left">
                <p className="text-gray-400">Streamline Your Strategy,</p>
                <p className="text-gray-400">Leave Your Mark.</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400">kontrailagency@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-400">+1 (443) 944-7346</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-400">Salisbury, Maryland</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-400 text-sm text-center">
                © {new Date().getFullYear()} Kontrail LLC. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
