import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About us | Name of website',
    description: 'TA lot of keywords',
    keywords: ['about', 'information', 'nextjs'],
    twitter: {
        card: 'summary_large_image',
        title: 'About us | Twitter',
    },
}

export default function About() {
    return <div>About page</div>
}