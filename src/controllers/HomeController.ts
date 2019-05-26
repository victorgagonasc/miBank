import { Request, Response } from 'express';

class HomeController {
    static welcome = (req: Request, res: Response) => {
        res.status(200).send('Welcome to miBank Node REST API');
    };
}

export default HomeController;