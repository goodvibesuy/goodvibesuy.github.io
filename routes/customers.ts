import { CustomerController} from '../controllers/customerController';
import * as express from 'express';

class CustomerRoute {

    constructor() {}

    public routes(): express.Router {
        let router: express.Router = express.Router();        
        let customerController: CustomerController = new CustomerController();

        // get
        router.get('/:id',customerController.get);

        return router;
    }
}

module.exports = new CustomerRoute();