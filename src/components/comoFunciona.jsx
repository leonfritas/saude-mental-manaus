import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'
import { useState, useEffect } from 'react'
import './comoFunciona.css'

import Img1 from '../assets/images/consulta1.jpg'
import Img2 from '../assets/images/consulta2.jpg'
import Img3 from '../assets/images/consulta3.jpg'


export default function ComoFunciona(){


    const delay = 300;
    const breakPoints = [
        { width: 1, itemToShow: 1 },
        { width: 550, itemToShow: 2, itemToScroll: 2},
        { width: 768, itemToShow: 3},
        { width: 1200, itemToShow: 4},
    ] 

    const [items, setItems] = useState([
        { id: 1, image: Img1 },
        { id: 2, image: Img2 },
        { id: 3, image: Img3} 
      ]);

      const [activeIndex, setActiveIndex] = useState(0);

      const nextImage = () => {
        setActiveIndex((prevIndex) => {
          if (prevIndex === items.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      };

      useEffect(() => {
        const interval = setInterval(nextImage, delay);
        return () => 
          clearInterval(interval);
      }, []);

    return(
        <Main id='comoFunciona'> 
            <DivCarrossel >
                <div className='constrols-wrapper'>

                </div>

                <DivImageCarosel className='carousel-wrapper'>
                <Carousel breakPoints={breakPoints} showArrows={false}>
                    {items.map((item, index) => (
                        <ItemCarousel key={item.id} isActive={index == activeIndex}>
                            <ImgCarousel src={item.image} alt={`Item ${item.id}`} />
                        </ItemCarousel>
                    ))}
                </Carousel>
                </DivImageCarosel>
            

            </DivCarrossel>
           
            <DivTexto>
            <H2>Como funciona a consulta com o especialista?</H2>
            <P>
                Bem-vindo à sua jornada de autodescoberta e crescimento pessoal! Em uma consulta com um psicólogo, você encontrará um espaço acolhedor e seguro, onde suas preocupações e emoções serão ouvidas com profunda empatia. Com cuidado e respeito, o psicólogo irá guiá-lo rumo à clareza e bem-estar emocional.
            </P>
            <P2>
                Lembre-se, a consulta com o psicólogo não apenas trará alívio para o seu sofrimento, mas também abrirá as portas para uma vida mais plena, significativa e gratificante.
            </P2>
            </DivTexto>
            
        </Main>
    )
}

const H2 = styled.h2`
font-size: 35px;`



const ItemCarousel = styled.div`
`

const ImgCarousel = styled.img`
width: 100%;
height: 90%;`
const Main = styled.main`

height: 100vh;
display: flex;
align-items: center;
justify-content: space-around;
background-color: #5f9ea0;

`

const DivImageCarosel = styled.div`


`

const DivCarrossel = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: flex-end;
height: 90%;
width: 1000px;



`

const DivTexto = styled.div`
width: 500px;
background-color: white;
height: 500px;
padding: 50px;
border-radius: 20px;`

const P2 = styled.p`
margin: 20px 0;
font-size: 20px;
`

const P = styled.p`
margin: 20px 0;
font-size: 20px;
text-align: justify;`
