import {useSelector,useDispatch} from 'react-redux'
import {incCount,decCount} from '../Counter/Action'
import './counter.css';
export const Counter=()=>{
const mystate = useSelector((state)=>state.ChangeTheNumber)
const dispatch = useDispatch()
    return (

<>
    <div>
  <button  className="minus" onClick={()=>{dispatch(decCount())}}>-</button>
  <input type="text"  value={mystate}/>
  <button  className="plus" onClick={()=>{dispatch(incCount())}}>+</button>
  </div>
</>

    )

}