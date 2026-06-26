import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | BlueBuck Research",
    description: "Privacy Policy for BlueBuck Research LLP.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="pt-32 pb-24 px-6 min-h-screen bg-[#fdfbf7] dark:bg-[#050505] text-[#1a1a1a] dark:text-gray-100">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl mb-4">Privacy Policy</h1>
                <p className="text-sm opacity-60 mb-12">Last updated: June 2026</p>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-display mb-4">1. Introduction</h2>
                        <p className="opacity-80 leading-relaxed">
                            BlueBuck Research LLP (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display mb-4">2. The data we collect about you</h2>
                        <p className="opacity-80 leading-relaxed mb-4">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 opacity-80 leading-relaxed">
                            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display mb-4">3. How we use your personal data</h2>
                        <p className="opacity-80 leading-relaxed mb-4">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 opacity-80 leading-relaxed">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal obligation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display mb-4">4. Contact Details</h2>
                        <p className="opacity-80 leading-relaxed">
                            If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:connect@bluebuckresearch.com" className="text-emerald-600 dark:text-emerald-400 hover:underline">connect@bluebuckresearch.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
