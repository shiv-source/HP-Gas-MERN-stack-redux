
import Login from "../components/login";
import React from 'react';
import {routes} from "./routes";
import {Route,Switch} from 'react-router-dom';


 
export const RootNavigator=()=>(

    <Switch >{
      routes.map((router)=>{
        return <Route key={router.path} path={router.path} component={router.component}
        {...router}
        />
      })

    }
       
    </Switch >
)
