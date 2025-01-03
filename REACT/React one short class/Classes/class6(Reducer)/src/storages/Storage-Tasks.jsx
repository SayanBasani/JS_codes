import { createContext } from "react";
import { useReducer } from "react";
// export const TStorage = createContext({});
export const TStorage = createContext({
  allTasks: [],
  setallTasks: () => {},
  collectData: () => {},
});
const reducerF = (carrentItems, action) => {
  console.log(action.type)
  if (action.type == "ADD_ITEM") {
    let newItems = [...carrentItems, { task: action.payload.taskValue, date: action.payload.dateValue, }]

    return newItems;
  } else if (action.type == "DELETE_ITEM") {
    let nowTasks = carrentItems.filter((_, itemIndex) => itemIndex != action.payload.index);
    return nowTasks
  }
  return carrentItems;
}

export const ToServiceProvider = ({ children }) => {
  const [allTasks, dispatchstate] = useReducer(reducerF, []);


  const collectData = (taskValue, dateValue) => {

    if (taskValue && dateValue) {
      const addnedItemsR = {
        type: "ADD_ITEM",
        payload: {
          taskValue, dateValue,
        }
      }
      dispatchstate(addnedItemsR);
    } else {
      console.log('Please enter both task and date');
    }
  }
  return (<TStorage.Provider value={
    {
      allTasks: allTasks,
      setallTasks: dispatchstate,
      collectData: collectData,
    }}>
    {children}
  </TStorage.Provider>
  );
}
export default ToServiceProvider;
