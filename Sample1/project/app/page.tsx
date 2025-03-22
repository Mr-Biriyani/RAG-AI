'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, Cpu, Clock, Users, Zap, Database, Code, School } from 'lucide-react';

export default function Home() {
  const stats = [
    { label: 'Average Response Time', value: '0.8s', icon: Clock },
    { label: 'Concurrent Users', value: '1000+', icon: Users },
    { label: 'System Uptime', value: '99.9%', icon: Zap },
    { label: 'Knowledge Base', value: '1M+ docs', icon: Database },
  ];

  const features = [
    {
      title: 'RAG Integration',
      description: 'Advanced retrieval-augmented generation for accurate academic responses',
      icon: Brain,
    },
    {
      title: 'Academic Support',
      description: 'Comprehensive assistance across all KTU curricula and subjects',
      icon: School,
    },
    {
      title: 'API Access',
      description: 'Robust API endpoints for seamless integration with your applications',
      icon: Code,
    },
    {
      title: 'High Performance',
      description: 'State-of-the-art infrastructure ensuring fast and reliable responses',
      icon: Cpu,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              KTU-LLM
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The Advanced Language Model Powering Kerala Technological University&apos;s Digital Future
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="text-lg">
                Try KTU-LLM Now!
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 flex flex-col items-center text-center">
              <stat.icon className="h-8 w-8 mb-4 text-primary" />
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Capabilities</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <feature.icon className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}