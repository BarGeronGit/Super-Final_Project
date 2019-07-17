import React from 'react';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('qk4nn7rpcn75');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY2FsbS1oYXplLTUifQ.G6X9ChIpc5Hrinv2-JG3XS4N5l6NvZLUfshl_EeoPxc';

chatClient.setUser(
  {
    id: 'calm-haze-5',
    name: 'Liama Davidovich',
    image: 'https://getstream.io/random_svg/?id=calm-haze-5&name=Calm+haze'
  },
  userToken,
);

const filters = { type: 'messaging' };
const sort = { last_message_at: -1 };
// const channels = chatClient.queryChannels(filters, sort);

const App = () => (
  <Chat client={chatClient} theme={'messaging light'}>
    <ChannelList
      filters={filters}
      sort={sort}
    />
    <Channel>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App; 