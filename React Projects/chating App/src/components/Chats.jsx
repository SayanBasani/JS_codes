import style from './Chats.module.css'
function Chats() {
  return (
    <div className="mb-2 cart">
      <div className={`${style.chatBox} ${style.custom_bg} ${style.custom_bg}`}>
        <div className={`${style.chatBox_image}`}>
          <i className={`bi bi-person-circle ${style.fsM_40}`}></i>
        </div>
        <div className={`${style.chatBox_Ditels}`}>
          <div className={`${style.chatBox_Ditels_name}`}>Sayan Basani</div>
          <div className={`${style.chatBox_Ditels_Last_chat}`}>hello!</div>
        </div>
      </div>
    </div>
  )
}

export default Chats;