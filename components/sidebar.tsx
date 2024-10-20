'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx'

export default function SideBar() {
    const pathname = usePathname()

    const links = [
        { href: '/', title: 'Home' },
        { href: '/about', title: 'About' },
        { href: '/customers', title: 'Customers' },
        { href: '/profile', title: 'Profile' },
    ]

    return (
        <>
            <div className="bg-gray-700 w-60 h-screen mr-4">
                <h1 className="text-2xl text-white bg-gray-600 text-center py-2">My App</h1>
                <div className="flex flex-col gap-2 text-white p-2">
                    {links.map((link, index) => (
                        <Link
                            href={link.href}
                            key={index}
                            className={clsx("bg-gray-600 px-4 py-2 rounded-md",
                                {
                                    'bg-blue-500': pathname === link.href
                                }
                            )}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}