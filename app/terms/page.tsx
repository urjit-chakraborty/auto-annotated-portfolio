'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function TermsPage() {
  const router = useRouter();
  
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing and using Kontrail's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
          <p className="mb-4">
            Kontrail provides digital agency services including but not limited to web development, design, and digital marketing. The specific details of services will be outlined in individual agreements with clients.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
          <p className="mb-4">
            All content, features, and functionality of our services are owned by Kontrail and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Responsibilities</h2>
          <p className="mb-4">
            Users agree to provide accurate, current, and complete information when using our services and to maintain the security of any accounts or access credentials.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="mb-4">
            Kontrail shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms and Conditions on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
          <p className="mb-4">
            For any questions about these Terms and Conditions, please contact us at kontrailagency@gmail.com.
          </p>
        </div>
      </div>
    </main>
  );
}