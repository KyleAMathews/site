view Code {
  function clean(src) {
    if (!src) return
    let arr = src.split("\n")
    arr.shift()

    return arr
      .map(l => l.slice(6))
      .join("\n")
  }

  on('mount', () => {
    highlight.highlightBlock(view.refs.code)
  })

  <pre>
    <code ref="code" class={view.props.lang || 'javascript'}>
      {clean(view.props.source)}
    </code>
  </pre>

  $pre = {
    background: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0 0 4px rgba(0,0,0,0.05)',
    padding: 10,
    margin: [10, 0],
    borderRadius: 4
  }

  $code = {
    border: 'none',
    padding: 0,
    margin: 0,
    lineHeight: 1.4,
    fontSize: 15,
  }
}