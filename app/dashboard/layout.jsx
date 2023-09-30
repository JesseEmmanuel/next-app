import Sidebar from "@/components/sidebar"

export default function layout({ children }) {
  return (
    <div className="flex">
        <Sidebar />
        <div className="flex flex-col p-3 max-h-full grow h-[94vh]">
            {children}
        </div>
    </div>
  )
}
