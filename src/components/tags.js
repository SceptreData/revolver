import React from "react"

import { removeWhiteSpace } from "./util"

export { buildTags }

function buildTags(tags) {
  return tags
    .map(rawTag => {
      const tag = cleanTag(rawTag)
      if (tag.length > 0) {
        return <li key={`tag-${tag}`}>{`#${tag}`}</li>
      }
      return null
    })
    .filter(elt => elt !== undefined)
}

// Strip spaces and # characters from our tags.
function cleanTag(tag) {
  let clean = tag.replace("#", "")
  return removeWhiteSpace(clean)
}
