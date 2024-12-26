import SocialLink from "@/components/reusable/SocialLink"

const Footer = () => {
  return (
    <footer className="container mx-auto px-8 py-2 border-t-2"
    >
      <div className="flex items-center justify-center mt-3 space-x-5">
        <p className="text-center">© {new Date().getFullYear()} Fauzan Sadi. All rights reserved.</p>
        <SocialLink />
      </div>
    </footer>
  )
}

export default Footer