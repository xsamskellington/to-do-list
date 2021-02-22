import React from 'react'

export default function Form() {
    return (
        <form>
            <input type="text" />
            <button type="submit"> 
                +
            </button>

            <div>
                <select name="todos"> 
                    <option value="all"> All </option>
                    <option value="completed"> Completed </option>
                    <option value="uncompleted"> Uncompleted </option>
                </select>
            </div>

        </form>
    )
}
