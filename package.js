Package.describe({
    name: "leogaletti:simplecrud",
    version: "0.0.9",
    // Brief, one-line summary of the package.
    summary: "Create a simple CRUD based on Collection",
    // URL to the Git repository containing the source code for this package.
    git: "",
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: "README.md",
});

Npm.depends({
    "prop-types": "15.7.2",
    react: "16.13.0",
});

Package.onUse(function (api) {
    api.versionsFrom("1.10.2");
    api.use("ecmascript");
    api.mainModule("src/simplecrud.js", "client");
    api.export(["SimpleCrud"]);
});

// Package.onTest(function (api) {
//     api.use("ecmascript");
//     api.use("tinytest");
//     api.use("leogaletti:simplecrud");
//     api.mainModule("src/simplecrud-tests.js");
// });
