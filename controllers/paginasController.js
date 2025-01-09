import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimonial.js';

const paginaInicio = async (req, res) => { // req: lo que enviamos // res: lo que express nos responde 
    // Consultar BD
    const promisesDB = [];

    promisesDB.push(Viaje.findAll({
        limit: 3
    }));

    promisesDB.push(Testimonial.findAll({
        limit: 3
    }));

    try {
        // pasar al promise
        const resultado =  await Promise.all(promisesDB);

        res.render('inicio', {
            viajes : resultado[0],
            testimoniales: resultado[1],
            clase : 'home',
            page: 'Inicio',
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    // Consultar BD
    try {
        const viajes = await Viaje.findAll();
        
        res.render('viajes', {
            pagina: 'Viajes',
            viajes
        });
    
    } catch(error) {
        console.log(error);
    }
}

const paginaTestimoniales = async (req, res) => {
    // Consultar BD
    try {
        const testimoniales = await Testimonial.findAll();
        
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    
    } catch(error) {
        console.log(error);
    }
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async  (req, res) => {
    const { viaje } = req.params;

    try {
        const resultado = await Viaje.findOne({ where: { slug: viaje } });
        
        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje: resultado
        });
    } catch(error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}