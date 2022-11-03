import React from 'react'
import Slide from './Slide'

const ANIMACOES2 = () => {

    const slides = [

        {
            id: 'Alanzoka',
            text: 'https://s2.glbimg.com/fxpM8IPsrqKwF2wuSH19YJgOVWI=/0x0:1024x576/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/x/h/H1f77qRAau300vsAXuvA/alanzoka-nomes-mais-conhecidos-1024x576.jpg',
        },
        {
            id: 'Casimiro',
            text: 'https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2022/01/twitch-casimiro-reproducao-scaled-1280x720.jpg',
        },
        {
            id: 'Kennzy',
            text: 'https://pbs.twimg.com/media/FXeKk9NXoAARTNW.jpg',
        }
    ]



    return (

        <div>
            <Slide slides={slides} />
        </div>
    )
}

export default ANIMACOES2