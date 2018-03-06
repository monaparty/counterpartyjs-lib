import { CounterpartyAPIStub } from '../CounterpartyAPIStub';
/* TODO:
import { Balance } from '../objects/Balance';
import { Bet } from '../objects/Bet';
import { BetMatch } from '../objects/BetMatch';
import { Broadcast } from '../objects/Broadcast';
import { BTCPay } from '../objects/BTCPay';
import { Burn } from '../objects/Burn';
import { Cancel } from '../objects/Cancel';
import { DebitCredit } from '../objects/DebitCredit';
import { Dividend } from '../objects/Dividend';
import { Issuance } from '../objects/Issuance';
import { Order } from '../objects/Order';
import { OrderMatch } from '../objects/OrderMatch';
import { RawTransaction } from '../objects/RawTransaction';
import { Send } from '../objects/Send';
*/
export interface Params {
  /**
   * The canonical hexadecimal serialization of the transaction (not its hash),
   * e.g. from the data_hex return value from get_tx_info.
   */
  data_hex: string;
}

export interface Result {
  /**
   * The ID of the message type. Legacy sends are 0 and enhanced sends are 2.
   * This must be a integer value.
   */
  message_type_id: number;

  /**
   * A map of message parameters. For legacy sends this object includes asset and quantity.
   * For enhanced sends, this object includes address, asset, quantity and memo.
   * For legacy sends, the source and destination are found using get_tx_info.
   * For enhanced sends, the destination address is in the message parameters
   * and the source may be found using get_tx_info.
   */
  unpacked: any; /* TODO: */
}

export class Unpack extends CounterpartyAPIStub<Params, Result> {

  public call = (arg: string|Params): Result =>
    super.callback((typeof arg === 'string') ?
    {
      data_hex: arg,
    } :
    arg)
}
