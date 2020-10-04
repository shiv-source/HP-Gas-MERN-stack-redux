import React from 'react';
import {routes} from "./routes";
import {Route,Switch , Redirect } from 'react-router-dom';


 
export const RootNavigator=()=>(
    <div> 
      <Switch >{
        routes.map((router)=>{
          return <Route key={router.path} path={router.path} component={router.component}
          {...router}
          />
        })

      }
        <Redirect to="/" />
      </Switch >
    </div>
)
