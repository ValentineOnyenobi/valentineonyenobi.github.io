import { createFileRoute } from "@tanstack/react-router";
import { caseStudyPage } from "@/components/case-study-detail";

export const Route = createFileRoute("/projects/kajco-regulatory-risk-foundations")(
  caseStudyPage("kajco-regulatory-risk-foundations"),
);
