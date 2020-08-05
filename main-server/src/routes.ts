import { Router } from "express";


const router = Router();

router.get('/users', (request, response)=>{
    return response.status(201).send();
});

export { router }