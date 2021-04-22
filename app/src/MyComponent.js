import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import logo from "./logo.png";

const { ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  const labels = ['Shipped', 'Delivered'];
  return (
    <div className="App">
      <div>
        <img src={logo} alt="drizzle-logo" />
        <h1>Drizzle Examples</h1>
        <p>
          Examples of how to get started with Drizzle in various situations.
        </p>
      </div>
      <div className="section">
        <h2>Shipping</h2>
        <p>
          <strong>Statut Livraison: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Shipping"
            method="orderStatus"
          />
        </p>
        <div>
          <p>Shipped : </p>
          <ContractForm drizzle={drizzle} contract="Shipping" method="isShipped"/>
        </div>
        <div>
          <p>Delivered : </p>
          <ContractForm drizzle={drizzle} contract="Shipping" method="isDelivered"/>
        </div>
      </div>

    </div>
  );
};
