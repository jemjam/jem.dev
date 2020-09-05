import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document'

/**
 * Root page wrapper for Next
 * This is the main template where we can override the base HTML and Body
 * elements. We use this to set the lang attribute mainly.
 */

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                {/* 👆 entire template is here mostly for this 'en' value */}
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
