# Reproduce steps

- run `yarn` to install packages
- run `yarn build:dev` to get bundle
- inspect build output in *app.min.js*, color `greenyellow` can be found from the file
- go to file *_partial.scss* and change the background-color to `cyan`
- run `yarn build:dev` to get new bundle
- inspect build output in *app.min.js*, color `cyan` cannot be find from the output
