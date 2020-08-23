function createElement(nodeName, props, ...args) {
  const children = args.length ? [].concat(...args) : null;

  return typeof nodeName === 'function'
    ? nodeName({ ...props, children })
    : { nodeName, props, children };
}

function domRender(element, container) {
  container.innerHTML = '';
  container.appendChild(createDomElementFromVNode(element));
}

function createDomElementFromVNode(vnode) {
  if (!vnode.nodeName) return document.createTextNode(vnode.toString());

  const el = document.createElement(vnode.nodeName);

  const props = vnode.props || {};
  Object.keys(props).forEach(key => el.setAttribute(key, props[key]));

  const children = (vnode.children || [])
    .map(createDomElementFromVNode)
    .forEach(child => el.appendChild(child));

  return el;
}
