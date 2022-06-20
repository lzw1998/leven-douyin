import { useEffect } from 'react';
import Player from 'xgplayer';
import SideBar from './SideBar';

interface ConfigProps {
  url: string;
  id: string;
  el?: any;
}

interface PlayerProps {
  config: ConfigProps;
  rootStyle: object;
  format?: string;
  playerInit: (...args: any[]) => void;
  readyHandle: (...args: any[]) => void;
  completeHandle: (...args: any[]) => void;
  destroyHandle: (...args: any[]) => void;
}
let player: any = null;
function ReactXgplayer({
  config,
  rootStyle,
  format,
  playerInit,
  readyHandle,
  completeHandle,
  destroyHandle,
}: PlayerProps) {
  useEffect(
    () => () => {
      console.log('destroy');
      player.destroy(true);
    },
    [],
  );

  const init = (initProps: PlayerProps) => {
    if (initProps.config.url && initProps.config.url !== '') {
      player = new Player(initProps.config) || {};
      player.once('ready', () => {
        initProps.readyHandle();
      });
      player.once('complete', () => {
        initProps.completeHandle();
      });
      player.once('destroy', () => {
        initProps.destroyHandle();
      });
      initProps.playerInit && initProps.playerInit(player);
    }
  };
  const getPlayer = (ref: any) => {
    if (ref) {
      const playerConfig = {
        el: ref,
      };
      const initProps = { config, rootStyle, format, playerInit, readyHandle, completeHandle, destroyHandle };
      initProps.config = { ...config, ...playerConfig };
      init(initProps);
    }
  };
  return (
    <div ref={getPlayer} style={rootStyle}>
      <SideBar />
    </div>
  );
}

export default ReactXgplayer;
