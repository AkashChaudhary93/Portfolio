'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { SectionHeader, GlassCard, TechPill } from '@/components/shared';

function StatsCounter({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const start = Date.now();

          const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-space-grotesk text-4xl font-bold text-accent-cyan">
        {count}+
      </div>
      <div className="font-jetbrains-mono text-xs text-text-tertiary uppercase tracking-wider mt-1">
        {label}
      </div>
    </div>
  );
}

const DO_CARDS = [
  {
    icon: '🖥️',
    title: 'Full-Stack Development',
    description:
      'End-to-end web applications with React frontends, Spring Boot backends, and PostgreSQL databases — from concept to deployment.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'Docker'],
    accent: 'var(--accent-cyan)',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description:
      'Serverless architectures on AWS using Lambda, API Gateway, and DynamoDB following the Well-Architected Framework.',
    tech: ['AWS', 'Docker', 'Linux', 'Git'],
    accent: 'var(--accent-purple)',
  },
  {
    icon: '⚡',
    title: 'Problem Solving & DSA',
    description:
      'Solved 250+ problems across LeetCode and GeeksforGeeks, with strong command over data structures and algorithms in C++ and Java.',
    tech: ['C++', 'Java', 'LeetCode', 'GeeksforGeeks'],
    accent: 'var(--accent-green)',
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative">
      <div className="container-custom">
        <SectionHeader number="01" title="ABOUT ME" />

        <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start mb-20">
          {/* Photo */}
          <div
            className={`relative group transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'
              }`}
          >
            {/* Stylized frame for portrait */}
            <div className="relative w-full aspect-[4/5] bg-bg-tertiary border-2 border-[var(--border-subtle)] overflow-hidden">
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-accent-cyan opacity-50 z-10" />
              <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-accent-cyan opacity-50 z-10" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-accent-cyan opacity-50 z-10" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-accent-cyan opacity-50 z-10" />

              {/* Actual Photo */}
              <div className="absolute inset-0">
                <Image
                  src="/AKASH.png"
                  alt="Akash Chaudhary"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 400px) 100vw, 400px"
                  priority
                />
              </div>

              {/* Gradient overlay bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary/80 to-transparent z-10" />

              {/* Glitch effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen pointer-events-none">
                <div className="absolute inset-0 bg-accent-cyan/10 translate-x-0.5" />
                <div className="absolute inset-0 bg-accent-magenta/10 -translate-x-0.5" />
              </div>
            </div>
            <p className="font-jetbrains-mono text-xs text-text-tertiary mt-3 text-center">
              AKASH CHAUDHARY — PUNJAB, INDIA
            </p>
          </div>

          {/* Bio */}
          <div
            className={`space-y-6 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'
              }`}
          >
            <p className="text-body-lg text-text-primary leading-relaxed">
              I&apos;m <span className="text-accent-cyan font-semibold">Akash Chaudhary</span>, a
              B.Tech Computer Science student at{' '}
              <span className="text-accent-purple font-semibold">Lovely Professional University</span>{' '}
              with a CGPA of 8.09, passionate about building systems that scale. I craft full-stack
              web applications with React and Spring Boot, architect cloud infrastructure on AWS,
              and continuously sharpen my problem-solving skills — having solved 250+ DSA problems
              across LeetCode and GeeksforGeeks.
            </p>

            <p className="text-body text-text-secondary">
              I&apos;ve received hands-on training in{' '}
              <span className="text-accent-green font-semibold">AWS Cloud Computing</span> at
              Gokboru Tech and Java Development at TechnoHacks EduTech, building serverless
              applications and full-stack CRUD systems along the way.
            </p>

            <p className="text-body text-text-secondary">
              When I&apos;m not coding, I&apos;m probably grinding competitive programming,
              exploring new cloud services, or designing scalable architectures for my next project.
            </p>

            {/* Stats */}
            <div className="flex gap-12 pt-6">
              <StatsCounter value={250} label="DSA PROBLEMS SOLVED" />
              <StatsCounter value={4} label="PROJECTS BUILT" />
              <StatsCounter value={8} label="CGPA / 10" />
            </div>
          </div>
        </div>

        {/* What I Do Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {DO_CARDS.map((card, i) => (
            <GlassCard
              key={card.title}
              className={`transition-all duration-700 ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
                }`}
              accent={card.accent}
            >
              <div
                className="text-4xl mb-4 transition-transform duration-300 hover:scale-110"
                style={{ filter: `drop-shadow(0 0 10px ${card.accent})` }}
              >
                {card.icon}
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-text-primary mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">{card.description}</p>
              <div className="flex flex-wrap gap-2">
                {card.tech.map((t) => (
                  <TechPill key={t} label={t} accent={card.accent} />
                ))}
              </div>

              <style jsx>{`
                div:hover {
                  transition-delay: ${i * 0.2}s;
                }
              `}</style>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
