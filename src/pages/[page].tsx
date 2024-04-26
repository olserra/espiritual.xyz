import React from "react";
import { useRouter } from "next/router";
import LandingPageLayout from "@/components/Layout";
import { Faq } from "@/components/Faq";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { TermsOfService } from "@/components/TermsOfService";
import { Chat } from "@/components/Chat";

const PageContent = {
  faq: <Faq />,
  "privacy-policy": <PrivacyPolicy />,
  "terms-of-service": <TermsOfService />,
  chat: <Chat />,
};

const DynamicPage = () => {
  const router = useRouter();
  const { page } = router.query;

  const content = PageContent[page as keyof typeof PageContent] || (
    <div>Page not found</div>
  );

  return (
    <LandingPageLayout title={page as string}>{content}</LandingPageLayout>
  );
};

export default DynamicPage;
