# Hi!

Those will be my notes from the React tutorial. Don't judge me too harshly.

First: extensions to install: Prettier and Simple React Snippets

Enable javascript for emmet abbreviations in settings.

App.css gets applied to the whole page, we can create a scoped css files for each of the components.

Styling inside the jsx will be done with {} inside the {} and it will be a key-value pair, with css property being in camel case instead hyhenated.

When passing an arrow func into for ex. button's onClick function, it can't be called: ~~`onCLik='handleClick()'`~~, instead, we go with `onCLik='handleClick'`, it would invoke this func right away if typed with `()`.

Invoking functs with args inside jsx requires an anonymous function: `onClick={() => {handleClickAction('Mario')}}`. Remember about the `{}` for the function body, without it we are passing the function reference I guess.

Variables if changed in a simple way with reassignment will not change on the template, since those are not reactive. React does not care about the changes in those.

To fix this, we are using hooks. They start with word `use`.

When iterating with `map()` function, every template needs to have a `key` variable. It is used to distinguish between different list items in the dom. Ids must be unique.

Note: for Prettier to work, you need to set the `Default Formatter` option, as well as `format on save` in settings.
