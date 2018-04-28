import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import '../App.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#444',
      main: '#333',
      dark: '#222',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: "'Lato', 'Helvetica', sans-serif"
  }
})

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  logoText: {
    color: '#fff',
    marginLeft: 0,
    marginRight: 0,
    fontSize: '26px !important',
    fontFamily: "'Josefin Sans', 'Helvetica', sans-serif"
  }
}

function NavBar (props) {
  const { classes } = props
  const githubIcon = {
    width: '18px',
    height: '18px',
    backgroundImage: 'url(static/GitHub-Mark-Light-32px.png)',
    backgroundSize: 'contain'
  }

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.logoText} color="inherit" aria-label="Menu">
              vmbot<sup
                style={{ fontSize: '.32em', marginLeft: 4, fontFamily: 'Lato' }}
              >
                ALPHA
              </sup>
            </div>
            <div className={classes.flex} />
            <Button href="https://github.com/enlyth/vmbot" className="button-g1">
              <div style={githubIcon} />&nbsp;GitHub
            </Button>&nbsp;&nbsp;
            <Button href="https://github.com/enlyth/vmbot/blob/master/readme.md" className="button-g1">Docs</Button>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  )
}
NavBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavBar)
