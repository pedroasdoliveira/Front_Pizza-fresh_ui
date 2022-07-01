import * as Style from "./home-style";
import { DateTime } from "luxon";
import {ReactComponent as Search} from 'assets/icons/search.svg'
import Menu from '../../components/Menu/menu';
import ProductItemList from "components/ProductItemList/Product";
import ProductItem from "components/ProductItem/ProductItem";
import { RoutesPath } from "types/routes";
import { navigationItems } from "data/navigation";
import OrderDetails from "components/OrderDetails/OrderDetails";

const home = () => {
  const dateDescription = DateTime.now().toLocaleString({...DateTime.DATE_SHORT, weekday: 'long'});
  const dataTime = DateTime.now().toLocaleString({...DateTime.TIME_SIMPLE})

  return (
    <Style.Home>
      <Menu
        active={RoutesPath.HOME}
        navItems={navigationItems}
       />
      <Style.HomeContent>
        <header>
          <Style.HomeHeaderDetails>
            <div>
              <Style.HomeHeaderDetailsLogo>Pizza Fresh</Style.HomeHeaderDetailsLogo>
              <Style.HomeHeaderDetailsDate>{dateDescription}, {dataTime}</Style.HomeHeaderDetailsDate>
          
              <Style.HomeHeaderDetailsSearch>
                <Search />
                <input type="text" placeholder="Procure pelo sabor" />
              </Style.HomeHeaderDetailsSearch>
            </div>
          </Style.HomeHeaderDetails>
        </header>

        <div>
          <Style.HomeProductTitle>
            <b>Pizzas</b>
          </Style.HomeProductTitle>
          <Style.HomeProductList>
            <p>Lista de produtos aqui</p>

            <ProductItemList>
              <ProductItem />
            </ProductItemList>

          </Style.HomeProductList>
        </div>
      </Style.HomeContent>

      <aside>
        <OrderDetails />
      </aside>
    </Style.Home>
  )
}

export default home