class WebSocketService {

    static instance = null;
    callbacks = {};

    static getInstance() {
        if (!WebSocketService.instance) {
            WebSocketService.instance = new WebSocketService();
        }
        return WebSocketService.instance
    }

    constructor() {
        this.socketRef = null;
    }
    connect() {
        const path = 'ws://127.0.0.1:8000/ws/chat/test';
        this.socketRef = new WebSocket(path);
        this.socketRef.onopen = () => {
            console.log('websocket open')
        };
        this.socketRef.onmessage = e => {
            // sending a message
        }
        this.socketRef.onerror = e => {
            console.log(e.message);
        }
        this.socketRef.onclose = () => {
            console.log('websocket is closed');
            this.connect();
        }
    }
    socketNewMessage(data) {
        const parsedData = JSON.parse(data);
        const command = parsedData.command;
    }
}