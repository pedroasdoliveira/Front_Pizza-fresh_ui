import { NavItem } from '../components/Menu/menu-types'
import { ReactComponent as Home } from 'assets/icons/home.svg'
import { ReactComponent as Settings } from 'assets/icons/settings.svg'
import { RoutesPath } from 'types/routes'

export const navigationItems: NavItem[] = [
    {
        icon: <Home />,
        path: RoutesPath.HOME
    },
    {
        icon: <Settings />,
        path: RoutesPath.SETTINGS
    }
]