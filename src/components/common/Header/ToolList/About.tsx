import { useState } from 'react';
import useDebounce from 'src/hooks/useDebounce';
import toolListStyle from '../styles/ToolList.module.scss';

function About() {
  const [isAboutActive, setIsAboutActive] = useState<boolean>(false);
  const debouncedIsAboutActive = useDebounce(isAboutActive, {
    wait: 200,
  });

  const handleMouseEnter = () => {
    setIsAboutActive(true);
  };
  const handleMouseLeave = () => {
    setIsAboutActive(false);
  };

  return (
    <li className={toolListStyle['tool-about']} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href='#about'>关于抖音</a>
      <ul className={debouncedIsAboutActive ? toolListStyle.active : ''}>
        <li>
          <a href='#open'>抖音开放平台</a>
        </li>
        <li>
          <a href='#certification'>认证与合作</a>
        </li>
        <li>
          <a href='#oceanengin'>广告投放</a>
        </li>
        <li>
          <a href='#culture'>关于我们</a>
        </li>
        <li>
          <a href='#ecommerce'>抖音电商</a>
        </li>
        <li>
          <a href='#transparency'>透明度报告</a>
        </li>
      </ul>
    </li>
  );
}

export default About;
