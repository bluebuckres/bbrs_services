import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | BlueBuck Research",
    description: "Terms of Service for BlueBuck Research LLP.",
};

export default function TermsPage() {
    return (
        <main className="pt-32 pb-24 px-6 min-h-screen bg-[#fdfbf7] dark:bg-[#050505] text-[#1a1a1a] dark:text-gray-100">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl mb-4">Terms of Service</h1>
                <p className="text-sm opacity-60 mb-12">Last updated: June 2026</p>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-display mb-4">1. Acceptance of Terms</h2>
                        <p className="opacity-80 leading-relaxed">
                            By accessing and using the website of BlueBuck Research LLP (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display mb-4">2. Provision of Services</h2>
                        <p className="opacity-80 leading-relaxed">
                            BlueBuck Research LLP provides AI/ML engineering, data engineering, and custom software development services. We reserve the right to modify or discontinue any service with or without notice to you. We shall not be liable to you or any third party should we exercise our right to modify or discontinue any service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display mb-4">3. Intellectual Property</h2>
                        <p className="opacity-80 leading-relaxed">
                            As outlined in our standard operating procedures, we provide full intellectual property (IP) transfer to our clients upon project completion and full payment, unless otherwise explicitly agreed in a separate contract. The content on this website itself, however, remains the property of BlueBuck Research LLP and may not be reproduced without permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display mb-4">4. Limitation of Liability</h2>
                        <p className="opacity-80 leading-relaxed">
                            In no event shall BlueBuck Research LLP, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display mb-4">5. Governing Law</h2>
                        <p className="opacity-80 leading-relaxed">
                            These Terms shall be governed and construed in accordance with the laws of India, specifically the jurisdiction of Kolkata, West Bengal, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display mb-4">6. Contact Us</h2>
                        <p className="opacity-80 leading-relaxed">
                            If you have any questions about these Terms, please contact us at <a href="mailto:connect@bluebuckresearch.com" className="text-emerald-600 dark:text-emerald-400 hover:underline">connect@bluebuckresearch.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
