import ButtonToggle from 'components/ButtonToggle/ButtonToggle'
import * as Style from './OrderDetails-style'

const OrderDetails = () => {
  return (
    <Style.OrderDetails>
        <Style.OrderDetailsTitle>
            Detalhes do pedido
        </Style.OrderDetailsTitle>

        <Style.OrderDetailsButtonGroup>
            <ButtonToggle active={true} value="Comer no local" />

            <ButtonToggle active={false} value="P/ Viagem" />

            <ButtonToggle active={true} value="Delivery" />
        </Style.OrderDetailsButtonGroup>

        <Style.OrderDetailsList>
            <p>Itens do pedido</p>
        </Style.OrderDetailsList>
    </Style.OrderDetails>
  )
}

export default OrderDetails