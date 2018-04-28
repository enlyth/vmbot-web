import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import APIIcon from '@material-ui/icons/SettingsEthernet'
import SecurityIcon from '@material-ui/icons/Security'
import REPLIcon from '@material-ui/icons/RotateLeft'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/github.css'
const styles = theme => ({
  root: {
    width: '80%',
    margin: 'auto',
    marginTop: '1em',
    padding: '2em'
  }
})

function PaperSheet (props) {
  const { classes } = props
  return (
    <div>
      <Paper className={classes.root} elevation={2}>
        <Grid container spacing={12}>
          <Grid item xs={12} md={3}>
            <REPLIcon className="icon-feature" />
            <h3>REPL Style</h3>
          </Grid>
          <Grid style={{ textAlign: 'left' }} item xs={12} md={9}>
            <p>
              Every statement is implicitly returned, functioning similarly to a
              REPL.
              <Highlight language="javascript">
                {`const roll = (sides, mod) => '🎲' + Math.floor(Math.random()*sides + mod)\nroll(12, -2)`}
              </Highlight>
              <Highlight language="javascript">> {`🎲7`}</Highlight>
            </p>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.root} elevation={2}>
        <Grid container spacing={12}>
          <Grid item xs={12} md={3}>
            <APIIcon className="icon-feature" />
            <h3>Use Discord.js</h3>
          </Grid>
          <Grid style={{ textAlign: 'left' }} item xs={12} md={9}>
            <p>Use the Discord.js API and interact with live data with ease.</p>
            <Highlight language="javascript">
              {`[...client.guilds.keys()]`}
            </Highlight>
            <Highlight language="javascript">
              > {`[ '237116440329763633', '381523154617665556' ]`}
            </Highlight>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.root} elevation={2}>
        <Grid container spacing={12}>
          <Grid item xs={12} md={3}>
            <SecurityIcon className="icon-feature" />

            <h3>Secure Virtual Machine</h3>
          </Grid>
          <Grid style={{ textAlign: 'left' }} item xs={12} md={9}>
            <p>
              Although running arbitrary code has its quirks, vmbot does its
              best to contain any possible damage.
            </p>
            <Highlight language="javascript">{`process.exit()`}</Highlight>
            <Highlight language="javascript">
              > {`Error: process is not defined`}
            </Highlight>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PaperSheet)
