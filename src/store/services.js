import Axios from 'axios'
import ClientService from '../services/ClientService'
import EmployeeService from '../services/EmployeeService'
import ProductService from '../services/ProductService'
import SupplierService from '../services/SupplierService'
import SaleService from '../services/SaleService'

let apiUrl = 'http://localhost:62432/'

// Axios Configuration
Axios.defaults.headers.common.Accept = 'application/json'

export default {
    // exampleService: new exampleService(Axios),
    ClientService: new ClientService(Axios, apiUrl),
    EmployeeService: new EmployeeService(Axios, apiUrl),
    ProductService: new ProductService(Axios, apiUrl),
    SupplierService: new SupplierService(Axios, apiUrl),
    SaleService: new SaleService(Axios, apiUrl)
}