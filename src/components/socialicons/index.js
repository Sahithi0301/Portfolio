import React from "react";
import "./style.css";

import { SiLeetcode, SiLinkedin, SiFacebook, SiGithub } from "react-icons/si";

import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
      {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <SiLinkedin />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <SiGithub />
            </a>
          </li>
        )}
        
        {socialprofils.leetcode && (
          <li>
            <a href={socialprofils.leetcode}>
            <SiLeetcode />        
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <SiFacebook />
            </a>
          </li>
        )}
        
      </ul>
      <p>Social profiles </p>
    </div>
  );
};
