import React from "react";
import { nanoid } from 'nanoid';

export const FilterContact =({value, hendleFilter }) => {
   const filterId= nanoid(); 
   return (
        <>
        <label htmlFor={filterId}>Find contacts by name
            <input id={filterId}
            type="text"
            value={value}
            name="filter"
            onChange={hendleFilter}
            >
            </input>
        </label>
        </>
    )
}