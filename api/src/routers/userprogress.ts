import {Request, Response, Router} from "express"

const router = Router();

/**
 * https://localhost:${PORT}/[GET]
 */
router.get('/', (_req: Request , res: Response) => {
    res.send('Feching all entry APIS!!!')
});

router.get('/:id', (_req: Request , res: Response) => {
    res.send('Feching all entry APIS!!!')
});

router.post('/', (_req: Request , res: Response) => {
    res.send('Create all entry APIS!!!')
});

router.put('/:id', (_req, res) => {
    res.send("Update User!!!")
})

router.delete('/:id', (_req: Request , res: Response) => {
    res.send('Delete User For :ID!!!')
});

export default router;
