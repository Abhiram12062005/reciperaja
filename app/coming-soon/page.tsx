import ComingSoonClient from "./ComingSoonClient";

export default function ComingSoonPage() {
  // This runs on the server — safe to read env variable here
  const launchDate = process.env.LAUNCH_DATE ?? "";
  return <ComingSoonClient launchDate={launchDate} />;
}