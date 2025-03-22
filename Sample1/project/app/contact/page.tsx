'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  HelpCircle,
  MessageSquare,
  Users,
  Send,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const faqs = [
    {
      question: 'How do I get started with KTU-LLM?',
      answer: 'Simply sign up using your institutional email address. Once verified, you can start using all the features available for your role.',
    },
    {
      question: 'What kind of questions can I ask KTU-LLM?',
      answer: 'You can ask questions related to your curriculum, programming concepts, mathematical problems, and general academic queries.',
    },
    {
      question: 'How accurate are the responses?',
      answer: 'KTU-LLM is trained on verified academic content and regularly updated with the latest curriculum. However, always verify critical information with your course materials.',
    },
    {
      question: 'Can faculty members contribute content?',
      answer: 'Yes, faculty members can contribute content through their dashboard. All contributions are reviewed before being added to the knowledge base.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Support Resources */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold mb-8">Help & Support</h1>
          
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <HelpCircle className="mr-2 h-6 w-6" />
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Users className="mr-2 h-6 w-6" />
              Community Support
            </h2>
            <p className="text-muted-foreground mb-4">
              Join our community forum to discuss features, share feedback, and connect with other users.
            </p>
            <Button className="w-full">Visit Community Forum</Button>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <MessageSquare className="mr-2 h-6 w-6" />
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}