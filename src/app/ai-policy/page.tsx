import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AiPolicyPage() {
  return (
    <div className="inner-page legal-page">
      <PageHero
        eyebrow="Automation Transparency"
        title="AI Policy & Operations"
        backgroundImage="/vinyl-fence-detail.jpg"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Policy" },
        ]}
      />

      <section className="section-light legal-page-section">
        <div className="container">
          <div className="legal-page-content">
            <div className="legal-body">
            <p>
              At <strong>Flash Fence LLC</strong>, we combine old-school craftsmanship with modern digital tools. This AI Policy outlines how we utilize Artificial Intelligence systems to optimize our design layouts, communicate with customers, and manage site parameters.
            </p>

            <h2 className="heading-no-accent">1. On-Site Operations: strictly Hand-Built</h2>
            <p>
              While we leverage algorithms to optimize linear fencing counts, layout dimensions, and clearing routes, **every physical post set and excavator shovel is driven by human tradespeople**. I supervise all physical installations. No physical building operations are delegated to robotic or automated machinery.
            </p>

            <h2 className="heading-no-accent">2. Estimations &amp; Digital Layout Tools</h2>
            <p>
              We utilize automated estimate software to process your site details and approximate boundary footages. These computational tools analyze soil conditions, slope parameters, and local frost line depths to predict post resistance and material counts. Final quotes are verified on-site by me.
            </p>

            <h2 className="heading-no-accent">3. Communications &amp; Scheduling</h2>
            <p>
              To maintain immediate responses, our system may route incoming web request data through automated triage pipelines. I receive notifications via automated SMS triggers. Inquiries are managed by our core Chippewa Valley staff.
            </p>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
