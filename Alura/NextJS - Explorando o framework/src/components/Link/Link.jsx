import React, { Children } from 'react'
import NextLink from 'next/link'

const LINK = ( { children, href, ...props } ) => {
    return (
        <NextLink href={href}>
            <a {...props}>
                {children}
            </a>
        </NextLink>
    )
}

export default LINK