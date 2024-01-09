import Sidebar from "../components/Sidebar"
import Container from "../components/Container"

function Dashboard() {


  return (

      <div className="min-h-screen max-h-fit bg-[#FAFAFA] flex w-screen">
        <Sidebar/>
        <Container />
    </div>
    
  )
}

export default Dashboard