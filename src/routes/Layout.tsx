import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Player from "../components/Player";

export type Track = {
  id: string;
  title: string;
  position: number;
  length: string;
};

export type PlayerTrack = Track & {
  albumId: string;
  artist: string;
  imageUrl: string;
};

export const PlayerContext = React.createContext<{
  isPlaying: boolean;
  setIsPlaying: (v: boolean) => void;
  currentTrack: PlayerTrack | null;
  setCurrentTrack: (v: PlayerTrack) => void;
}>({
  isPlaying: false,
  setIsPlaying: () => {},
  currentTrack: null,
  setCurrentTrack: () => {},
});

export default function Layout() {
  let [isPlaying, setIsPlaying] = React.useState(false);
  let [currentTrack, setCurrentTrack] = React.useState<PlayerTrack | null>(
    null
  );

  console.log(isPlaying, currentTrack);

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        currentTrack,
        setCurrentTrack,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
      <div id="audio-player">
        <Player />
      </div>
    </PlayerContext.Provider>
  );
}
