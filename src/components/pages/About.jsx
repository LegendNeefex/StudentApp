import { useEffect, useState } from "react"


function About() {

    const [params,setParams] = useState({})

    useEffect(()=>{

        const searchParams = new URLSearchParams(window.location.search);

        const id = searchParams.get("p")
        const custname = searchParams.get("cn");

        const paramObj = {
            id,
            custname, 
        }
        setParams(paramObj)

    },[])
  return (
    <>
    <h3>About page</h3>
    <p>
        Product ID: {params.id},
        Customer name: {params.custname}, 
    </p>
    </>
  )
}

export default About