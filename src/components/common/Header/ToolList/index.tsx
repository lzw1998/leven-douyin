import { useState } from 'react';
import About from './About';
import Download from './Download';
import Message from './Message';
import Creator from './Creator';
import Mine from './Mine';
import Upload from './Upload';
import More from './More';
import toolListStyle from '../styles/ToolList.module.scss';

function ToolList() {
  const [mineInfo, setMineInfo] = useState({
    avatarUrl: '',
    awemeCollectCount: 1,
    awemeCount: 0,
    favoritingCount: 657,
  });
  const [activeClassName, setActiveClassName] = useState('');
  return (
    <div>
      <ul className={toolListStyle['tool-list']}>
        <About />
        <Download />
        <Creator />
        <Message />
        <Mine
          avatarUrl={mineInfo.avatarUrl}
          awemeCollectCount={mineInfo.awemeCollectCount}
          awemeCount={mineInfo.awemeCount}
          favoritingCount={mineInfo.favoritingCount}
        />
        <Upload />
        <More activeClassName={activeClassName} changeType={setActiveClassName} />
      </ul>
    </div>
  );
}

export default ToolList;
