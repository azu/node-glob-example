import { glob as fsPromisesGlob } from "node:fs/promises"
import path from "node:path";

const cwd = process.cwd();
{
    // all
    const allFiles = fsPromisesGlob("fixtures/**/*");
    // txt
    const txtFiles = fsPromisesGlob("fixtures/**/*.txt");
    // root file path
    const rootFilePath = fsPromisesGlob("fixtures/root/index.txt");
    // child files
    const childFiles = fsPromisesGlob("fixtures/root/child-*/**/*");
    // ignore child-y
    const excludes = ["**/fixtures/root/child-*/**/*"];
    const childFilesIgnore = fsPromisesGlob(["fixtures/**/*"], {
        // if return true, it will be excluded
        exclude(dirent) {
            const filePath = path.join(dirent.parentPath, dirent.name);
            const isExcluded = excludes.some(exclude => path.matchesGlob(filePath, exclude));
            return isExcluded;
        },
        withFileTypes: true,
    });
    const childFilesIgnoreWithGlob = fsPromisesGlob(["fixtures/**/*", "!**/fixtures/root/child-*/**/*"], {
        withFileTypes: true,
    });
    console.log("# fs/promises glob");
    console.log("------------------");
    console.log("allFiles", await Array.fromAsync(allFiles));
    console.log("txtFiles", await Array.fromAsync(txtFiles));
    console.log("rootFilePath", await Array.fromAsync(rootFilePath));
    console.log("childFiles", await Array.fromAsync(childFiles));
    console.log("childFilesIgnore", (await Array.fromAsync(childFilesIgnore, dirent => {
        return path.relative(cwd, path.join(dirent.parentPath, dirent.name))
    })));
    console.log("childFilesIgnoreWithGlob", (await Array.fromAsync(childFilesIgnore, dirent => {
        return path.relative(cwd, path.join(dirent.parentPath, dirent.name))
    })));
}
