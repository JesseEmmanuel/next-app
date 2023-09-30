import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col w-[500px] mx-auto h-[100vh] justify-center text-center'>
      {/* <div className='flex flex-col gap-5 py-10 border-2 border-solid rounded-2xl shadow-md'> */}
      <div className='flex flex-col gap-5 py-10'>
        <h1>[LOGO]</h1>
        <p className='italic'>Only the best games reviewed for you</p>
        <form action="" className='flex flex-col items-center gap-3 pb-3'>
          <input className='p-2 rounded-md border-2 border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 w-[300px]' type="text" placeholder='Username' />
          <input className='p-2 rounded-md border-2 border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 w-[300px]' type="password" placeholder='Password' />
          <Link href="/dashboard">
            <button className='p-3 bg-blue-700 text-white rounded-md w-[300px] border-[transparent] text-'>LOGIN</button>
          </Link>
        </form>
      </div>
    </div>
  )
}
