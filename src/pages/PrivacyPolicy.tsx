import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/kundli-ai-logo.png";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm">Back</span>
          </Link>
          <div className="flex items-center gap-3 ml-auto">
            <img src={logo} alt="Kundli AI" width={32} height={32} className="rounded-lg" />
            <span className="font-display text-lg text-gradient-gold font-bold">Kundli AI</span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto max-w-3xl px-6 pt-28 pb-16">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 text-gradient-gold">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-10">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose-legal space-y-8 text-foreground/85 text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">1. Introduction</h2>
            <p>This Privacy Policy explains how Kundli AI ("we," "us," or "our") collects, uses, stores, shares, and protects your personal information when you use our AI-powered Vedic astrology chatbot on WhatsApp and our website. By using our Service, you consent to the practices described in this policy.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">2. Information We Collect</h2>
            <p>We may collect the following categories of information:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Personal Information:</strong> Name, phone number (via WhatsApp), date of birth, time of birth, and place of birth</li>
              <li><strong>Chat Data:</strong> Messages you send to and receive from the Kundli AI chatbot on WhatsApp</li>
              <li><strong>Usage Data:</strong> Interaction patterns, feature usage, timestamps of conversations, and frequency of use</li>
              <li><strong>Device Information:</strong> Information provided by WhatsApp such as device type, operating system (as available through the WhatsApp platform)</li>
              <li><strong>Generated Content:</strong> Kundli charts, horoscope readings, and other astrological outputs generated for you</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">3. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>To generate personalized astrological readings and Kundli charts</li>
              <li>To provide daily, weekly, and monthly horoscope predictions</li>
              <li>To perform Kundli matching and compatibility analysis</li>
              <li>To improve and enhance the accuracy and quality of the Service</li>
              <li>To communicate with you about the Service, updates, or changes</li>
              <li>To respond to your inquiries and support requests</li>
              <li>To analyze usage trends and optimize user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">4. Data Storage & Security</h2>
            <p>Your data is stored using secure cloud infrastructure. Please be aware of the following:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Your data is <strong>not encrypted at the application level</strong> by Kundli AI</li>
              <li>Our cloud infrastructure provider implements industry-standard security including encryption at rest (AES-256) and encryption in transit (TLS/SSL)</li>
              <li>We implement access controls and authentication mechanisms to restrict unauthorized access to your data</li>
              <li>Despite our efforts, no method of electronic storage or transmission over the internet is 100% secure, and we cannot guarantee absolute security</li>
            </ul>
            <p className="mt-2">We retain your data for as long as your account is active or as needed to provide the Service. You may request deletion of your data at any time (see Section 8).</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">5. Data Sharing & Disclosure</h2>
            <p>We do <strong>not</strong> sell your personal information. We may share your data in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Service Providers:</strong> With third-party providers (such as our cloud infrastructure provider, AI model providers, and Meta) who assist in operating the Service, subject to confidentiality obligations</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity</li>
              <li><strong>With Your Consent:</strong> When you explicitly consent to sharing your data with a specific third party</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">6. Cookies & Tracking</h2>
            <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings. The WhatsApp chatbot does not use cookies.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (see Section 8)</li>
              <li><strong>Objection:</strong> Object to certain processing of your data</li>
              <li><strong>Data Portability:</strong> Request your data in a structured, commonly used format</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
            </ul>
            <p className="mt-2">To exercise any of these rights, contact us at <a href="mailto:kundliaibot@gmail.com" className="text-accent hover:underline">kundliaibot@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">8. Account & Data Deletion</h2>
            <p>You can request complete deletion of your account and all associated data at any time. Please visit our <Link to="/account-deletion" className="text-accent hover:underline">Account Deletion</Link> page for the detailed process. Deletion requests are processed within 1–2 working days.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">9. Children's Privacy</h2>
            <p>The Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected data from a child under 13 without parental consent, we will take steps to delete that information promptly. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:kundliaibot@gmail.com" className="text-accent hover:underline">kundliaibot@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">10. International Data Transfers</h2>
            <p>Your data may be stored and processed in servers located outside your country of residence, including regions where Supabase operates its infrastructure. By using the Service, you consent to the transfer of your data to these locations. We ensure that appropriate safeguards are in place for such transfers.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on our website with a revised "Last updated" date. Your continued use of the Service after such changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">12. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:</p>
            <p className="mt-2"><strong>Email:</strong> <a href="mailto:kundliaibot@gmail.com" className="text-accent hover:underline">kundliaibot@gmail.com</a></p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
