/**
 * @typedef NextRedirect
 * @property {string} source Redirecting FROM this path
 * @property {string} destination Redirecting TO this path
 * @property {boolean} permanent Is this redirect permanent?
 */
/**
 * Set path redirects, see https://nextjs.org/docs/api-reference/next.config.js/redirects
 * @type Array<NextRedirect>
 */
const redirects = [
    {
        source: '/100days/:slug*',
        destination: '/notes/100days/:slug*',
        permanent: true,
    },
    { source: '/whois', destination: '/about', permanent: true },
    {
        source: '/conf/cascadiaja/:rest*',
        destination: '/notes/conf/cascadiajs/:rest*',
        permanent: true,
    },
]

module.exports = async () => {
    return redirects
}
