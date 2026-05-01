import { useProfile } from "@/lib/store";
import OnboardingScreen from "@/components/OnboardingScreen";
import HomePage from "@/pages/HomePage";

export default function Index() {
  const { profile } = useProfile();
  return profile.onboarded ? <HomePage /> : <OnboardingScreen />;
}
