import styled from 'styled-components'
import ImgSobre from '../assets/images/fotolincoln.png'
import './sobre.css'


export default function Sobre(){
    return(
        <Main id='sobre'> 
            <SectionSobre className='sectionSobre'>

                   <DivConteudo>
                        <DivTexto>
                            <H2>Um pouco sobre mim</H2>

                            <P2>
                                Com uma trajetória de 8 anos dedicados à prática da psicologia, tenho auxiliado indivíduos a superarem desafios, conquistarem autoconhecimento e desenvolverem habilidades para uma vida mais satisfatória.
                            </P2>
                            <P2>
                                Minha abordagem é baseada em uma perspectiva humanista e integrativa, adaptando as técnicas terapêuticas de acordo com as necessidades e preferências de cada cliente.
                            </P2>
                        </DivTexto>
                        
                        <Img src= {ImgSobre}  ></Img>
                    </DivConteudo>


            </SectionSobre>
        </Main>
    )
}

const Main = styled.main`

height: 100vh;
display: flex;
justify-content: center;
align-items: center;
padding-top: 50px;

`

const DivConteudo = styled.div`
display: flex;
background-color: #f5f5f5;
border-radius: 30px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;`

const DivImg = styled.div`
width: 500px;

border-radius: 10px;
`

const SectionSobre = styled.section`
width: 90%;
height: 90%;
border-radius: 30px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;



`

const DivConteudoSobre = styled.div`

width: 100%;
display: flex;
flex-direction: column;
gap: 50px;
position: relative;`

const Img = styled.img`
width: 500px;
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;
`
const DivTexto = styled.h2`

width: 500px;
color: white;
display: flex;
flex-direction: column;
gap: 50px;
padding: 50px;

`

const P = styled.p`

text-align: justify;
font-weight: 300;
color: black;`

const P2 = styled.p`

text-align: justify;
color: black;`

const H2 = styled.h2`
color: black;`