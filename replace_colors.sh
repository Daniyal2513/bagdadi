#!/bin/bash

FILES=$(find src/components src/pages src/App.tsx -name "*.tsx")

for file in $FILES; do
  # Replace rgba(8,28,21,... with rgba(var(--bg-deep-rgb),...
  sed -i 's/rgba(8,28,21,/rgba(var(--bg-deep-rgb), /g' "$file"
  
  # Replace #081C15 with var(--bg-deep)
  sed -i "s/'#081C15'/'var(--bg-deep)'/g" "$file"
  
  # Replace rgba(13,35,24,... with rgba(var(--bg-mid-rgb),...
  sed -i 's/rgba(13,35,24,/rgba(var(--bg-mid-rgb), /g' "$file"
  
  # Replace #0D2318 with var(--bg-mid)
  sed -i "s/'#0D2318'/'var(--bg-mid)'/g" "$file"
  
  # Replace rgba(240,237,230,... with rgba(var(--text-main-rgb),...
  sed -i 's/rgba(240,237,230,/rgba(var(--text-main-rgb), /g' "$file"
  
  # Replace #F7F4EF with var(--text-main)
  sed -i "s/'#F7F4EF'/'var(--text-main)'/g" "$file"
  
  # Replace #050F0A with var(--bg-darker)
  sed -i "s/'#050F0A'/'var(--bg-darker)'/g" "$file"
  
  # Replace rgba(255,255,255,... with rgba(var(--overlay-rgb),...
  sed -i 's/rgba(255,255,255,/rgba(var(--overlay-rgb), /g' "$file"
  
done
