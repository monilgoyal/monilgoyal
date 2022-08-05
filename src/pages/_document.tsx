import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class CustomDocument extends Document {
    render() {
        return <Html>
            <Head>
            </Head>
            <body className='dark'>
                <Main />
            </body>
            <NextScript />
        </Html>
    }
}