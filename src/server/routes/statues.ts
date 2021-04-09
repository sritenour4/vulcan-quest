import { Router } from 'express';
import db from '../db';

const router = Router();

// GET /api/statues
router.get('/:statueid?', async (req, res) => {
    const statueid: string = req.params.statueid;
    try {
        if (statueid) {
            const [statue] = await db.statues.one(statueid);
            res.json(statue);
        } else {
            const statues = await db.statues.all();
            res.json(statues);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/add', async (req, res) => {
    const newStatue = req.body;
    try {
        const newStatueRes = await db.statues.post(newStatue.id, newStatue.location, newStatue.title, newStatue.information, newStatue.artists, newStatue.sponsor) 
        res.json({ msg: 'added new statue',  newStatueRes});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    const statueid = req.params.id;
    const editedStatue = req.body;    
    try {
        await db.statues.put(statueid, editedStatue);
        res.json({ msg: 'single statue by id ' + statueid });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    };
});

router.delete('/:id', async (req, res) => {
    const statueid = req.params.id;
    try {
        res.json({ msg: 'deleted statue by id ' + statueid });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});


export default router;