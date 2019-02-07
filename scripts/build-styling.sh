#!/usr/bin/env bash

set -e

sassfiles=(`find packages -name "*.scss"`)

for sassfile in ${sassfiles[@]}; do
    #skip partials
    if [[ `basename ${sassfile}` =~ ^_ ]]; then
        continue
    fi
    outputfile=`echo ${sassfile} | sed -e "s/.scss/.css.ts/"`
    parentdir=`basename $(dirname ${outputfile})`
    # skip scss files outside of src folders
    if [[ ${parentdir} != "src" ]]; then
        continue
    fi
    echo "Generating ${outputfile}"
    node scripts/sass-render/bin/sass-render.js -t sass-template.tmpl -s ${sassfile} -o ${outputfile}
done;