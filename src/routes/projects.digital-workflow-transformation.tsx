import { createFileRoute } from "@tanstack/react-router";
import { caseStudyPage } from "@/components/case-study-detail";

export const Route = createFileRoute("/projects/digital-workflow-transformation")(
  caseStudyPage("digital-workflow-transformation"),
);
