# stunning-jsx-to-string-renderer

🎈 ☃️ 🎈 ⚡ 🎈 ️🍾 🎈 🗿 🎈

> Honestly it's not that stunning.
> Acutally it's very simple.
> And probably incorrect in some cases.

Just don't use it for anything serious and you will be fine.

## What?
You put in JSX and out comes HTML string.

```javascript
/** @jsx h */
const html = renderToString(
  <Fragment>
    <div class="text">This is <strong>amazing!</strong></div>
    <img src="wonderful-kittens.jpg" />
  </Fragment>
);

console.log(html); // '<div class="text">This is <strong>amazing!</strong></div><img src="wonderful-kittens.jpg"></img>'
```
