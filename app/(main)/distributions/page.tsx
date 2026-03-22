import PrimeDistributionOverview from "../../components/PrimeDistributionOverview";
import "../../prime-dashboard-overview.css";
import "../../primeprop-dashboard.css";
import "../../settings-dashboard.css";
import "../../prime-support-section.css";
import "../../prime-raise-issue-flow.css";
export default function DashboardPage() {
  return (
    <div className="pp-page-stack">
      <PrimeDistributionOverview />
    </div>
  );
}