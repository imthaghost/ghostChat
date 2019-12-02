import React from 'react';


class Chat extends React.Component {
    render() {
        return (
            <div id="frame">
                <div id="sidepanel">
                    <div id="profile">
                        <div class="wrap">
                            <img id="profile-img" src="https://avatars3.githubusercontent.com/u/46610773?s=460&v=4"
                                class="online" alt="" />
                            <p>Ghost</p>
                            <i class="fa fa-chevron-down expand-button" aria-hidden="true"></i>
                            <div id="status-options">
                                <ul>
                                    <li id="status-online" class="active"><span class="status-circle"></span>
                                        <p>Online</p>
                                    </li>
                                    <li id="status-away"><span class="status-circle"></span>
                                        <p>Away</p>
                                    </li>
                                    <li id="status-busy"><span class="status-circle"></span>
                                        <p>Busy</p>
                                    </li>
                                    <li id="status-offline"><span class="status-circle"></span>
                                        <p>Offline</p>
                                    </li>
                                </ul>
                            </div>
                            <div id="expanded">
                                <label for="twitter"><i class="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
                                <input name="twitter" type="text" value="mikeross" />
                                <label for="twitter"><i class="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
                                <input name="twitter" type="text" value="ross81" />
                                <label for="twitter"><i class="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
                                <input name="twitter" type="text" value="mike.ross" />
                            </div>
                        </div>
                    </div>
                    <div id="search">
                        <label for=""><i class="fa fa-search" aria-hidden="true"></i></label>
                        <input type="text" placeholder="Search contacts..." />
                    </div>
                    <div id="contacts">
                        <ul>
                            <li class="contact active">
                                <div class="wrap">
                                    <span class="contact-status busy"></span>
                                    <img src="https://avatars2.githubusercontent.com/u/29741401?s=400&v=4" alt="" />
                                    <div class="meta">
                                        <p class="name">Ben Lafferty</p>
                                        <p class="preview"></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="bottom-bar">
                        <button id="addcontact"><i class="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add
                        contact</span></button>
                        <button id="settings"><i class="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
                    </div>
                </div>
                <div class="content">
                    <div class="contact-profile">
                        <img src="https://avatars2.githubusercontent.com/u/29741401?s=400&v=4" alt="" />
                        <p>Ben Lafferty</p>
                        <div class="social-media">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="messages">
                        <ul id="chat-log">
                        </ul>
                    </div>
                    <div class="message-input">
                        <div class="wrap">
                            <input id="chat-message-input" type="text" placeholder="Write your message..." />
                            <i class="fa fa-paperclip attachment" aria-hidden="true"></i>
                            <button id="chat-message-submit" class="submit">
                                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Chat;