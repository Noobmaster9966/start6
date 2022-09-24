import React from 'react'
// import PropTypes from 'prop-types'

export default function Alert(props) {
  return (
   <div style = {{height:'60px',backgroundColor: props.mode==='dark'?'black':'white'}}>
      {props.alert&&<div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">{props.alert.msg}
</div>}
</div>
  )
}
