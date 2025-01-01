import SocialLink from "@/components/reusable/SocialLink";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 border-t mt-5">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 sm:space-x-5">
        <p className="text-center sm:text-left text-sm">
          © {new Date().getFullYear()} Fauzan Sadi. All rights reserved.
        </p>
        <SocialLink />
      </div>
    </footer>
  );
};

export default Footer;
