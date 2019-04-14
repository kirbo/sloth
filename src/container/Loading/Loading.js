import React, { Component } from 'react';
import styled from 'styled-components';

import { GlobalStyles, FONT_SIZE } from '../../assets/css';
import { DIMENSION, COLOR } from '../../assets/css';

class Loading extends Component {
  state = {};

  componentDidMount = () => {
    setTimeout(() => {
      document.querySelector('.loading').classList.remove('hidden');
    }, 250);
  }

  componentWillReceiveProps = (props, state) => {
    if (props.slackInstancesLoaded) {
      document.querySelector('.loading').classList.add('loaded');
      setTimeout(() => {
        props.setProperty({ hideLoading: true });
      }, 400);
      setTimeout(() => {
        props.setProperty({ showLoading: false });
      }, 1500);
    }
    return state;
  }

  render = () => (
    <React.Fragment>
      <GlobalStyles />
      <Styled hideLoading={this.props.hideLoading}>
        <Layout>
          <div className="container">
            <div className="loading hidden">
              Loading, please standby...
            </div>
          </div>
        </Layout>
      </Styled>
    </React.Fragment>
  );
}

const Styled = styled.div`
  position: absolute;
  z-index: 1000;
  font-size: ${FONT_SIZE['m']};
  color: ${COLOR['black']};
  font-family: arial;
  display: flex;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background: radial-gradient(${COLOR['darkBlue']}, ${COLOR['black']});
  transition: all 0.5s ease;
  opacity: ${({ hideLoading }) => hideLoading ? 0 : 1};
`;

const Layout = styled.div`
  display: flex;
  flex: 1;

  & .container {
    position: relative;
    width: 100%;
    justify-content: center;
    display: flex;
  }

  & .loading {
    color: ${COLOR['lightGray']};
    opacity: 1;
    height: ${DIMENSION['1.5x']};
    top: calc(50% - ${DIMENSION['1.5x']}/2);
    transition: all 0.25s ease;
    position: absolute;
    margin-left: 0;

    &.hidden {
      opacity: 0;
      margin-left: -10rem;
    }

    &.loaded {
      opacity: 0;
      margin-left: 10rem;
    }
  }
`;

export default Loading;