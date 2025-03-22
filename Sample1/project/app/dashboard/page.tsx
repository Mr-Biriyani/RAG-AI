'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase, type Profile, type ContentContribution } from '@/lib/supabase';
import {
  BookOpen,
  Users,
  FileText,
  BarChart,
  CheckCircle,
  XCircle,
  Clock,
} from 'lucide-react';

export default function Dashboard() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [contributions, setContributions] = useState<ContentContribution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();
        setProfile(data);
      }
      setLoading(false);
    }

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Access Denied</h2>
          <p>Please sign in to access the dashboard.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {profile.full_name}</h1>
          <p className="text-muted-foreground">Role: {profile.role}</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          {profile.role === 'faculty' && (
            <TabsTrigger value="contributions">Content Contributions</TabsTrigger>
          )}
          {profile.role === 'admin' && (
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.role === 'student' && (
              <>
                <Card className="p-6">
                  <BookOpen className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Study Resources</h3>
                  <p className="text-muted-foreground mb-4">
                    Access course materials and study guides
                  </p>
                  <Button className="w-full">Browse Resources</Button>
                </Card>
                <Card className="p-6">
                  <FileText className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Practice Questions</h3>
                  <p className="text-muted-foreground mb-4">
                    Test your knowledge with practice questions
                  </p>
                  <Button className="w-full">Start Practice</Button>
                </Card>
              </>
            )}

            {profile.role === 'faculty' && (
              <>
                <Card className="p-6">
                  <FileText className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Content Management</h3>
                  <p className="text-muted-foreground mb-4">
                    Create and manage academic content
                  </p>
                  <Button className="w-full">Manage Content</Button>
                </Card>
                <Card className="p-6">
                  <Users className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Student Progress</h3>
                  <p className="text-muted-foreground mb-4">
                    Track student engagement and progress
                  </p>
                  <Button className="w-full">View Progress</Button>
                </Card>
              </>
            )}

            {profile.role === 'admin' && (
              <>
                <Card className="p-6">
                  <Users className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">User Management</h3>
                  <p className="text-muted-foreground mb-4">
                    Manage user roles and permissions
                  </p>
                  <Button className="w-full">Manage Users</Button>
                </Card>
                <Card className="p-6">
                  <BarChart className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">System Analytics</h3>
                  <p className="text-muted-foreground mb-4">
                    Monitor system usage and performance
                  </p>
                  <Button className="w-full">View Analytics</Button>
                </Card>
              </>
            )}
          </div>
        </TabsContent>

        {profile.role === 'faculty' && (
          <TabsContent value="contributions">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Your Contributions</h3>
              <div className="space-y-4">
                {contributions.map((contribution) => (
                  <Card key={contribution.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{contribution.content.substring(0, 100)}...</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(contribution.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center">
                        {contribution.status === 'approved' && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                        {contribution.status === 'rejected' && (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                        {contribution.status === 'pending' && (
                          <Clock className="h-5 w-5 text-yellow-500" />
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>
        )}

        {profile.role === 'admin' && (
          <TabsContent value="analytics">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">System Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Active Users</h4>
                  <p className="text-3xl font-bold">1,234</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Total Questions</h4>
                  <p className="text-3xl font-bold">5,678</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Response Time</h4>
                  <p className="text-3xl font-bold">0.8s</p>
                </Card>
              </div>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}