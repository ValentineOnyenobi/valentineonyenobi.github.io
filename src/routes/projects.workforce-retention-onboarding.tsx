import { createFileRoute } from "@tanstack/react-router";
import { caseStudyPage } from "@/components/case-study-detail";

export const Route = createFileRoute("/projects/workforce-retention-onboarding")(
  caseStudyPage("workforce-retention-onboarding"),
);
