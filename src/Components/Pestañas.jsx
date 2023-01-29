import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import { useState } from 'react';

const Pestañas = () => {


  const [activeTab, setActiveTab] = useState("1")

  const cambiarTab = (numeroTab) => {
    if (activeTab !== numeroTab){
      setActiveTab(numeroTab)
    }
  }

  return (
    <div>
      <Nav tabs >
        <NavItem className='colordecuadrito'>
          <NavLink onClick={()=>cambiarTab("1")}> 
             Tab1
           </NavLink>
          </NavItem>

          <NavItem className='colordecuadrito'>
          <NavLink  onClick={()=>cambiarTab("2")}> 
             Tab2
           </NavLink>
          </NavItem>

          <NavItem className='colordecuadrito'>
          <NavLink  onClick={()=>cambiarTab("3")}> 
              Tab3
           </NavLink>
          </NavItem>
        </Nav>

  <TabContent activeTab={activeTab}>
         <TabPane tabId="1">
            <div className='container'>
              <br />
              <p>Hola</p>
            </div>
         </TabPane>

        <TabPane tabId="2">
           <div className='container'>
             <br />
             <p>Feliz Sábado</p>
           </div>
        </TabPane>

         <TabPane tabId="3">
           <div className='container'>
             <br />
             <p>Ha'use alfajor</p>
             <p>Ha'use alfajor</p>
             <p>Ha'use alfajor</p>
             <p>Ha'use alfajor</p>
           </div>
         </TabPane>
      </TabContent>
    </div>
  )
}

export default Pestañas