import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import product1 from "../images/product1.jpg"
import product2 from "../images/product2.jpg"
import { Add, Remove } from '@material-ui/icons'
import { mobile } from "../responsive"

const Container = styled.div`

`

const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px"})}
`

const Title = styled.h1`
font-weight: 300;
text-align: center;`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${(props)=>props.type === "filled" && "none"};
background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
color: ${(props)=>props.type === "filled" && "white"};
`
const TopTexts = styled.div`
${mobile({ display: "none"})}
`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`    

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column"})}
`
const Info = styled.div`
flex:3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column"})}
`
const ProductDetail = styled.div`
display: flex;
flex:2;
`
const Image = styled.img`
width: 200px;
`

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;

`

const ProductName = styled.span`

`

const ProductId = styled.span`

`

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props)=>props.color};
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
justify-content: center;
`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({ margin: "5px 15px"})}
`

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({ marginBottom: "20px"})}
`

const Hr = styled.hr`
background-color: #eeee;
border:none ;
height: 1px;
margin: 20px 0px 20px 0px;
`


const Summary = styled.div`
flex:1;
border: .5px solid lightgrey;
border-radius: 10px;
padding: 20px;
height: 50vh;
${mobile({ marginTop: "20px"})}
`
const SummaryTitle = styled.h1`
font-weight: 200;
`

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`

const Cart = () => {
    return (
<Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist</TopText>
            </TopTexts>
            <TopButton type='filled'>CHECK OUT</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                     <Image src={product1} />
                     <Details>
                         <ProductName><b>Product:</b>Abstraction Bangle</ProductName>
                         <ProductId><b>ID:</b>576893456-0</ProductId>   
                         <ProductColor color="black"/>
                         <ProductSize><b>Size:</b>Large</ProductSize>
                     </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                          <Add/>
                          <ProductAmount>2</ProductAmount>
                          <Remove/>
                      </ProductAmountContainer>
                      <ProductPrice>$ 200</ProductPrice>
                    </PriceDetail>
                </Product>
            <Hr/>
                <Product>
                    <ProductDetail>
                     <Image src={product2} />
                     <Details>
                         <ProductName><b>Product:</b>Abstraction Bangle</ProductName>
                         <ProductId><b>ID:</b>576893456-0 </ProductId>   
                         <ProductColor color="black"/>
                         <ProductSize><b>Size:</b>Large</ProductSize>
                     </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                          <Add/>
                          <ProductAmount>1</ProductAmount>
                          <Remove/>
                      </ProductAmountContainer>
                      <ProductPrice>$ 10</ProductPrice>
                    </PriceDetail>
                </Product>

            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 20</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 7.50</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -1.50</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>$ 226.50</SummaryItemPrice>
                </SummaryItem>
                <SummaryButton>CHECKOUT</SummaryButton>
            </Summary>
        </Bottom>
    </Wrapper>
    <Footer/>
</Container>
    )
}

export default Cart
