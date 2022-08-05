import Head from 'next/head'
import React from 'react'

type headerType = {
    title: string;
    header_content: string;
}

function Header(props: headerType) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.header_content} />

        </Head>
    )
}

Header.defaultProps = {
    title: "Monil Goyal",
    header_content: "Monil Goyal"
}

export default Header