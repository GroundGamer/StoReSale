import React from 'react'

import classes from './Counter.module.scss'


const Counter = () => {
    const [count, setCount] = React.useState(0)

    const increment = () => {
        setCount((prevState) => prevState + 1)
    }


    return (
        <div className={classes.btn}>
            <span>{count}</span>

            <br/>

            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter
