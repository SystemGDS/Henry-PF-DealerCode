import {Request, Response, Router} from "express"

const router = Router();

/**
 * https://localhost:3000/[GET]
 */
router.get('/', (_req: Request , res: Response) => {
    res.send('Feching all entry APIS!!!')
});

router.get('/:id', (_req: Request , res: Response) => {
    res.send('Feching all entry APIS!!!')
});

router.post('/', (_req: Request , res: Response) => {
    res.send('Saving Lesson entry APIS!!!')
});

router.put('/:id', (_req, res) => {
    res.send("Update Lesson!!!")
})

router.delete('/:id', (_req: Request , res: Response) => {
    res.send('Delete Lesson For :ID!!!')
});



export default router;
