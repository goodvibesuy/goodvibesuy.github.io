import { ClientController} from '../controllers/clientController';
import * as express from 'express';

class ClientRoute {

    constructor() {}

    public routes(): express.Router {
        let router: express.Router = express.Router();        
        let clientController: ClientController = new ClientController();

        // get all
        router.get('/',clientController.getAll);
        // get
        router.get('/:id',clientController.get);
        // add
        router.post('/',clientController.add);
        // update
        router.put('/:id',clientController.update);
        // delete
        router.delete('/:id',clientController.delete);

        return router;
    }
}

module.exports = new ClientRoute();