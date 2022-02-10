import style from './Searchbar.module.scss'
import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { updateLogin } from '../../store/action';
import { useNavigate } from 'react-router-dom';


export const Searchbar = () => {
    const [text, setText] = useState('')

    const search = e => setText(e.target.value)

    const loggedSelector = useSelector(state => state.logged);

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const handleSignout = (e) => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log(auth.currentUser);
          });
        dispatch(updateLogin(false));
        navigate("/");
        console.log(loggedSelector);
        }

    return (
        <div className={style.searchbar}>
            <input type="text" value={text} onChange={search}/>
            <button onClick={handleSignout}>Esci</button>
        </div>
    )
}