'use client';

import { useEffect, useRef, useState } from 'react';
import { SectionHeader, GlassCard, TechPill } from '@/components/shared';

function StatsCounter({ value, label, isDecimal = false, showPlus = true }: { value: number; label: string; isDecimal?: boolean; showPlus?: boolean }) {
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
            
            if (isDecimal) {
              setCount(Number((eased * value).toFixed(2)));
            } else {
              setCount(Math.floor(eased * value));
            }

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, isDecimal]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-space-grotesk text-4xl font-bold text-accent-cyan">
        {count}{showPlus && '+'}
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

        <div className="max-w-3xl mx-auto mb-20 text-center">
          {/* Bio */}
          <div
            className={`space-y-8 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
          >
            <p className="text-body-lg text-text-primary leading-relaxed">
              I&apos;m <span className="text-accent-cyan font-semibold">Akash Chaudhary</span>, a
              B.Tech Computer Science student at{' '}
              <span className="text-accent-purple font-semibold">Lovely Professional University</span>{' '}
              with a CGPA of 8.39, passionate about building systems that scale. I craft full-stack
              web applications with React and Spring Boot, architect cloud infrastructure on AWS,
              and continuously sharpen my problem-solving skills — having solved 250+ DSA problems
              across LeetCode and GeeksforGeeks.
            </p>

            <p className="text-body text-text-secondary">
              I&apos;ve received hands-on training in{' '}
              <span className="text-accent-green font-semibold">AWS Cloud Computing</span> at
              Gokboru Tech and Java Development at Lovely Professional University, building serverless
              applications and full-stack CRUD systems along the way.
            </p>

            <p className="text-body text-text-secondary">
              When I&apos;m not coding, I&apos;m probably grinding competitive programming,
              exploring new cloud services, or designing scalable architectures for my next project.
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-12 pt-6">
              <StatsCounter value={250} label="DSA PROBLEMS SOLVED" />
              <StatsCounter value={4} label="PROJECTS BUILT" />
              <StatsCounter value={8.39} label="CGPA / 10" isDecimal showPlus={false} />
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
