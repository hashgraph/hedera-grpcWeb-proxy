import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React from "react";

import {
    Client,
    AccountId,
    AccountBalanceQuery,
    PrivateKey,
    AccountCreateTransaction
} from "@hashgraph/sdk";

export default function App() {
  const [privateKey, setPrivateKey] = React.useState("");
  const [proxyUrl, setProxyUrl] = React.useState("");
  const [nodeAccountId, setNodeAccountId] = React.useState("");
  const [accountId, setAccountId] = React.useState("");
  const [status, setStatus] = React.useState("");

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
    <View style={styles.container}>
      <Text>proxyUrl:
        <TextInput
            testID="proxyUrl"
            onChangeText={setProxyUrl}
            value={proxyUrl}
        />
      </Text>
      <Text>PrivateKey:
        <TextInput
            testID="privateKey"
            onChangeText={setPrivateKey}
            value={privateKey}
        />
      </Text>
      <Text>AccountId:
        <TextInput
            testID="accountId"
            onChangeText={setAccountId}
            value={accountId}
        />
      </Text>
      <Text>NodeAccountId:
        <TextInput
            testID="nodeAccountId"
            onChangeText={setNodeAccountId}
            value={nodeAccountId}
        />
      </Text>

      <Button
          title="Get Balance"
          testID="getBalance"
          onPress={() => getBalance()}
      />

        <Button
            title="Create Account"
            testID="createAccount"
            onPress={() => createAccount()}
        />

        <Text testID="status">{status}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
