

import React, { useState } from "react"
import style from "./SearchBar.module.css";


function Nav({ onSearch }) {
    const [id, setId] = useState('');

    const handleChange = (e) => {
        setId(e.target.value);
    }

    return (
        <div className={style.searchContainer}>
            <div className={style.inputAndButton}>
                <input type='search'
                    className={style.searchBar}
                    value={id}
                    placeholder="Escribe un ID"
                    onChange={handleChange}
                />
                <button onClick={() => onSearch(id)} className={style.searchButton}>Agregar</button>
            </div>
        </div>

    );
}
export default Nav;






// export default function SearchBar({ onSearch }) {
//     const [id, setId] = useState('');

//     const handleChange = (e) => {
//         setId(e.target.value);
//     }

//     return (
//         <div className={style.searchContainer}>
//             <input type='search'
//                 className={style.searchBar}
//                 value={id}
//                 placeholder="Escribe un ID"
//                 onChange={(e) => handleChange(e)}
//             />

//             <button onClick={() => onSearch(id)}>Agregar</button>
//             {/* <button onClick={onSearch(id)} className={style.searchButton}>Agregar</button> */}
//         </div>
//     );
// }