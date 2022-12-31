set -e

# 构建
npm run build

# 进入构建文件夹
cd dist

# 放置 .nojekyll 以绕过 Jekyll 的处理。
echo > .nojekyll


git init
git checkout -B main
git add -A
git commit -m 'deploy'

git push -f https://github.com/czh-98/REALY_homepage.git main:gh-pages

cd -