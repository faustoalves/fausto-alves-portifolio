import type { Metadata } from "next";
import MainContainer from "@/components/common/container/MainContainer";
import Navbar from "@/components/sections/Navbar";
import WorkHeader from "@/components/sections/WorkHeader";
import React from "react";
import Footer from "@/components/sections/Footer";
import { workList } from "@/lib/works";
import { notFound } from "next/navigation";
import WorkContent from "@/components/works/WorkContent";
import WorkDescription from "@/components/works/WorkDescription";
import { getSiteUrl } from "@/lib/site";

function stripHtml(html: string, maxLength = 160): string {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > maxLength ? `${text.slice(0, maxLength - 3)}...` : text;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = workList.find((item) => item.slug === slug);

  if (!work) {
    return {};
  }

  const baseUrl = getSiteUrl();
  const url = `${baseUrl}/${work.slug}`;
  const description = stripHtml(work.description);

  return {
    title: `${work.title} | Fausto Alves`,
    description,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${work.title} | Fausto Alves`,
      description,
      url,
      siteName: "Fausto Alves",
      type: "website",
      images: [
        {
          url: work.srcHeader,
          width: 1200,
          height: 630,
          alt: work.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${work.title} | Fausto Alves`,
      description,
      images: [work.srcHeader],
    },
  };
}

export default async function Page({ params }: Props) {
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
        <WorkDescription {...work} />
        {work.content.map((item, index) => (
          <WorkContent key={item.title} {...item} index={index} />
        ))}
      </MainContainer>
      <Footer />
    </>
  );
}
