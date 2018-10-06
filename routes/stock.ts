import { StockController} from '../controllers/stockController';
import * as express from 'express';

class SuppliesRoute {
    constructor() {}

    public routes(): express.Router {
        let router: express.Router = express.Router();        
        let stockController:StockController = new StockController();    
        
        router.get('/getAll', stockController.getAll);                                
        router.put('/:id', stockController.updateStock);
        return router;
    }
}

module.exports = new SuppliesRoute();