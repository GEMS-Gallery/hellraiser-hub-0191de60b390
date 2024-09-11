import Nat "mo:base/Nat";

import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
  type GameInfo = {
    title: Text;
    releaseYear: Nat;
    description: Text;
  };

  stable var gameInfo: GameInfo = {
    title = "Doom";
    releaseYear = 1993;
    description = "Doom is a first-person shooter game developed by id Software. First released in 1993, it pioneered immersive 3D graphics, networked multiplayer gaming, and support for player-created modifications."
  };

  stable var keyFeatures: [Text] = [
    "First-person shooter gameplay",
    "Sci-fi horror setting",
    "Iconic weapons (e.g., BFG 9000)",
    "Varied demon enemies",
    "Fast-paced action",
    "Multiplayer modes"
  ];

  public query func getGameInfo(): async GameInfo {
    gameInfo
  };

  public query func getKeyFeatures(): async [Text] {
    keyFeatures
  };
}
