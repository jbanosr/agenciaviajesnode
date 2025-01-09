// Aquí irán todas las URLs de la web
import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje 
} from '../controllers/paginasController.js';

import { 
    guardarTestimonial, 
} from '../controllers/testimonialController.js';

const router = express.Router();

// GET: es cuando visitas una URL
router.get('/', paginaInicio); 
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:viaje', paginaDetalleViaje);
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

export default router;