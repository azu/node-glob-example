import fastGlob from "fast-glob";

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
