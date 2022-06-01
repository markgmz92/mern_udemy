import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrdertoPaid
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrdertoPaid);

export default router;
