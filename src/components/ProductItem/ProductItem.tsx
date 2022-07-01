import * as Style from './ProductItem-style'

const ProductItem = () => {
  return (
    <Style.ProductItem>
        <Style.ProductItemImage src='' alt='' />

        <div>
            <Style.ProductItemName>Nome do produto</Style.ProductItemName>
            <Style.ProductItemPrice>R$ 10,00</Style.ProductItemPrice>
            <Style.ProductItemDescription>Descrição do produto</Style.ProductItemDescription>
        </div>
    </Style.ProductItem>
  )
}

export default ProductItem