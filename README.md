# stunning-jsx-renderer

🎈 ☃️ 🎈 ⚡ 🎈 ️🍾 🎈 🗿 🎈

> Honestly it's not that stunning.
>
> Acutally it's very simple.
>
> And probably incorrect in some cases.

Just don't use it for anything serious and you will be fine.

## What?
You put in JSX and out comes HTML string.

```javascript
/** @jsx createElement */
const { renderToString, createElement } = require('./src/server-side');

const html = renderToString(
  <Fragment>
    <div class="text">This is <strong>amazing!</strong></div>
    <img src="wonderful-kittens.jpg" />
  </Fragment>
);

console.log(html); // '<div class="text">This is <strong>amazing!</strong></div><img src="wonderful-kittens.jpg"></img>'
```

There's also client-side version:

```javascript
/** @jsx createElement */

domRender(
  <div class="text">This is <strong>amazing!</strong></div>
  document.body
);

console.log(document.body.innerHTML); // '<div class="text">This is <strong>amazing!</strong></div>'
```

## Why?
I don't know, just wanted to try to figure out how JSX and [ReactDOMServer#RenderToStaticMarkup](https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup) and [ReactDOM#render](https://reactjs.org/docs/react-dom.html#render) works I guess?
