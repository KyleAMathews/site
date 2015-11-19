view Social {
  <a target="_blank" href="http://github.com/flintjs/flint">
    <IconGithub />
  </a>
  <a if={!view.props.noSlack} href="/?slack" onClick={util.linkScroll}>
    <IconSlack />
  </a>
  <a target="_blank" href="https://twitter.com/flint_js">
    <IconTwitter />
  </a>

  $ = {
    height: 40,
    flexFlow: 'row',
    textAlign: 'center',
    fontSize: 16,
    margin: [5, 'auto', 0],
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  }

  $a = view.props.tiny ?  {
    margin: [0, 20],
    transform: {
      scale: 0.8
    }
  } : {
    margin: [0, 18, -10],
    transform: {
      scale: 0.9
    }
  }
}

view Body {
  <body yield />
}