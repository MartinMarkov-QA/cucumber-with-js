const path = require("node:path");

module.exports = {
    default: {
        paths: [
            "src/tests/features/"
        ],
        dryRun: false,
        format: [
            "progress-bar",
            "summary",
            "json:reports/cucumber-report.json",
            "html:reports/cucumber-report.html"
        ],
        formatOptions: {
            colorEnabled: true,
            snippetInterface: "async-await"
        },
        require: [
            "src/tests/step_definitions/*.ts",
        ],
        requireModule: [
            "ts-node/register"
        ]
    }
}