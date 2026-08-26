import { createFileRoute } from "@tanstack/react-router";
import { caseStudyPage } from "@/components/case-study-detail";

export const Route = createFileRoute("/projects/project-reporting-compliance")(
  caseStudyPage("project-reporting-compliance"),
);
