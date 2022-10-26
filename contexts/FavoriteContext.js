import { createContext, useState } from "react";

export const FavoriteContext = createContext({})

export function FavoriteProvider({ children }) {
    const [quantidade, setQuantidade] = useState(0)
    const [favoritos, setFavoritos] = useState([])

    function adicionarFavorito(filme) {
        setQuantidade(quantidade + 1)
        let novaLista = favoritos
        novaLista.push(filme)
        setFavoritos(novaLista)
        console.log(favoritos)
    }

    function listarFavoritos() {
        console.log(favoritos)
    }

    function removerFavorito(filme) {
        setQuantidade(quantidade - 1)
        let novaLista = favoritos.filter(({ id }) => filme.id !== id)
        setFavoritos(novaLista)
    }

    return (
        <FavoriteContext.Provider value={{ favoritos, quantidade, adicionarFavorito, removerFavorito, listarFavoritos }}>
            {children}
        </FavoriteContext.Provider>
    )
}