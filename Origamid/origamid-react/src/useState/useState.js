import { useState } from "react"

const Hooks = () => {
    const [ativo, setAtivo] = useState(true)

    return (
        <button onClick={() => setAtivo(!ativo)}>
            {ativo ? 'Botão Ativo' : 'Botão Inativo'}
        </button >
    );
};

export default Hooks
