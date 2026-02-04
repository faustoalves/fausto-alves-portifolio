import MainContainer from "@/components/common/container/MainContainer";
import Navbar from "@/components/sections/Navbar";
import WorkHeader from "@/components/sections/WorkHeader";
import React from "react";
import Footer from "@/components/sections/Footer";
import { workList } from "@/lib/works";
import { notFound } from "next/navigation";
import WorkContent from "@/components/works/WorkContent";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = workList.find((item) => item.slug === slug);

  if (!work) {
    notFound();
  }
  return (
    <>
      <Navbar />
      <MainContainer>
        <WorkHeader {...work} />
        {work.content.map((item) => (
          <WorkContent key={item.title} {...item} />
        ))}
      </MainContainer>
      <Footer />
    </>
  );
}
