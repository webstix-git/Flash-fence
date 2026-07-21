import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PrivacyPage() {
  return (
    <div className="inner-page legal-page">
      <PageHero
        eyebrow="Regulatory compliance"
        title="Privacy Policy"
        backgroundImage="/completed-vinyl-installation.jpg"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="section-light legal-page-section">
        <div className="container">
          <div className="legal-page-content">
            <div className="legal-body">
            <p>
              At <strong>Flash Fence LLC</strong>, we are committed to maintaining the trust and confidence of our Chippewa Valley clients. This Privacy Policy details how we collect, store, and process your personal information when you request a free quote, call us, or interact with our digital storefront.
            </p>

            <h2 className="heading-no-accent">1. Information We Collect</h2>
            <p>
              When you submit a &quot;Get A Free Quote&quot; form, we collect information necessary to prepare your boundary estimation or groundwork layout plan. This includes:
            </p>
            <ul>
              <li>Contact Details: Full name, phone number, and email address.</li>
              <li>Site Details: Street address, town, and linear footage estimates.</li>
              <li>Material Preferences: Choice of vinyl, wood, or chain link boundary types.</li>
            </ul>

            <h2 className="heading-no-accent">2. How We Use Your Information</h2>
            <p>
              We utilize collected info solely to deliver professional trades work:
            </p>
            <ul>
              <li>To contact you for boundary layouts, linear assessments, or site walk-through timings.</li>
              <li>To send text notifications when I am in transit to your site.</li>
              <li>To execute contract documentation and craftsmanship warranty schedules.</li>
            </ul>
            <p>
              We do **not** sell, rent, or trade your contact info to third parties for marketing purposes.
            </p>

            <h2 className="heading-no-accent">3. Text/SMS Communications</h2>
            <p>
              By providing your telephone number on our forms, you consent to receive direct project follow-up texts from us. Message and data rates may apply. You can reply &quot;STOP&quot; at any time to opt-out of SMS notifications.
            </p>

            <h2 className="heading-no-accent">4. Contact Us</h2>
            <p>
              For privacy queries or data removal requests:
            </p>
            <p>
              Flash Fence LLC<br />
              Email: flashfencewi@gmail.com<br />
              Phone: 715-299-0663
            </p>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
