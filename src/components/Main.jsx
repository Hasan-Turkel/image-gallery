import Image from "./Image"
import data from "../data"


const Main = () => {
  return (
    <main>
        <h1>Image Gallery</h1>
        <section>
            {data.map(({photographer, src})=>(
            <Image photographer ={photographer}
            src = {src.large}/>
        ))}</section>
        

        
    </main>
  )
}

export default Main