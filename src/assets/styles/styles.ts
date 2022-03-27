import styled from 'styled-components'
import background from '../images/back.jpg'

export const Container = styled.div`
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  p:first-child {
    font-size: 3rem;
    color: #fff;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  
  p:last-child {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 1rem;
  }
`

