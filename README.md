# Pop

Write new utils using `.ts` files instead of `.js` files and
libkit will take care of making things work.

The normal Ember CLI workflows work:

- `ember test -s` to run your tests in Node and in the browser
- `ember s` to serve your tests for use in a browser directly
- `ember init` to upgrade devkit
- `ember build` and `ember build -prod` to build your package

## Builing for release

1. `yarn run prepack`
2. commit work and push for pr.
3. tag and release through github ui. TODO: look into something like [np](https://github.com/sindresorhus/np) someday.
