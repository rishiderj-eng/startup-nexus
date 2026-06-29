import { PageHeader } from "@/components/shared/page-header";
import { ValidationDashboard } from "@/components/sections/validation-dashboard";

export const metadata = {
  title: "Dashboard · Startup Nexus",
  description:
    "The founder cockpit: validation score, expert reviews, tasks, milestones, funding progress, and documents in one workspace.",
};

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        eyebrow="Validation dashboard"
        title={
          <>
            Your startup's{" "}
            <span className="text-gradient-brand">command center</span>
          </>
        }
        subtitle="Score, reviews, tasks, milestones, funding, and documents — everything you need between submission and verification, on one surface."
      />
      {/* reuse the landing dashboard preview */}
      <div className="-mt-16">
        <ValidationDashboard />
      </div>
    </>
  );
}
