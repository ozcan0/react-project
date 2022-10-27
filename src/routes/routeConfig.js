import Home from '../Pages/Home';
import LoginPage from '../Pages/LoginPage';
import CustomersPage from '../Pages/CustomersPage';
import CustomerUpdate from "../Pages/CustomerUpdate";
import CustomerAdd from "../Pages/CustomerAdd";
import CustomerDetail from "../Pages/CustomerDetail";

export const routeConfig = 
[
    {
        path:'/home',
        element:<Home />
    },
    {
        path:'/',
        element:<LoginPage />
    },
    {
        path:'/customers',
        element:<CustomersPage />
    },
    {
        path:'/customers/add',
        element:<CustomerAdd />
    },
    {
        path:'/customers/update/:id',
        element:<CustomerUpdate />
    },
    {
        path:'/customers/detail/:id',
        element:<CustomerDetail />
    }
]