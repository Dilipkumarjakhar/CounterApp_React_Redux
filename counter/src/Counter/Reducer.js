

const init=0;

export const ChangeTheNumber=(store=init,action)=>{
    switch(action.type){
        case "INC_COUNT":
            return store+1;
        
        case "DEC_COUNT":
        return store-1;
     
        default:return store;
    }
}