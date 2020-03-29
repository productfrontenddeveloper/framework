const posthtml = require('posthtml')
const safeClassNames = require('posthtml-safe-class-names')

module.exports = async (html, config) => {
  if (config.env !== 'local') {
    const replacements = config.cleanup && config.cleanup.safeClassNames ? config.cleanup.safeClassNames : {}
    html = await posthtml([safeClassNames({ replacements: replacements })]).process(html).then(result => result.html)
  }

  return html
}
