import * as Style from './Product-style'

interface ProductItemListProps {
    children: React.ReactNode
}

const ProductItemList = ({children}: ProductItemListProps) => {
  return (
    <section>
        <Style.ProductItemListHeader>
            <Style.ProductItemListHeaderTitle>
                Escolha os sabores
            </Style.ProductItemListHeaderTitle>

            <Style.ProductItemListHeaderSelect>
                <option value="default">Selecione a mesa</option>
                <option value="">Mesa</option>
            </Style.ProductItemListHeaderSelect>
        </Style.ProductItemListHeader>
        <Style.ProductItemList>
            {children}
        </Style.ProductItemList>
    </section>
  )
}

export default ProductItemList