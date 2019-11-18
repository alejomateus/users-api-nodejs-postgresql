import { Router } from 'express';
const router = Router();
import { createUser, getUsers, getOneUser, deleteUser, updateUser } from "../controllers/user.controller";
router.post('', createUser);
router.get('', getUsers);
router.get('/:email', getOneUser);
router.delete('/:email', deleteUser);
router.put('/:email', updateUser);

export default router;