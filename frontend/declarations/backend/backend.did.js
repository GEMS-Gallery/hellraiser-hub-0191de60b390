export const idlFactory = ({ IDL }) => {
  const GameInfo = IDL.Record({
    'title' : IDL.Text,
    'description' : IDL.Text,
    'releaseYear' : IDL.Nat,
  });
  return IDL.Service({
    'getGameInfo' : IDL.Func([], [GameInfo], ['query']),
    'getKeyFeatures' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
