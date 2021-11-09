import React, { useContext } from 'react'
import { DemoContext } from './Contexts'

export default function B(props) {

  const contextValue = useContext(DemoContext)

  return (
    <div>
        <p>This is B using the shared info "{ props.sharedInfo }"</p>
        <p>This is B using the context value "{ contextValue.foo }"</p>
    </div>
  )
}
