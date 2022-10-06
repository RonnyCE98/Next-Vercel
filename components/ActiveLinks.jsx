import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'

const estilo ={
    color:'#0070f3',
    textDecoration:'underline'

}

/**Se pasa por argurmento */
export const ActiveLinks = ({href,text}) => {
    /**Custom hooks */ 
    /**Se saca el componente asPath para saber en cual path estoy */
    const {asPath}= useRouter();
    
    /**Si el asPath es igual href se renderiza el estilo 
     * asPath=About
     * href=About
    */
  return (
    <Link href={href}>
        <a style={asPath===href ? estilo: null}>{text}</a>
    </Link>
    
  )
}
