import React, { FC } from 'react';
import { Cookies, setCookie } from '../../utils';

import { Root, StyledButton } from './style';

interface AnnouncementProps {
  setIsAnnouncementOpen: (isOpen: boolean) => void;
}

const Announcement: FC<AnnouncementProps> = ({ setIsAnnouncementOpen }) => {
  const onCloseClick = () => {
    setCookie(Cookies.Announcement_Disabled, 'true');
    setIsAnnouncementOpen(false);
  };

  return (
    <Root>

<div>
      [BongaConnection] is a South African platform for University and college students that allows them to share ideas and build relationships
      </div>

      <StyledButton ghost color="white" onClick={onCloseClick}>
        
      </StyledButton>
      
        
      
    </Root>
  );
};

export default Announcement;
