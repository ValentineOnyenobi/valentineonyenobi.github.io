import { createFileRoute } from "@tanstack/react-router";
import { caseStudyPage } from "@/components/case-study-detail";

export const Route = createFileRoute("/projects/business-strategy-growth-planning")(
  caseStudyPage("business-strategy-growth-planning"),
);
