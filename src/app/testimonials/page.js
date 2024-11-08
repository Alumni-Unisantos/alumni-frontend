import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer";
import Testimonial from "~/components/Section/Common/Testimonial";
import HomeHeader from "~/components/Section/Common/Header/HomeHeader";

export default function TestimonialPage() {
  return (
    <>
      <HomeHeader />
      <PageHeader title="Depoimentos" />
      <Testimonial button="false" />
      <Footer />
    </>
  );
}
