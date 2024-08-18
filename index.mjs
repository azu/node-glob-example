import { glob as fsPromisesGlob } from "node:fs/promises"
import path from "node:path";
import { glob as nodeGlob } from "glob";
import fastGlob from "fast-glob";

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
    const childFilesIgnoreWithGlob = fsPromisesGlob(["fixtures/**/*", "!fixtures/root/child-*/**/*"]);
    console.log("# fs/promises glob");
    console.log("------------------");
    console.log("allFiles", await Array.fromAsync(allFiles));
    console.log("txtFiles", await Array.fromAsync(txtFiles));
    console.log("rootFilePath", await Array.fromAsync(rootFilePath));
    console.log("childFiles", await Array.fromAsync(childFiles));
    console.log("childFilesIgnore", (await Array.fromAsync(childFilesIgnore, dirent => {
        return path.relative(cwd, path.join(dirent.parentPath, dirent.name))
    })));
    console.log("childFilesIgnoreWithGlob", (await Array.fromAsync(childFilesIgnoreWithGlob)));
}

// node-glob
{
    // all
    const allFiles = await nodeGlob("fixtures/**/*");
    // txt
    const txtFiles = await nodeGlob("fixtures/**/*.txt");
    // root file path
    const rootFilePath = await nodeGlob("fixtures/root/index.txt");
    // child files
    const childFiles = await nodeGlob("fixtures/root/child-*/**/*");
    // ignore child-y
    const childFilesIgnore = await nodeGlob(["fixtures/**/*"], {
        ignore: ["fixtures/root/child-*/**/*"]
    });
    const childFilesIgnoreWithGlob = await nodeGlob(["fixtures/**/*", "!fixtures/root/child-*/**/*"]);
    console.log("# node-glob");
    console.log("-----------");
    console.log("allFiles", allFiles);
    console.log("txtFiles", txtFiles);
    console.log("rootFilePath", rootFilePath);
    console.log("childFiles", childFiles);
    console.log("childFilesIgnore", childFilesIgnore);
    console.log("childFilesIgnoreWithGlob", childFilesIgnoreWithGlob);
    
}

// fast-glob
{
    // all
    const allFiles = await fastGlob("fixtures/**/*");
    // txt
    const txtFiles = await fastGlob("fixtures/**/*.txt");
    // root file path
    const rootFilePath = await fastGlob("fixtures/root/index.txt");
    // child files
    const childFiles = await fastGlob("fixtures/root/child-*/**/*");
    // ignore child-y
    const childFilesIgnore = await fastGlob(["fixtures/**/*"], {
        ignore: ["!fixtures/root/child-y/**/*"]
    });
    const childFilesIgnoreWithGlob = await fastGlob(["fixtures/**/*", "!fixtures/root/child-y/**/*"]);
    console.log("# fast-glob");
    console.log("------------");
    console.log("allFiles", allFiles);
    console.log("txtFiles", txtFiles);
    console.log("rootFilePath", rootFilePath);
    console.log("childFiles", childFiles);
    console.log("childFilesIgnore", childFilesIgnore);
    console.log("childFilesIgnoreWithGlob", childFilesIgnoreWithGlob);
}
