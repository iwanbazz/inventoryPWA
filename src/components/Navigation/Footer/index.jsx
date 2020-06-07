import React from 'react';
import classNames from 'classnames';

import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className={classNames('level', classes.level)}>
          <div className="level-left">
            <div className="level-item">
              © 2020 <span>&nbsp;</span>
            </div>
          </div>
          <div className={classNames('level-right', classes.levelRight)}>
            <div className="level-item">
              <div className="logo">
                <a href="https://github.com/iwanbazz/inventoryPWA">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                    alt="https://github.com/iwanbazz/inventoryPWA"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
