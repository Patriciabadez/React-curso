import React,{useState} from 'react'

export default (props) => {
    const [nome, setNome] = useState('Insira seu nome')
    return(
        <>
        <h2>{nome}</h2>
        <input type="text" value={nome} onChange={e =>setNome(e.target.value)}/>
        
        </>
    )

}