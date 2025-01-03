import style from './Container.module.css'
function Container ({children,sayan}){

  return <div className={style.container}>{children}</div>
}

export default Container;