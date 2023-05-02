import { memo } from 'react';
import {BiNotepad} from 'react-icons/bi';

function Header(){
    return(
        <div className="header">
            <div className='notepad'>
                <BiNotepad size={32} color='red'/>
                <span className='nameNote'>Bloco de Notas</span>
            </div>
            <div className='title'>
                <span >Tarefas</span>
            </div>
                     
        </div>
    );
}

export default memo(Header);