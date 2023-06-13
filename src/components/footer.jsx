import styled from 'styled-components'
import boneco from '../assets/images/boneco.png'


export default function Footer(){
    return(
        <Main id='footer'> 
            <h2>
                <img src={boneco}/>
            </h2>
        </Main>
    )
}

const Main = styled.main`

height: 50vh;
display: flex;
align-items: flex-end;
justify-content: center;
background-color: 4682B4;

`
