import { useEffect, useState } from "react";

const Counter = () => {
    let {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();




    return (
        <div>
            <button onClick= {}>-</button>
            {' '} <span>{coun}</span>{' '}
            <button>+</button>
        </div>
    )
}
export default Counter;