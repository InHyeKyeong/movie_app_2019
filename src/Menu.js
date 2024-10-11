import React from "react";

function Menu() {
  return (
    <div class="menu__nav">
      <div class="menu__con">
        <div>
          <h3 class="nav__title">
            <span>Watch</span>
            <span class="moreBright">Movies</span>
          </h3>
        </div>
        <div>
          <div class="menu__img"></div>
          <div className="colorGray">InHye kyeong</div>
        </div>
        <div class="menu__content">
          <div class="menu__interval main">Main</div>
          <div class="menu__interval">
            <div class="menu__icon">a.</div>
            <div>Discovery</div>
          </div>
          <div class="menu__interval">
            <div class="menu__icon">c.</div>
            <div>Activity</div>
          </div>
          <div class="menu__interval">
            <div class="menu__icon">d.</div>
            <div>New Releases</div>
          </div>
          <div class="menu__interval">
            <div class="menu__icon">e.</div>
            <div>Trending</div>
          </div>
          <div class="menu__interval">
            <div class="menu__icon">f.</div>
            <div>Etc</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
