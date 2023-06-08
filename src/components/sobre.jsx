import styled from 'styled-components'
import ImgSobre from '../assets/images/image4.jpg'


export default function Sobre(){
    return(
        <Main id='sobre'> 
            <SectionSobre>

                {/* <DivConteudoSobre>
                    <h2>Como funciona a consulta com o especialista?</h2>

                    <p>
                        Bem-vindo à sua jornada de autodescoberta e crescimento pessoal! Em uma consulta com um psicólogo, você encontrará um espaço acolhedor e seguro, onde suas preocupações e emoções serão ouvidas com profunda empatia. Com cuidado e respeito, o psicólogo irá guiá-lo rumo à clareza e bem-estar emocional.
                    </p>
                    
                    <p>
                        Lembre-se, a consulta com o psicólogo não apenas trará alívio para o seu sofrimento, mas também abrirá as portas para uma vida mais plena, significativa e gratificante. Embarque nesta jornada de autotransformação e redescubra o poder dentro de você com o apoio de um psicólogo atencioso e experiente.
                    </p>
                </DivConteudoSobre> */}
                <DivConteudoSobre>
                    <DivTexto>
                        <h2>Como funciona a consulta com o especialista?</h2>

                        <P>
                            Bem-vindo à sua jornada de autodescoberta e crescimento pessoal! Em uma consulta com um psicólogo, você encontrará um espaço acolhedor e seguro, onde suas preocupações e emoções serão ouvidas com profunda empatia. Com cuidado e respeito, o psicólogo irá guiá-lo rumo à clareza e bem-estar emocional.
                        </P>
                        <P2>
                        Lembre-se, a consulta com o psicólogo não apenas trará alívio para o seu sofrimento, mas também abrirá as portas para uma vida mais plena, significativa e gratificante.
                        </P2>
                    </DivTexto>
                    
                    <Img src= {ImgSobre}  ></Img>

                </DivConteudoSobre>


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

const SectionSobre = styled.section`

width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`

const DivConteudoSobre = styled.div`

width: 100%;
display: flex;
flex-direction: column;
gap: 50px;
position: relative;`

const Img = styled.img`
`
const DivTexto = styled.h2`
position: absolute;
width: 500px;
color: white;
margin: 100px;
top:0;
bottom: 0;
display: flex;
flex-direction: column;
gap: 100px
`

const P = styled.p`

text-align: justify;`

const P2 = styled.p`

`