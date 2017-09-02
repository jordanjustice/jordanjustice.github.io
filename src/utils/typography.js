import Typography from 'typography'
import Bootstrap from 'typography-theme-bootstrap'
Bootstrap.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    color: '#fd7c6e'
  },
  'a:visited': {
    color: '#bfafb2'
  }
})

const typography = new Typography(Bootstrap)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
