import styledComponents from 'styled-components'

export const MainStyled = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px; 

  width: 100vw;
  height: 100vh;
`

export const Title = styledComponents.div`
  width: 60%;
  padding: 20px;
  margin-bottom: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  font-size 20px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MainContent = styledComponents.div`
  width: 60%;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid #F1F1F1;

  display: flex;
  align-items: center;
  justify-content: center;
`
