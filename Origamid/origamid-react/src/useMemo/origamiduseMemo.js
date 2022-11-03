import React, { Fragment, useCallback, useMemo, useState } from 'react'

const OrigamiduseMemo = () => {


    const [contador, setContador] = useState(0)




    const handleClick = useCallback(() => {
        setContador((contador) => contador + 1)
    }, [])










    return (

        <Fragment>
            <button onClick={handleClick}>{contador}</button>
        </Fragment>
    )
}


export default OrigamiduseMemo

