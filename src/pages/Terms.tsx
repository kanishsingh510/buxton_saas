import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText, Users, Scale, AlertTriangle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: March 6, 2026
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <FileText className="w-8 h-8 text-gray-900 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Agreement</h3>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <Users className="w-8 h-8 text-gray-900 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Guidelines</h3>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <Scale className="w-8 h-8 text-gray-900 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Dispute</h3>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-gray-900 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Liability</h3>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to BUXTON SCAFFOLDING LTD. By accessing and using our platform, you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you do not agree with any part of these terms, you may not access our services.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                User Responsibilities
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a user of our platform, you agree to the following responsibilities:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Ensure your use complies with all applicable local, regional, and national laws</li>
                <li>Do not use the platform for unauthorized, illegal, or malicious activities</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Acceptable Use Policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You must not misuse our services. You are strictly prohibited from:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Attempting to breach our security or authentication measures</li>
                <li>Uploading malware, viruses, or destructive code</li>
                <li>Interfering with the proper functioning of the platform</li>
                <li>Copying or distributing our proprietary data and intellectual property without written permission</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Payment Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Select features of our platform require a subscription or one-off payment. By subscribing to BUXTON SCAFFOLDING LTD, you agree to pay all applicable fees associated with the selected tier.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify pricing with a 30-day notice to active users. Failure to maintain up-to-date payment information may result in temporary suspension of service.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the maximum extent permitted by law, BUXTON SCAFFOLDING LTD shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our platform is provided "as is" and "as available". We make no warranties, expressed or implied, regarding uptime, exact applicability to your unique operational workflow, or freedom from critical software bugs.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>Email: support@buxtonscaffolding.com</li>
                <li>Company: BUXTON SCAFFOLDING LTD (Company Number: 15873158)</li>
                <li>Address: 27 Kinder Way, Fairfield, Buxton, England, SK17 7TP</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
