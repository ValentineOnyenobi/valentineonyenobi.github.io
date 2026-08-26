import { createFileRoute } from "@tanstack/react-router";
import { caseStudyPage } from "@/components/case-study-detail";

export const Route = createFileRoute("/projects/kajco-credit-trust-infrastructure")(
  caseStudyPage("kajco-credit-trust-infrastructure"),
);
