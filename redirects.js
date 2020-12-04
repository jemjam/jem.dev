const redirects = [
    {
        source: '/100days/:slug*',
        destination: '/notes/100days/:slug*',
        permanent: true,
    },
    { source: '/whois', destination: '/about', permanent: true },
]

module.exports = async () => {
    return redirects
}
