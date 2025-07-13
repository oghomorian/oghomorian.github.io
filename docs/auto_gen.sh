#!/bin/bash

# index.md 수정
title_line=$(grep '^title:' current/index.md)
if [[ -z "$title_line" ]]; then
  echo "Error: No title found in current index.md"
  exit 1
fi

title_text=$(echo "$title_line" | sed 's/title: *//' | tr ' ' '_' | tr -d '\r')
tmpfile=$(mktemp)
grep -vE '^(permalink:|nav_order:)' current/index.md > "$tmpfile"

mkdir -p _records
mv "$tmpfile" "_records/${title_text}.md"
rm -f current/index.md

# upcoming.md 수정
if [ -f "upcoming.md" ]; then
  sed -e 's|^permalink:.*|permalink: /current/|' -e 's|^nav_exclude:.*|nav_order: 2|' upcoming.md > current/index.md
  rm -f upcoming.md
else
  echo "Error: upcoming.md not found"
fi

cat <<EOF > upcoming.md
---
title:
layout: default
nav_exclude: true
has_toc: false
permalink: /upcoming/
---
EOF

echo "DONE"

