import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties } from "react"

interface ActiveLinkProps {
    href: string,
    text: string
}

const STYLE:CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink = ({href, text}: ActiveLinkProps) => {
    const {asPath} = useRouter();

    return (
        <Link href={ href } legacyBehavior={ true }>
            <a style={ asPath === href ? STYLE : undefined }>{text}</a>
        </Link>
    )
}
