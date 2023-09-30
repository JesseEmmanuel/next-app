import Link from "next/link"

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-800 shadow-lg p-4 max-h-full h-screen w-1/6 text-white gap-5">
        <div>
          <Link href="/"><h1>[LOGO]</h1></Link>
        </div>
        <div className="flex flex-col gap-4">
            <Link href="/dashboard" className="nav-link">Dashboard</Link>
            <Link href="/dashboard/suggested-games" className="nav-link">Suggested For You</Link>
            <Link href="/dashboard/topcharts" className="nav-link">Top Charts</Link>
            <Link href="/dashboard/profile" className="nav-link">Profile</Link>
        </div>
    </div>
  ) 
}

export default Sidebar