import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex
  } from '@chakra-ui/react'

  import { ChevronRightIcon  } from '@chakra-ui/icons'
  
export const Navbar = ({hello, setHello} )=>{
const handleHello =()=>{
    setHello(true)
    console.log(hello)
}
    
   return (
     <Flex
       justifyContent="flex-end"
       bgGradient="linear(to-l, #7928CA, #FF0080)"
       color={"white"}
     >
       <Breadcrumb
         p={"15px"}
         spacing="8px"
         separator={<ChevronRightIcon color="white" />}
       >
         <BreadcrumbItem>
           <BreadcrumbLink href="#" onClick={handleHello}>Hola</BreadcrumbLink>
         </BreadcrumbItem>

         <BreadcrumbItem>
           <BreadcrumbLink href="#">Mis conocimientos</BreadcrumbLink>
         </BreadcrumbItem>

         <BreadcrumbItem>
           <BreadcrumbLink href="#">Mis proyectos</BreadcrumbLink>
         </BreadcrumbItem>

         <BreadcrumbItem>
           <BreadcrumbLink href="#">Contacto</BreadcrumbLink>
         </BreadcrumbItem>
       </Breadcrumb>
     </Flex>
   ); 
}