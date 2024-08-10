import Footer from "@/components/footer";
import HomeHeader from "@/components/HomeHeader";
import Intro from "@/components/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-24 border-b">
        <HomeHeader/>
      </section>
      <section className="h-[75vh] border-b">
        <Intro/>
      </section>
      <section className="h-[75vh] border-b">

      </section>
      <section className="h-24 border-t">
      <Footer/>
      </section>
    </main>
  );
}
