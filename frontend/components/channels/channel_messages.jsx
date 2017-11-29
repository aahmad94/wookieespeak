import React from 'react';
import ChannelFeedContainer from './channel_feed_container';
import ChannelInputContainer from '../message/channel_input_container';

// ChannelMessages
export default (props) => (
  <div  className="cm-container">
    <div className="cm-container2">
      <ChannelFeedContainer />
      <ChannelInputContainer />
    </div>
  </div>
);
