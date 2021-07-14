import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

const Box = styled.div`
  background: #ffffff;
  border-radius: 8px;
`;

const MainGrid = styled.main`
  display: grid;
  grid-gap: 10px;
  padding: 16px;
  
  @media(min-width: 860px){
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 618px 312px;
  }
  grid-template-columns: ;
`;

export default function Home() {
  return( 

    <MainGrid>
      <Box style={{ gridArea: 'profileArea' }}>
        Imagem
      </Box>
      <Box>
        Bem vindo
      </Box>
      <Box>
        Comunidades
      </Box>
    </MainGrid>
  )
}
