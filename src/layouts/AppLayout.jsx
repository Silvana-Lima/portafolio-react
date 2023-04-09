import { Navbar } from "../modules/Navbar"



export const AppLayout = ({children, hello, setHello} )=>{
    return (
        <>
        <header>
          <Navbar hello={hello} setHello={setHello}/>
        </header>
        <main> {children} </main>
        <footer><span>Hecho por Silvana</span> </footer>
        </>
    )
}