import  Announcement from "../components/Announcement"
import styled  from "styled-components"
import Navbar from "../components/Navbar"
import jacket from "../images/fabric.jpg"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Remove, Add } from "@material-ui/icons"

const Container = styled.div`

`

const Wrapper = styled.div`
padding: 50px;
display: flex;
`

const ImgContainer = styled.div`
flex:1;
`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`

const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
`
const Title = styled.h1`
font-weight: 200;
`

const Desc = styled.p`
margin:20px 0px;
`

const Price = styled.span`
font-size: 40px;
font-weight: 100;
`
const FilterContainer = styled.div`
width: 50%;
margin:30px 0px;
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
display: flex;
align-items: center;
`

const FilterTitle= styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
margin:20px;
border-radius: 50%;
background-color: ${(props) => props.color};
margin: 0px 5px;
cursor: pointer;
`

const FilterSizeOption = styled.option`

`
const FilterSize = styled.select`
margin-left: 10px;
`

const AddContainer = styled.div`
display: flex;
width: 50%;
align-items: center;
justify-content: space-between;
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px
`
const Button = styled.button`
cursor: pointer;
padding: 15px;
border: 1px solid teal;
background-color: white;

&:hover {
    background-color: #f8f4f3;
}
`

const product = () => {
    return (
<Container>
<Navbar/>
<Announcement/>
<Wrapper>
    <ImgContainer>
    <Image src={jacket}></Image>
    </ImgContainer>
    <InfoContainer>
        <Title>Ancient Scarf 2400 B.C.</Title>
            <Desc>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Debitis culpa esse 
                quibusdam! Nostrum nam id facere voluptatibus 
                temporibus fugit cupiditate, nesciunt 
                aspernatur ipsum aliquam dolorem quisquam 
                dicta animi ullam cum!
            </Desc>
            <Price>$ 20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="grey"/>
                </Filter>
                <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize> 
                </Filter>  

            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TOTAL</Button>
            </AddContainer>
    </InfoContainer>
</Wrapper>
<Newsletter />
<Footer />
</Container>    )
}

export default product
