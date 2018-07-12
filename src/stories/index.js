import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ButtonSearch from '../components/button-search';
import Header from '../components/header';
import Loading from '../components/loading';
import Logo from '../components/logo';

storiesOf('Components', module)
  .add('button-search', () => <ButtonSearch buttonName="Search"/>)
  .add('header', () => <Header />)
  .add('loading', () => <Loading />)
  .add('logo', () => <Logo />);  