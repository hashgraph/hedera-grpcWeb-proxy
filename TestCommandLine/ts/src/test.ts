import {CryptoServiceClient, ServiceError} from "../_proto/crypto_service_pb_service";
import { Query } from '../_proto/query_pb';
import { AccountID } from '../_proto/basic_types_pb';
import { QueryHeader, ResponseType } from '../_proto/query_header_pb';
import { CryptoGetAccountBalanceQuery } from '../_proto/crypto_get_account_balance_pb';

import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
import { Response } from "../_proto/response_pb";

function main() {

  let testEndpoint = '';
  if (process.argv.length > 2) {
    testEndpoint = process.argv[2];
  } else {
    console.error("missing grpc-web endpoint argument");
    process.exit(1);
  }

  const accountId = new AccountID();
  accountId.setShardnum(0);
  accountId.setRealmnum(0);
  accountId.setAccountnum(2);

  const cryptoGetAccountBalanceQuery = new CryptoGetAccountBalanceQuery();
  cryptoGetAccountBalanceQuery.setAccountid(accountId);

  const queryHeader = new QueryHeader();
  queryHeader.setResponsetype(ResponseType.ANSWER_ONLY);

  const query = new Query();
  query.setCryptogetaccountbalance(cryptoGetAccountBalanceQuery);

  const client = new CryptoServiceClient(testEndpoint, { transport: NodeHttpTransport() });
  try {
    client.cryptoGetBalance(
        query,
        (error: ServiceError | null, responseMessage: Response | null) => {
          if (error) {
            console.log(error);
            process.exit(1);
          } else {
            console.log(responseMessage?.getCryptogetaccountbalance()?.getBalance());
            process.exit(0);
          }
        }
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
