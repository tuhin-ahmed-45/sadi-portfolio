import { socialLinks } from '@/constants'
import Link from 'next/link'

const SocialLink = () => {
    return (
        <div className="flex space-x-4">
            {socialLinks?.map(({ id, icon: Icon, href }) => (
                <Link
                    key={id}
                    href={href}
                    target="_blank"
                    className="border-[0.5px] border-primary dark:border-primary-foreground rounded-full p-2 hover:bg-primary hover:text-white transition-colors"
                    aria-label={`Visit ${id}`}
                >
                    <Icon className="h-5 w-5" />
                </Link>
            ))}
        </div>
    )
}

export default SocialLink