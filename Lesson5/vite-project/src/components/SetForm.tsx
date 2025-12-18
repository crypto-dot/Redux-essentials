import React, { useEffect, useState, type FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { set } from '../actions/actions';
import type { State } from '../reducers/reducer';
import { useCounter } from '../hooks/useCounter';

function SetForm() {
    const {count} = useCounter();
    const [number, setNumber] = useState<string>('');
    const dispatch = useDispatch();

    useEffect(()=> {
        setNumber(String(count));
    }, [count]);
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        dispatch(set(parseInt(number)));
        setNumber('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <input name="value" type="number" value={number} onChange={(e) => setNumber(e.currentTarget.value)}/>
        <button>Submit</button>
    </form>
  )
}

export default SetForm