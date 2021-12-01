import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai'

import '../styles/Popout.css'

export default function Popout() {
    return (
        <div className="popout">
            <AiOutlineCheck size="2rem"/>
            <p>Criado com sucesso</p>
        </div>
    )
}