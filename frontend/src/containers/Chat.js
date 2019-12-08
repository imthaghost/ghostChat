import React from 'react';
import Sidepanel from './Sidepanel/Sidepanel';

class Chat extends React.Component {
    render() {
        return (
            <div id="frame">
                <Sidepanel />
                <div className="content">
                    <div className="contact-profile">
                        <img src="https://avatars2.githubusercontent.com/u/29741401?s=400&v=4" alt="" />
                        <p>Ben Lafferty</p>
                        <div className="social-media">
                            {/* <i className="fa fa-facebook" aria-hidden="true"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-instagram" aria-hidden="true"></i> */}
                        </div>
                    </div>
                    <div className="messages">
                        <ul id="chat-log">
                        </ul>
                    </div>
                    <div className="message-input">
                        <div className="wrap">
                            <input id="chat-message-input" type="text" placeholder="Write your message..." />
                            <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
                            <button id="chat-message-submit" className="submit">
                                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Chat;