# Starter

**By Mac**

- [Starter](#starter)
  - [Dependencies](#dependencies)
  - [Module Paths](#module-paths)
  - [Styling](#styling)
  - [Comments](#comments)
  - [Clean-Code](#clean-code)
  - [Commits](#commits)

## Dependencies

- Next
- React
- Typescript
- Styled Components
- SWR
- GraphQL

## Module Paths

You can access all needed folders using the following shortcuts

- Components: `@comps/*`
- Layout: `@layout/*`
- Documents: `@docs/*`
- User Interace: `@ui/*`
- Library: `@lib/*`
- Pages: `@pages/*`
- API: `@api/*`
- Styles: `@styles/*`
- Public Images: `@pub/*`
- Icons: `@ico/*`
- Images: `@imgs/*`

## Styling

**Theming** is managed in the `@styles/theme.ts` file, here you can edit base styles such as colors and fonts.

**Global styles** are crafted in styled components.

**Component Styles** are handled with Styled Components in order to create reusable components that are editable using JavaScript logic.

## Comments

Use the following standards across apps to ensure readable and informative comments

NOTE: If you install the `better-comments` plugin, the comment standards below will be highlighted and colorised based on the type of comment.

```
// * use singline line comments

/*
* or multiline comments
* * An asteriks at the start of the comment line highlights
* ! Use an exclamation point to display warnings
* ? Use to spark a question, to be answered
* TODO: Something that needs to be done within this code
* @param paramName is used to define what params are needed
*/
```

## Clean-Code

In order to ensure clean, consitent code, setup prettier as well as editor autosave and format on save, settings for vscode provided below.

```
"files.autoSave": "afterDelay",
"editor.tabSize": 2,
"prettier.arrowParens": "avoid",
"prettier.bracketSpacing": false,
"prettier.jsxBracketSameLine": true,
"prettier.jsxSingleQuote": true,
"prettier.trailingComma": "none",
"prettier.useTabs": true,
"prettier.semi": false,
"editor.formatOnSave": true,
```

## Commits

Good clean and informative commits are imperative to a project running successfuly, utilize the conventional-commits plugin in order to create consistent, uniform git commits.

Make sure to use branches when working on new features, this confirms there will be no breaking changes accidentaly pushed to the production branch.
