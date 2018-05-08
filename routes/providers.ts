import { ProvidersController } from '../controllers/providersController';
import * as express from 'express';

class ProviderRoute {

    constructor() { }

    public routes(): express.Router {
        let router: express.Router = express.Router();
        let providersController: ProvidersController = new ProvidersController();

        // get all
        router.get('/', providersController.getAll);

        // get
        router.get('/:id', providersController.get);

        // add
        router.post('/', providersController.add);

        // update
        router.put('/:id', providersController.update);

        // delete
        router.delete('/:id', providersController.delete);

        return router;
    }
}

module.exports = new ProviderRoute();

