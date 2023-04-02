import React, { useState } from "react";
import { Link } from "react-router-dom";

import ArrowDown from '../../public/icons/arrowDown-30.png';

export function DropdownMenu(){

    const [isClicked, setIsClicked] = useState(false);

    // function handleClickToToggleValue(){
    //     setIsClicked(!isClicked)
    // }

    return (
        <div>
            {/* <label htmlFor="" className="flex justify-between" onClick={handleClickToToggleValue}> */}
            <label htmlFor="" className="flex justify-between">
                Entrar/Cadastrar
                {/* <img src={ArrowDown} width={30} height={5} alt="clique aqui" /> */}

                <select name="" id="" className="outline-none">
                        <option value="">
                            <Link to="/signin">
                                Entrar
                            </Link>
                        </option>
                        <option value="">
                            <Link to="/signUp">
                                Cadastrar
                            </Link>
                        </option>
                    </select>

                {isClicked === true && (
                    <select name="" id="" className="outline-none">
                        <option value="">
                            <Link to="/signIn">
                                Entrar
                            </Link>
                        </option>
                        <option value="">
                            <Link to="/">
                                Cadastrar
                            </Link>
                        </option>
                    </select>
                )}
            </label>
        </div>
    );
}