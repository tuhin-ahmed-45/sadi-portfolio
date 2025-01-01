import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRightIcon, HomeIcon, Mail, MailIcon, MessageSquare, PhoneCall, User } from 'lucide-react'

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
                <form className="flex flex-col gap-y-6">
                    <div className="relative flex items-center">
                        <Input type="name" id="name" placeholder="Name" />
                        <User className="absolute right-4 sm:right-6" size={20} />
                    </div>
                    <div className="relative flex items-center">
                        <Input type="email" id="email" placeholder="Email" />
                        <Mail className="absolute right-4 sm:right-6" size={20} />
                    </div>
                    <div className="relative flex items-center">
                        <Textarea id="message" placeholder="Message" />
                        <MessageSquare className="absolute top-4 right-4 sm:right-6" size={20} />
                    </div>
                    <Button className="flex items-center justify-center gap-x-2 w-full sm:max-w-xs">
                        Let&apos;s Talk
                        <ArrowRightIcon size={20} />
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage
