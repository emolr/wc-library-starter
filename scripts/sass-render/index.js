const fs = require('fs');
const util = require('util');

const sass = require('sass');
const nodeSassImport = require('node-sass-import');

const renderSass = util.promisify(sass.render);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const delim = /<%\s*content\s*%>/;

async function sassToCss(sassFile) {
  const result = await renderSass({
    file: sassFile,
    importer: nodeSassImport,
    outputStyle: 'compressed',
  });
  return result.css.toString();
}

async function sassRender(sourceFile, templateFile, outputFile) {
  const template = await readFile(templateFile, 'utf-8');
  const match = delim.exec(template);
  if (!match) {
    throw new Error(`Template file ${templateFile} did not contain template delimiters`);
  }
  const replacement = await sassToCss(sourceFile);
  const newContent = template.replace(delim, replacement);
  return writeFile(outputFile, newContent, 'utf-8');
}

exports.sassRender = sassRender;