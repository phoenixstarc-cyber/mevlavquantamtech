# Delete old ui folder
rm -rf src/components/ui

# Add all changes
git add .

# Commit
git commit -m "Fix build - remove all Shadcn dependencies"

# Push
git push