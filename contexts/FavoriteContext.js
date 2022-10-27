import { createContext, useState } from "react";

export const FavoriteContext = createContext(null)

export function FavoriteProvider({ children }) {
    const [quantidade, setQuantidade] = useState(0)
    const [qtdVisitados, setQtdVisit] = useState(0);
    const [favoritos, setFavoritos] = useState([]);
    const [visitados, setVisitados] = useState([]);

    function listarUltimosVisitados() {
        return visitados;
    }

    function adicionarUltimosVisitados(filme) {
        let novaListaVisitados = visitados;
        setQtdVisit(qtdVisitados + 1)
        if (novaListaVisitados.includes(filme)) {
            const fromIndex = novaListaVisitados.indexOf(filme.id);
            const toIndex = 0;
            const element = novaListaVisitados.splice(fromIndex, 1)[0];
            novaListaVisitados.splice(toIndex, 0, element);
            return;
        }

        if (novaListaVisitados.length == 5) {
            novaListaVisitados.shift();
            novaListaVisitados.push(filme);
            setVisitados(novaListaVisitados)
            return;
        }
        else if (novaListaVisitados.length == 0) {
            novaListaVisitados.unshift(filme);
            setVisitados(novaListaVisitados)
            return;
        }
        novaListaVisitados.push(filme);
        setVisitados(novaListaVisitados)
        return;
    }

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
        <FavoriteContext.Provider value={{ quantidade, listarUltimosVisitados, adicionarUltimosVisitados, adicionarFavorito, removerFavorito, listarFavoritos }}>
            {children}
        </FavoriteContext.Provider>
    )
}