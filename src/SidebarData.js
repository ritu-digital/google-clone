import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import RestoreIcon from '@material-ui/icons/Restore';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SettingsIcon from '@material-ui/icons/Settings';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import ExplicitOutlinedIcon from '@material-ui/icons/ExplicitOutlined';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'Search History',
    path: '/history',
    icon: <RestoreIcon />,
  },
  {
    title: 'Collections',
    path: '/collections',
    icon: <BookmarksIcon />,
  },
  {
    title: 'Offline Searches',
    path: '/offlinesearches',
    icon: <LibraryBooksIcon />,
  },
  {
    title: 'Setings',
    path: '/settings',
    icon: <SettingsIcon />,
  },
  {
    title: 'Your data in Search',
    path: '/searchdata',
    icon: <PermDataSettingIcon />,
  },
  {
    title: 'Hide explicit results: off',
    path: '/results',
    icon: <ExplicitOutlinedIcon />,
  },
  {
    title: 'How Search Works',
    path: '/searchwork',
    icon: <FindInPageIcon />,
  },
  {
    title: 'Help',
    path: '/help',
    icon: <HelpIcon />,
  },
  {
    title: 'Send feedback',
    path: '/feedback',
    icon: <FeedbackIcon />,
  },
];
