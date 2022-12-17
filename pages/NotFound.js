import React from 'react'
import { Link } from 'react-router-dom'

 export const NotFound =() =>{
    return(
        <div>
            Данной страницы не существует . Будьте добры перейти на <Link to='/'>Главную</Link>
        </div>
    )

}
  
export default NotFound