import React from 'react'
import B from './B'
import C from './C'

export default function A(props) {
  return (
    <div>
        This is A
        <B sharedInfo={ props.sharedInfo }/>
        <C sharedInfo={ props.sharedInfo }/>
    </div>
  )
}
