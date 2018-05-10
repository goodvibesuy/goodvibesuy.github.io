import { UserController} from '../controllers/usersController';
import * as express from 'express';

class UsersRoute {
    constructor() {}

    public routes(): express.Router {
        let router: express.Router = express.Router();        
        let userController:UserController = new UserController();
        
        router.get("/", userController.getAll);

        router.get("/byUserName", userController.getUserByUserName);

        return router;
    }
}

module.exports = new UsersRoute();


