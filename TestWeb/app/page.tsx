'use client'

import {
    Client,
    AccountId,
    AccountBalanceQuery,
    PrivateKey,
    AccountCreateTransaction
} from "@hashgraph/sdk";
import React, { useState } from "react";

export default function Home() {
    const [privateKey, setPrivateKey] = useState("");
    const [proxyUrl, setProxyUrl] = useState("");
    const [nodeAccountId, setNodeAccountId] = useState("");
    const [accountId, setAccountId] = useState("");
    const [status, setStatus] = useState("");

    function getClient() {
        const network = {};
        // @ts-ignore
        network[proxyUrl] = AccountId.fromString(nodeAccountId);

        const client =  Client.forNetwork(network);
        const operatorId = AccountId.fromString(accountId);
        const operatorKey = PrivateKey.fromString(privateKey);

        client.setOperator(operatorId, operatorKey);

        return client;
    }

    async function getBalance() {
        console.log("balance click");
        setStatus("");
        console.log("Get balance");
        const client = getClient();
        const balance = await new AccountBalanceQuery()
            .setAccountId(AccountId.fromString("0.0.3"))
            .execute(client);
        client.close();
        console.log(balance.hbars.toString());
        setStatus(balance.hbars.toString());
    }

    async function createAccount() {
        setStatus("");
        console.log("Create account");
        const client = getClient();
        const newPrivateKey = PrivateKey.generate();
        const response = await new AccountCreateTransaction()
            .setKey(newPrivateKey.publicKey)
            .execute(client);
        const receipt = await response.getReceipt(client);
        client.close();
        console.log(receipt.status.toString());
        setStatus(receipt.status.toString());
    }

  return (
      <div>
          <label>ProxyUrl:
              <input
                  data-testid="proxyUrl"
                  onChange={e => setProxyUrl(e.target.value)}
                  value={proxyUrl}
              />
          </label>
          <p></p>
          <label>PrivateKey:
              <input
                  data-testid="privateKey"
                  onChange={e => setPrivateKey(e.target.value)}
                  value={privateKey}
              />
          </label>
          <p></p>
          <label>AccountId:
              <input
                  data-testid="accountId"
                  onChange={e => setAccountId(e.target.value)}
                  value={accountId}
              />
          </label>
          <p></p>
          <label>NodeAccountId:
              <input
                  data-testid="nodeAccountId"
                  onChange={e => setNodeAccountId(e.target.value)}
                  value={nodeAccountId}
              />
          </label>
          <p></p>
          <button
            title="Get Balance"
            onClick={() => getBalance()}
          >Get Balance</button>
          <p></p>
          <button
              title="Create Account"
              onClick={() => createAccount()}
          >Create Account</button>
          <p></p>
          <text data-testid="status">{status}</text>
      </div>
  );
}
