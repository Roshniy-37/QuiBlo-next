import FooterHome from "@/components/FooterHome";
import HomeHeader from "@/components/HomeHeader";
import Intro from "@/components/Intro";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <main className="h-full w-full bg-[#020427]">
     <HomeHeader/>
     <Intro/>
     <Tabs/>
     <FooterHome/>
    </main>
  );
}
