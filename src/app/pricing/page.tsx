import { PageHeader } from "@/components/shared/page-header";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";

export const metadata = {
  title: "Pricing · Startup Nexus",
  description:
    "Simple, transparent plans for founders, experts, and funds. Start free and scale when you're ready.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title={
          <>
            Plans for every side of the{" "}
            <span className="text-gradient-brand">ecosystem</span>
          </>
        }
        subtitle="Founders validate for free. Experts and funds pay for the tools that match how they actually work. No long-term lock-in."
      />
      {/* reuse the landing pricing grid */}
      <div className="-mt-12">
        <Pricing />
      </div>
      <Faq />
    </>
  );
}
