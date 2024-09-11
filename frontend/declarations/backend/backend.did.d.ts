import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface GameInfo {
  'title' : string,
  'description' : string,
  'releaseYear' : bigint,
}
export interface _SERVICE {
  'getGameInfo' : ActorMethod<[], GameInfo>,
  'getKeyFeatures' : ActorMethod<[], Array<string>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
