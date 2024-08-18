import { glob as nodeGlob } from "glob";

// node-glob
{
    // all
    const allFiles = await nodeGlob("fixtures/**/*");
    // txt
    const txtFiles = await nodeGlob("fixtures/**/*.txt");
    // root file path
    const rootFilePath = await nodeGlob("fixtures/root/index.txt");
    const notFoundFilePath = await nodeGlob("fixtures/root/not-found.txt");
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
    console.log("notFoundFilePath", notFoundFilePath);
    console.log("childFiles", childFiles);
    console.log("childFilesIgnore", childFilesIgnore);
    console.log("childFilesIgnoreWithGlob", childFilesIgnoreWithGlob);
    
}
