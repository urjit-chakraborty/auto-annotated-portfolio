'use client';

import { Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import twitterIcon from '@/components/dsf.svg';

import Image from 'next/image';
export function Navbar({ activeSection }: { activeSection: string }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2"
          >
            <span className="inline-flex items-center justify-center w-32">
              <Image
                src={twitterIcon}
                width="12"
                alt="N"
                height="12"
                className="w-auto h-full"
              />
            </span>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'work', label: 'Our Work' },
              { id: 'testimonials', label: 'Testimonials' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                } transition-colors`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90"
            data-cal-namespace="30min"
            data-cal-link="kontrail/30min"
            data-cal-config={JSON.stringify({
              layout: 'month_view',
              theme: 'auto',
              name: '',
              email: '',
            })}
          >
            Get Started
            <Plane className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
