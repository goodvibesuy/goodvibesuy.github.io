import { SuppliesController} from '../controllers/suppliesController';
import * as express from 'express';

class SuppliesRoute {
    constructor() {}

    public routes(): express.Router {
        let router: express.Router = express.Router();        
        let suppliesController:SuppliesController = new SuppliesController();
        
        router.get('/', suppliesController.get);

        router.get('/getAll', suppliesController.getAll);
        
        router.post('/', suppliesController.addSupply);
        
        //cambiar por get
        router.post('/suppliesbyproduct', suppliesController.suppliesByProduct);
        
        router.put('/:id', suppliesController.updateSupply);
        
        router.delete('/:id', suppliesController.deleteSupply);

        return router;
    }
}

module.exports = new SuppliesRoute();