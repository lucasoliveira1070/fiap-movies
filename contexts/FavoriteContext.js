import { createContext, useState } from "react";

export const FavoriteContext = createContext(null)

export function FavoriteProvider({ children }) {
    const [quantidade, setQuantidade] = useState(0)
    const [favoritos, setFavoritos] = useState([])
    const [visitados,setVisitados] = useState([]);

    function adicionarFavorito(filme) {
        setQuantidade(quantidade + 1)
        let novaLista = favoritos
        novaLista.push(filme)
        setFavoritos(novaLista)
    }

    function listarFavoritos() {
        return favoritos;
    }

    function removerFavorito(filme) {
        setQuantidade(quantidade - 1)
        let novaLista = favoritos.filter(({ id }) => filme.id !== id)
        setFavoritos(novaLista)
    }

    return (
        <FavoriteContext.Provider value={{ quantidade, adicionarFavorito, removerFavorito, listarFavoritos }}>
            {children}
        </FavoriteContext.Provider>
    )
}