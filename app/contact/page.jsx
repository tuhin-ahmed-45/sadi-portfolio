import { HomeIcon, MailIcon, PhoneCall } from 'lucide-react'
import ContactForm from './_components/ContactForm'

const ContactPage = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 my-12 md:my-24">
            {/* Info and Form Section */}
            <div className="grid gap-12 xl:grid-cols-2 xl:gap-24 mb-12 xl:mb-24">
                {/* Info */}
                <div className="flex flex-col gap-y-6 text-base sm:text-lg">
                    <div className="flex items-center gap-x-4 sm:gap-x-6">
                        <MailIcon size={20} className="text-primary" />
                        <div>gfsvoltmanager@gmail.com</div>
                    </div>
                    <div className="flex items-center gap-x-4 sm:gap-x-6">
                        <HomeIcon size={20} className="text-primary" />
                        <div>Narayanganj, Dhaka, Bangladesh</div>
                    </div>
                    <div className="flex items-center gap-x-4 sm:gap-x-6">
                        <PhoneCall size={20} className="text-primary" />
                        <div>+8801331402578</div>
                    </div>
                </div>

                {/* Form */}
                <ContactForm/>
            </div>
        </div>
    )
}

export default ContactPage
