'use client'

import ErrorPage from "@/components/error"

type ErrorT = {
  error: Error & { digest?: string }
  reset: () => void
}

const Error: React.FC<ErrorT> = (props) => {

  return (
    <ErrorPage {...props}/>
  )
}

export default Error