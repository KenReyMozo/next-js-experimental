'use client'

import ErrorPage from "@/components/error"

const Error: React.FC<ErrorT> = (props) => {

  return (
    <ErrorPage {...props}/>
  )
}

export default Error