export default function filePathPlugin() {
    return {
      name: 'vite-file-path-plugin',
      transformIndexHtml(html) {
        return html
      },
      transform(code, id) {
        if (id.endsWith('.vue')) {
          const relativePath = id.split('src/').pop()
          return {
            code: `const COMPONENT_PATH = '${relativePath}';\n${code}`,
            map: null
          }
        }
      }
    }
  }