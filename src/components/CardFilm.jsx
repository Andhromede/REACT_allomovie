import { useState, useEffect } from "react";
import axios from 'axios';
import api from '../api/api';

import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

function CardFilm(props) {
    const { tablo } = props;

    return (
        <>
            {(tablo) &&
                tablo.results.map(item => {
                    return (
                        <div className="inline-block" key={item.id}>
                            <div className="flex ml-5 mt-5">
                                <div className="rounded-lg shadow-lg bg-white max-w-xs m-5">
                                    <a href={"/home"}>
                                        <img className="rounded-t-lg" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} alt="" />
                                    </a>

                                    <div className="p-6">
                                        <h5 className="no-underline text-gray-900 text-xl font-medium mb-2 ">{item.original_title}</h5>
                                        {/* <h5 className="no-underline text-gray-900 text-xl font-medium mb-2 ">{new Date(item.release_date).toLocaleDateString()}</h5> */}

                                        <button type="button" className="mr-5 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                            <a href={"/detail/"+item.id}>Détail</a>
                                        </button>

                                        <button type="button" className="inline-block px-3 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
                                            <a href={"/home"}>
                                                <AiFillStar />
                                            </a>
                                        </button>

                                        <button type="button" className="inline-block px-3 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-400 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">
                                            <a href={"/home"}>
                                                <AiFillStar />
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
        </>
    );
}

// function CardFilm(props) {
//     const { tablo } = props;

//     return (
//         <>
//             {tablo.map(item => {
//                     return (
//                         <div className="flex ml-5 mt-5">
//                             <div className="rounded-lg shadow-lg bg-white max-w-sm">
//                                 <a href={"/home"}>
//                                     <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
//                                 </a>

//                                 <div className="p-6">
//                                     <h5 className="no-underline text-gray-900 text-xl font-medium mb-2 ">Nom du film</h5>

//                                     <p className="text-gray-700 text-base mb-4 ">
//                                         Résumé en 2 lignes
//                                     </p>
//                                     <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Détail</button>
//                                 </div>
//                             </div>
//                         </div>
//                     )

//                 })
//             }
//         </>
//     );
// }

export default CardFilm;