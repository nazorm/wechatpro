import React from 'react'



class ChatRoom extends React.Component{
    constructor(){
        super()
        this.state = {
         user : '',
        }
    }
    componentDidMount(){
        console.log(this.props)
        let accessToken = localStorage.getItem('accessToken');
        fetch('https://wechatpro.herokuapp.com/api/chat/history/messages', {
           method : 'POST',
           headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            "username" : this.props.match.params.user
          }),
        })
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}


export default ChatRoom