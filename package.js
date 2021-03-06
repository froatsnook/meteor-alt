Package.describe({
    summary: "A flux implementation, packaged for meteor",
    version: "0.17.3",
    git: "https://github.com/froatsnook/meteor-alt.git",
    name: "froatsnook:alt",
});

Package.onUse(function(api) {
    api.versionsFrom("METEOR@0.9.0.1");
    api.use("react-runtime@0.0.0");
    api.addFiles("lib/00-alt.js", ["client"]);
    api.addFiles("lib/01-meteor-alt.js", ["client"]);
    api.export("Alt", ["client"]);
    api.export("alt", ["client"]);
});

Package.onTest(function(api) {
    api.use("tinytest");
    api.use("froatsnook:alt");

    api.addFiles("test/alt-tests.js", ["client"]);
});

