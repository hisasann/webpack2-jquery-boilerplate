webpack2-jquery-boilerplate
==========================

> Webpack 2 with Babel, Sass, jQuery and lodash on board

# Requirements

You need <b>node.js</b> and <b>yarn</b> pre-installed and you’re good to go.

* node.js
* yarn


# Install

```bash
$ yarn
```

or

```bash
$ yarn install
```


# Run

Run the local webpack-dev-server with livereload and autocompile on [http://localhost:3000/](http://localhost:3000/)

```bash
$ npm run dev
```


# Deployment

Build the current application

```bash
$ npm run build
```


# Lint

```bash
$ npm run lint
```


## Externals

If you use any 3rd party libraries which can't be built with webpack, you must list them in your `webpack.config.base.js`：

```javascript
externals: [
  // put your node 3rd party libraries which can't be built with webpack here (mysql, mongodb, and so on..)
]
```

You can find those lines in the file.


## Maintainers

- [hisasann](https://github.com/hisasann)

## License
MIT © [hisasann](https://github.com/hisasann)
