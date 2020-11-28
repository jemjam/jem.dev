interface Redirect {
    source: string
    destination: string
    permanent?: boolean
}

interface RedirectFactory {
    (source: string, destination: string, permanent?: boolean): Redirect
}

interface pathsFunction {
    (): Array<Redirect>
}

const pathRedirects: pathsFunction = () => {
    return 'haha'
}
export default pathRedirects
