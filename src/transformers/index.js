const inline = require('./inline')
const minify = require('./minify')
const markdown = require('./markdown')
const prettify = require('./prettify')
const ensureSixHEX = require('./sixHEX')
const addURLParams = require('./urlParams')
const preventWidows = require('./preventWidows')
const safeClassNames = require('./safeClassNames')
const replaceStrings = require('./replaceStrings')
const applyBaseImageUrl = require('./baseImageURL')
const posthtmlContent = require('./posthtmlContent')
const removeUnusedCSS = require('./removeUnusedCSS')
const removeInlineSizes = require('./removeInlineSizes')
const applyExtraAttributes = require('./extraAttributes')
const removeInlineBgColor = require('./removeInlineBgcolor')
const removeAttributes = require('./posthtmlRemoveAttributes')

exports.process = async (html, config) => {
  html = await safeClassNames(html, config)
  html = await posthtmlContent(html, config)
  html = await markdown(html, config)
  html = await preventWidows(html)
  html = await inline(html, config)
  html = await removeUnusedCSS(html, config)
  html = await removeInlineSizes(html, config)
  html = await removeInlineBgColor(html, config)
  html = await removeAttributes(html, config)
  html = await applyExtraAttributes(html, config)
  html = await applyBaseImageUrl(html, config)
  html = await addURLParams(html, config)
  html = await ensureSixHEX(html, config)
  html = await prettify(html, config)
  html = await minify(html, config)
  html = await replaceStrings(html, config)

  return html
}
