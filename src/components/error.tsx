'use client'

type ErrorPageT = {
  error: Error & { digest?: string }
  reset: () => void
} & React.ComponentProps<'div'>

const ErrorPage: React.FC<ErrorPageT> = (props) => {

  const { error, reset, className, ...cleanProps } = props

  return (
    <div className={`${className ? className : ''} flex min-h-screen flex-col items-center justify-center p-24`}
      {...cleanProps}>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default ErrorPage