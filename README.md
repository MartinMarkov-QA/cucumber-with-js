# BDD Test Automation Architecture: Cucumber, Gherkin, Playwright, and TypeScript

```mermaid
flowchart TD
    A["npm run test"] --> B["Cucumber runner"]
    B --> C["cucumber.js<br/>Configuration"]
    C --> D["Gherkin feature file<br/>Describes expected behavior"]
    B --> E["TypeScript step definitions<br/>Connect steps to code"]

    D -->|"Cucumber matches each step"| E

    B --> F["Hooks and World<br/>Scenario setup and context"]
    F --> G["Browser"]
    G --> H["Browser Context<br/>Isolated session"]
    H --> I["Page"]

    E --> J["Page Objects<br/>Actions for application pages"]
    J --> I
    I --> K["Your application"]

    E --> L["Assertions"]
    L -->|"Scenario result: passed or failed"| B
```

## How to read the diagram

- **Gherkin feature file** describes expected behavior in readable language.
- **Cucumber** runs scenarios and matches each Gherkin step to a TypeScript step definition.
- **Step definitions** connect those steps to test code.
- **Hooks and World** prepare and hold the context for a scenario. For example, a `Before` hook can create a page, and an `After` hook can close it.
- **Page Objects** collect the locators and actions for application pages.
- **Playwright** controls the browser through `Browser`, `Browser Context`, and `Page`.
- **Assertions** check whether the application behaved as expected.

In this architecture, **Cucumber is the test runner**, and **Playwright controls the browser**. We are not using the Playwright Test runner; each tool has a separate responsibility.