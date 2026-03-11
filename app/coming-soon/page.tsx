// app/coming-soon/page.tsx  (or wherever your coming-soon route lives)
import ComingSoonClient from "./ComingSoonClient";
export default function ComingSoonPage() {
  const launchDate = process.env.LAUNCH_DATE ?? "";
  return <ComingSoonClient launchDate={launchDate} />;
}