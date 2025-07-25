
import { GetStaticProps } from 'next';
import { NextSeo } from "next-seo";
import HeaderSection from "@/components/logo-generator/HeaderSection";
import GeneratorSection from "@/components/logo-generator/GeneratorSection";
import WhyChooseSection from "@/components/logo-generator/WhyChooseSection";
import HowItWorksSection from "@/components/logo-generator/HowItWorksSection";
import FAQ from "@/components/logo-generator/FAQ";

const LogoGenerator = () => {
  return (
    <>
      <NextSeo
        title="Free AI Logo Generator - Create Professional Logos Instantly"
        description="Create unique, professional logos in seconds with our AI-powered logo generator. No design skills needed—just describe your ideal logo and let AI do the work!"
        canonical="https://aiimagegenerator.site/logo-generator/"
        openGraph={{
          url: "https://aiimagegenerator.site/logo-generator/",
          title: "Free AI Logo Generator - Create Professional Logos Instantly",
          description: "Create unique, professional logos in seconds with our AI-powered logo generator. No design skills needed—just describe your ideal logo and let AI do the work!",
          images: [
            {
              url: "https://aiimagegenerator.site/og-image.png",
              width: 1200,
              height: 630,
              alt: "AI Logo Generator"
            }
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeaderSection />
        <div className="max-w-3xl mx-auto">
          <GeneratorSection />
        </div>
        <WhyChooseSection />
        <HowItWorksSection />
        <FAQ />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 86400,
  };
};

export default LogoGenerator;
