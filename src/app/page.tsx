import MainContainer from "@/components/common/container/MainContainer";
import Header from "@/components/sections/Header";
import Navbar from "@/components/sections/Navbar";
import Intro from "@/components/sections/Intro";
import Image from "next/image";
import Skills from "@/components/sections/Skills";
import Agenda from "@/components/sections/Agenda";
import Footer from "@/components/sections/Footer";
import Works from "@/components/sections/Works";
import About from "@/components/sections/About";
import Benu from "@/components/works/benu/Benu";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Intro />
        <Header />
        <About />
        <Works />
        <Skills />
        {/* <Agenda /> */}
      </MainContainer>
    </>
  );
}
