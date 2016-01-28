#!/bin/bash
LC_CTYPE=C LANG=C find . -type f | grep -v .git | grep -v renameCFS | xargs -I xxxxx sed -i '' 's/cfs:/chriscinelli:/g' xxxxx
