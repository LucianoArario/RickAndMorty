import style from "./Card.module.css";

export default function Card({character, onClose}) {
   const {id, name, status, species, gender, origin, image}=character;
   return (
      <div className={style.bordeCard}>
         <button onClick={() => onClose(id)}>X</button>
         <h2 className={style.nombre}>{name}</h2>
         <h2 className={style.caracteristicas}>{status}</h2>
         <h2 className={style.caracteristicas}>{species}</h2>
         <h2 className={style.caracteristicas}>{gender}</h2>
         <h2 className={style.caracteristicas}>{origin}</h2>
         <img className={style.foto}src={image} alt='' />  
      </div>
   );
}  
  