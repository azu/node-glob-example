# Glob Examples

- Node.js [fs/promises glob](https://nodejs.org/api/fs.html#fspromisesglobpattern-options)
- https://github.com/isaacs/node-glob
- https://github.com/mrmlnc/fast-glob

```bash
$ node index.mjs
# fs/promises glob
------------------
(node:23129) ExperimentalWarning: glob is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
allFiles [
  'fixtures/root',
  'fixtures/root/child-x',
  'fixtures/root/child-y',
  'fixtures/root/index.txt',
  'fixtures/root/child-y/child-y-1.txt',
  'fixtures/root/child-y/child-y-2.txt',
  'fixtures/root/child-x/child-x-1.txt',
  'fixtures/root/child-x/child-x-2.txt'
]
txtFiles [
  'fixtures/root/index.txt',
  'fixtures/root/child-y/child-y-1.txt',
  'fixtures/root/child-y/child-y-2.txt',
  'fixtures/root/child-x/child-x-1.txt',
  'fixtures/root/child-x/child-x-2.txt'
]
rootFilePath [ 'fixtures/root/index.txt' ]
childFiles [
  'fixtures/root/child-y/child-y-1.txt',
  'fixtures/root/child-y/child-y-2.txt',
  'fixtures/root/child-x/child-x-1.txt',
  'fixtures/root/child-x/child-x-2.txt'
]
childFilesIgnore [
  'fixtures/root',
  'fixtures/root/child-x',
  'fixtures/root/child-y',
  'fixtures/root/index.txt',
  'fixtures/root/child-y/child-y-1.txt',
  'fixtures/root/child-y/child-y-2.txt',
  'fixtures/root/child-x/child-x-1.txt',
  'fixtures/root/child-x/child-x-2.txt'
]
childFilesIgnoreWithGlob [
  'fixtures/root',
  'fixtures/root/child-x',
  'fixtures/root/child-y',
  'fixtures/root/index.txt',
  'fixtures/root/child-y/child-y-1.txt',
  'fixtures/root/child-y/child-y-2.txt',
  'fixtures/root/child-x/child-x-1.txt',
  'fixtures/root/child-x/child-x-2.txt'
]
# node-glob
-----------
allFiles [
  'fixtures/root',
  'fixtures/root/index.txt',
  'fixtures/root/child-y',
  'fixtures/root/child-x',
  'fixtures/root/child-y/child-y-2.txt',
  'fixtures/root/child-y/child-y-1.txt',
  'fixtures/root/child-x/child-x-2.txt',
  'fixtures/root/child-x/child-x-1.txt'
]
txtFiles [
  'fixtures/root/index.txt',
  'fixtures/root/child-y/child-y-2.txt',
  'fixtures/root/child-y/child-y-1.txt',
  'fixtures/root/child-x/child-x-2.txt',
  'fixtures/root/child-x/child-x-1.txt'
]
rootFilePath [ 'fixtures/root/index.txt' ]
childFiles [
  'fixtures/root/child-x/child-x-2.txt',
  'fixtures/root/child-x/child-x-1.txt',
  'fixtures/root/child-y/child-y-2.txt',
  'fixtures/root/child-y/child-y-1.txt'
]
childFilesIgnore [
  'fixtures/root',
  'fixtures/root/index.txt',
  'fixtures/root/child-y',
  'fixtures/root/child-x'
]
childFilesIgnoreWithGlob [
  'fixtures/root',
  'fixtures/root/index.txt',
  'fixtures/root/child-y',
  'fixtures/root/child-x',
  'fixtures/root/child-x/child-x-2.txt',
  'fixtures/root/child-x/child-x-1.txt',
  'fixtures/root/child-y/child-y-2.txt',
  'fixtures/root/child-y/child-y-1.txt'
]
# fast-glob
------------
allFiles [
  'fixtures/root/index.txt',
  'fixtures/root/child-y/child-y-1.txt',
  'fixtures/root/child-y/child-y-2.txt',
  'fixtures/root/child-x/child-x-1.txt',
  'fixtures/root/child-x/child-x-2.txt'
]
txtFiles [
  'fixtures/root/index.txt',
  'fixtures/root/child-x/child-x-1.txt',
  'fixtures/root/child-x/child-x-2.txt',
  'fixtures/root/child-y/child-y-1.txt',
  'fixtures/root/child-y/child-y-2.txt'
]
rootFilePath [ 'fixtures/root/index.txt' ]
childFiles [
  'fixtures/root/child-x/child-x-1.txt',
  'fixtures/root/child-x/child-x-2.txt',
  'fixtures/root/child-y/child-y-1.txt',
  'fixtures/root/child-y/child-y-2.txt'
]
childFilesIgnore [
  'fixtures/root/index.txt',
  'fixtures/root/child-x/child-x-1.txt',
  'fixtures/root/child-x/child-x-2.txt'
]
childFilesIgnoreWithGlob [
  'fixtures/root/index.txt',
  'fixtures/root/child-x/child-x-1.txt',
  'fixtures/root/child-x/child-x-2.txt'
]

```
