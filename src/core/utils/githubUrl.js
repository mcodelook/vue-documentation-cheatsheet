const GITHUB_BASE_URL =
    'https://github.com/mcodelook/vue-documentation-cheatsheet/tree/main'

export function getGithubUrl(filePath) {
    if (!filePath) return GITHUB_BASE_URL // Add fallback
    // Remove the absolute path part and keep only the relative path from src
    const relativePath = filePath.split('src/').pop()
    return `${GITHUB_BASE_URL}/src/${relativePath}`
}
