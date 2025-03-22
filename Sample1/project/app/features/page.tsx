'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import {
  Brain,
  BookOpen,
  Code2,
  MessageSquare,
  Sparkles,
  Bot,
  ArrowRight,
} from 'lucide-react';

export default function Features() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const features = [
    {
      icon: Brain,
      title: 'Natural Language Understanding & Generation',
      description:
        'Advanced AI capabilities to understand complex academic queries and generate human-like responses.',
    },
    {
      icon: BookOpen,
      title: 'Academic Content Retrieval',
      description:
        'Instant access to KTU syllabus, course materials, and academic resources.',
    },
    {
      icon: Sparkles,
      title: 'Syllabus-Aligned Content Generation',
      description:
        'Creates content that perfectly aligns with KTU curriculum and academic standards.',
    },
    {
      icon: Code2,
      title: 'Code Explanation & Generation',
      description:
        'Explains complex programming concepts and generates example code across multiple languages.',
    },
    {
      icon: MessageSquare,
      title: 'Multi-turn Academic Discussions',
      description:
        'Engage in detailed academic discussions with context-aware follow-up responses.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call with sample response
    setTimeout(() => {
      setResponse(
        'This is a sample response demonstrating KTU-LLM\'s capabilities. In a production environment, this would be connected to the actual LLM API endpoint.'
      );
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-12">
      <div className="container mx-auto px-4">
        {/* Features Grid */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-12">
            Powerful Features for Academic Excellence
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-6 w-6 mr-3 text-primary" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <div className="flex items-center mb-6">
              <Bot className="h-6 w-6 mr-3 text-primary" />
              <h2 className="text-2xl font-bold">Try KTU-LLM</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <Textarea
                placeholder="Ask anything about KTU academics, programming, or engineering concepts..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="min-h-[100px] mb-4"
              />
              <Button
                type="submit"
                className="w-full"
                disabled={!query || isLoading}
              >
                {isLoading ? (
                  'Processing...'
                ) : (
                  <>
                    Get Response
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
            {response && (
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Response:</h3>
                <Card className="p-4 bg-secondary">
                  <p className="text-muted-foreground">{response}</p>
                </Card>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}