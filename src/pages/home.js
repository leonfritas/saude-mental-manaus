import React from 'react'
import Header from '../components/header'
import Painel from '../components/painel'
import Sobre from '../components/sobre'
import Agenda from '../components/agenda'
import Cadastro from '../components/cadastro'
import Contato from '../components/contato'


export default function Home(){
    return(
        <>
            <Header/>
            <Painel/>
            <Sobre/>
            <Agenda/>
            <Cadastro/>
            <Contato/>
        </>

    )
}