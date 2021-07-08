import styled from 'styled-components';


export const Content = styled.div`
    background-color: white;
    color: black;
    margin: 2rem 3rem 10rem 3rem;
    border-radius: 8px;
    

     @media (max-width: 500px) { 
       min-height: 800px;
        }
`
export const CardContent = styled.div`
    margin: 0rem 1rem;

    h3{
        font-size: 22px;
    }
`
export const Section = styled.section`
    background-color: #808080;
    height: 100%;
    width: 100%;
    position: fixed;
    overflow: auto;
`
export const Status = styled.h1`
    color:#F5A623;
    font-size: 20px;
    font-weight: 600;
`

export const Title1 = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color:#1B1B1B;
    margin:0 0.5rem;
    margin-bottom: 1rem;
`
export const Title2 = styled.h1`
    font-size: 14px;
    color:#919191;
    margin-top: 0.5rem;
    
`
export const Title3 = styled.h1`
    font-size: 14px;
    margin-top: 0.2rem;
    font-weight: 600;
    color:#0A8CCC;
`
export const Title4 = styled.h1`
    font-weight: 600;
    opacity:90%;
    font-size:17px;
    color:#000000;
`
export const Title5 = styled(Title4)`
        span{
        font-size: 19px;
        margin-left:0.2rem;
        }
        button{
            border: none;
            width: 3rem;
        }
        button:hover{
            transition:0.5s;
            transform: scale(1.12);
        }
`
export const Marker = styled.span`
    font-size: 14px;
    color:#0A8CCC;
`
export const Flex = styled.div`
    display: flex;
    margin-bottom: 1rem;

    @media (max-width: 576px) { 
        display:block;
    }
`
export const Container = styled.div`
    padding-top: 1rem;
    

    p{
        font-size: 14px;
    }
    
`
export const Div = styled.div`
    padding-top: 1.5rem;
    margin: 0rem 1rem 1rem 1rem;
    box-shadow:5px;

    p{
        font-size: 14px;
        text-align: justify;
        text-indent: 0;
    }
    @media (max-width: 376px) { 
        line-height: 25px;
        }
`
export const Icon = styled.span`
    color:#0A8CCC;
    margin:0 0.3rem 3rem 0.6rem;
    font-size: 14px;
    font-weight: lighter;
   

    @media (max-width: 376px) { 
        margin: 0rem 12rem 1rem 0rem;
        transition:0.5s;
    }
    
`
export const Icon2 = styled(Icon)`
    color:#919191;
    margin: 0rem 0.3rem 1rem 1rem;

    @media (max-width: 376px) { 
        color:#919191;
        margin: 0rem 10rem 1rem 0rem;
        transition:0.5s;
        }
`
export const IconCircleDown = styled(Icon)`
    font-size: 20px;
    opacity: 70%;
    
    :hover{
        opacity: 100%;
    }
`


export const Ticket = styled.div`
    background-color: #0A8CCC;
    color:white;
    border-radius: 0.4rem;
    padding: 0.2rem 0.9rem;
    height: 100px;
    width: 205px;
    display: block;
    
    h3{
        color:white;
        font-style:bold;
        font-size:26px;
    }

    @media (max-width: 576px) { 
        margin-bottom: 2rem;
    }
`
export const ContainerHeader = styled.div`
    margin-left: 2rem;
    min-width: 1%;
    @media (max-width: 576px) { 
        transition:0.5s;
        margin: 0 1rem;
        p{
            line-height: 25px;
        }

        .Price{
            text-align: center;
            font-size: 15px;
            transition: 0.3
        }
        
    }
`
export const Logo = styled.div`
    background-color: #fff;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display:absolute;
    margin: -5.4rem 0 0 10.1rem;
    border: 1px solid #00426E;
    
`
export const Code = styled.div`
    background-color: #E2F1F8;
    border-radius: 1rem;
    color:#8A8A8A;
    font-size: 12px;
    height: 1.5rem;
    width: 5.5rem;
    text-align: center;
    padding-top: 6px;
`

