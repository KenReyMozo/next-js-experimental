import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h2 className='text-4xl'>404</h2>
      <p>Page not Found</p>
      <hr className='px-24 mt-2 mb-5'/>
      <Link href="/" className='underline'>Return Home</Link>
    </div>
  )
}

export default NotFound