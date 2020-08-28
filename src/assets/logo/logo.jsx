import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles(() => createStyles({
  svg: {
    height: '100%',
    width: 'auto'
  }
}
))
const Logo = () => {
  const classes = useStyles()

  return (
    <svg className={classes.svg} height={24} viewBox='0 0 24 24' width={24}>
      <path d='M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z' />
    </svg>
  )
}

export { Logo }