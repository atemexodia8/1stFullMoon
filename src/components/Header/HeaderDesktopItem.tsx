import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';

import 'components/styles/Header.scss';
import { HeaderListItem, HeaderMenuItem } from './HeaderListItem';
import { NewSparkleTag } from './NewSparkleTag';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { StyledMenu } from './StyledMenu';

export const HeaderDesktopItem: React.FC<{ item: HeaderMenuItem }> = ({
  item,
}) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const hasSubMenu = Array.isArray(item.items);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    if (hasSubMenu) {
      //   setOpen(!open);
      setAnchorEl(event.currentTarget);
    } else if (item.onClick) {
      //   onClick();
      item.onClick();
    } else {
      //   onClick();
      if (item.isExternal) {
        window.open(item.externalLink, item.target);
      } else {
        history.push(item.link);
      }
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        key={item.id}
        id={item.id}
        className={`menuItem ${
          pathname !== '/' && item.link.includes(pathname) ? 'active' : ''
        }`}
        onClick={handleClick}
      >
        <small>{item.text}</small>
        {item.isNew && <NewSparkleTag />}
        {hasSubMenu ? (
          open ? (
            <KeyboardArrowUp />
          ) : (
            <KeyboardArrowDown />
          )
        ) : (
          <></>
        )}
      </Box>
      <StyledMenu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {item.items?.map((d, i) => (
          <HeaderListItem
            key={'desktop-sub-menu-item' + i}
            item={d}
            onClick={handleClose}
          />
        ))}
      </StyledMenu>
    </>
  );
};
