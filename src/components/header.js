import React from 'react'
import Logo from '../assets/images/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Header(){

    return(
        <HeaderDiv>
            <DivLogo className='divLogo'> 
                <a href='#painel'><Img className='logo' src={Logo}/></a>
            </DivLogo>
            <nav className='nav'>
                <Ul className='menu'> 
                    <li className='menuItem'> <a href='#sobre'>Sobre</a></li>
                    <li className='menuItem'> <a href='#agenda'>Agenda</a></li>
                    <li className='menuItem'> <a href='#cadastro'>Cadastro</a></li>
                    <li className='menuItem'> <a href='#contato'>Contato</a></li>
                </Ul>
            </nav>
        </HeaderDiv>
    )


 
}

const HeaderDiv = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: #87CEFA;
    height: 80px;
    z-index: 1;
`

const Ul = styled.ul`

display: flex;
gap: 20px;
font-size: 20px`

const DivLogo = styled.div`

height: 80px;`



const Img = styled.img`
height: 100%;
cursor: pointer;`








