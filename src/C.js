import React, { useContext } from 'react'
import { DemoContext } from './Contexts'

export default function C(props) {

  const contextValue = useContext(DemoContext);

  return (
    <div>
      This is C using the shared info "{ props.sharedInfo }"
      <p>This is C using the context value "{ contextValue.foo }"</p>
    </div>
  )
}
