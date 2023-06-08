import React from 'react'
import ImgPainel from '../assets/images/imageteste.png'
import styled from 'styled-components'

export default function Painel(){
    return(
        <Main id='painel'>

            <H1>Saúde mental Manaus</H1>
            
            <DivImg>
                <Img src={ImgPainel}/>
                

            </DivImg>
            
            <DivConteudo>
                <H2Titulo>
                    Equilíbrio. Transformação. Liberdade. 
                </H2Titulo>
                <h3>
                    Descubra a paz interior, liberte-se e renasça com a psicologia!
                
                </h3>

                
                    <A target='_blank' href='https://wa.me/+5592994235646'>
                    <BtnAgendar>
                        Agende Sua Consulta
                        </BtnAgendar>
                    </A>
               


            </DivConteudo>
        </Main>
    )
}

const H1 = styled.h1`
position: absolute;
top: 150px;`

const Main = styled.main`

height: 100vh;
border: 1px solid red;
display: flex;
align-items: center;
justify-content: space-around;
gap: 50px;
padding-top: 80px;
background-color: #87CEFA;


`

const DivImg = styled.div`

width: 50%;
`

const Img = styled.img`

width: 100%;
margin: 30px;
`

const DivConteudo = styled.div`

width: 500px;
padding: 20px;
display: flex;
flex-direction: column;
align-items: flex-start;
height: 400px;
border: 1px solid blue;


`

const H2Titulo = styled.h2`

margin-bottom: 30px;

`

const BtnAgendar = styled.button`

text-align: center;

height: 40px;
width: 200px;
margin-top: 50px;
border: none;
background-color: #4682B4;
color: white;
font-weight: 600;
box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
border-radius: 10px;
cursor: pointer;

`

const A = styled.a`
color: white;
`