import type Tema from "../Models_tmp/Tema";
import type Usuario from "../Models_tmp/Usuario";

export default interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema:  Tema | null;
    usuario: Usuario | null;
}