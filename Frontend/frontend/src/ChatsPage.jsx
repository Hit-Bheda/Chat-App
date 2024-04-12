import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'

function ChatsPage(props) {
    const chatProps= useMultiChatLogic(
       'e6128d93-ed6f-45be-9d0d-9650ff5ea0f3',
        props.user.username,
        props.user.secret
    )
  return (
    <div style={{height:'100vh'}}>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow style={{height:'100%'}} {...chatProps}/>
    </div>
  )
}

export default ChatsPage
