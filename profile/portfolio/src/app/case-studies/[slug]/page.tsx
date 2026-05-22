import { notFound } from "next/navigation";
import type { Metadata } from "next";
import VanigamCaseStudy from "@/components/case-studies/VanigamCaseStudy";
import RetailMartCaseStudy from "@/components/case-studies/RetailMartCaseStudy";
import BreadCaseStudy from "@/components/case-studies/BreadCaseStudy";

const CASE_STUDIES: Record<
  string,
  { component: React.FC; title: string; description: string }
> = {
  vanigam: {
    component: VanigamCaseStudy,
    title: "Vanigam GST Billing — Case Study",
    description:
      "How I architected a production-grade GST billing system with Flutter, Clean Architecture, offline-first workflows, and scalable BLoC state management.",
  },
  retailmart: {
    component: RetailMartCaseStudy,
    title: "RetailMart Ecosystem — Case Study",
    description:
      "Building a complete B2B ecommerce dual-app ecosystem over 1.5 years — architecture decisions, engineering challenges, and product ownership.",
  },
  "bread-financial": {
    component: BreadCaseStudy,
    title: "Bread Financial — Engineering Overview",
    description:
      "High-level overview of fintech-grade mobile platform engineering at Bread Financial — SDK development, security, CI/CD, and release engineering.",
  },
};

type Params = { slug: string };

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES[slug];
  if (!cs) return {};
  return { title: cs.title, description: cs.description };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const cs = CASE_STUDIES[slug];
  if (!cs) notFound();
  const Component = cs.component;
  return <Component />;
}
