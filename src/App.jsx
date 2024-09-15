import Profile from './component/profile'
import './App.css'
import List from './component/list'
import { Eventhandling } from './component/event'
import Navbar from './component/nav'
import QRCode from "react-qr-code";

function App() {
  return (
    <>
      <Navbar/>
     <Profile name="SAURAV KUMAR JHA" about="I AM A FRONTEND WEB DEVELOPER WITH WORK ON REACT JS, HTML, CSS, JS, JAVA, SPRINGBOOT." img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4D6bdHvhN1_uv4rpueVKgWwo9sPwI-30U5hP4ORALIykcLxqt9qBgoLoqA&s" />
      <List/>
      {/* <Eventhandling/> */}
      <QRCode size={256} style={{ height: "400px", maxWidth: "80%", width: "50%",padding:"10px" }} value={"https://saurav-kumar-jha.github.io/random-bgColor/"} viewBox={`0 0 256 256`}/>
    </>
  )
}

export default App