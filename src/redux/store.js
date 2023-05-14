import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Components/userSlice'
import addReducer from './Components/addSlice'
import updateReducer from './Components/updateSlice'
import detailReducer from './Components/detailsSlice'
import editReducer from './Components/updateSlice'
import todoReducer from './Components/todocreateSlice'
import todoeditReducer from './Components/todoeditSlice'
import usersReducer from './Components/todoindexSlice'
const store = configureStore({
    reducer:{
        user:userReducer,
        create:addReducer,
        update:updateReducer,
        detail:detailReducer,
        edit:editReducer,
        tdcreate:todoReducer,
        tdedit:todoeditReducer,
        users:usersReducer
      
       
    }
   
})
export default store