'use strict'

module.exports = {
  headerPattern: /^(?:.+\s+)?(\w*)(?:\((.*)\))?: (.*)$/,
  headerCorrespondence: [
    `type`,
    `scope`,
    `subject`
  ],
  noteKeywords: [`BREAKING CHANGE`],
  revertPattern: /^(?:.+\s)?revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
  revertCorrespondence: [`header`, `hash`]
}
