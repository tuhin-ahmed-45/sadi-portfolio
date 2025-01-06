'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRightIcon, Mail, MessageSquare, User } from 'lucide-react'
import { useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Email sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send email.");
            }
        } catch (error) {
            setStatus("An error occurred. Please try again.");
        }
    };

    return (
        <form className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
            <div className="relative flex items-center">
                <Input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <User className="absolute right-4 sm:right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Mail className="absolute right-4 sm:right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Textarea
                    id="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                />
                <MessageSquare className="absolute top-4 right-4 sm:right-6" size={20} />
            </div>
            <Button
                className="flex items-center justify-center gap-x-2 w-full sm:max-w-xs"
                type="submit"
            >
                Let&apos;s Talk
                <ArrowRightIcon size={20} />
            </Button>
            {status && <p className="text-sm mt-2">{status}</p>}
        </form>
    )
}

export default ContactForm