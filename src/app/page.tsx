// import { Button } from "@/components/ui/button";
import {
  FlipWordsDemo,
  NavbarDemo,
  CardHoverEffectDemo,
  AnimatedModalDemo,
  ThreeDCardDemo,
  BackgroundBeamsDemo,
} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavbarDemo />
      <FlipWordsDemo />
      <div style={{ display: "flex", gap: "20px" }}>
        <ThreeDCardDemo />
        <ThreeDCardDemo />
        <ThreeDCardDemo />
      </div>
      <BackgroundBeamsDemo />
    </main>
  );
}
