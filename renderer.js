function h(nodeName, props, ...args) {
  const children = args.length ? [].concat(...args) : null;

  return typeof nodeName === 'function'
    ? nodeName({ ...props, children })
    : { nodeName, props, children };
}

function renderToString(vnode) {
  if (!vnode.nodeName) return vnode.toString();

  const { nodeName } = vnode;

  const props = vnode.props || {};
  const attributes = Object.keys(props).reduce((acc, key) => `${acc} ${key}="${props[key]}"`, '');

  const children = (vnode.children || []).map(renderToString).join('');

  return nodeName === 'Fragment'
    ? children
    : `<${nodeName}${attributes}>${children}</${nodeName}>`;
}

module.exports = { renderToString, h };
