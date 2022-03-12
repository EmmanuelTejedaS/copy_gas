
export interface Cliente {
    uid: string;
    email: string;
    celular: string;
    foto: string;
    nombre: string;
    referencia: string;
    ubicacion: any;
 }

export interface Producto {
    nombre: string;
    precioNormal: number;
    precioReducido;
    foto: string;
    id: string;
    fecha: Date;
}

export interface Pedido {
    id: string;
    cliente: Cliente;
    productos: ProductoPedido[];
    precioTotal: number;
    estado: EstadoPedido;
    fecha: any;
    valoracion: number;
 }

 export interface ProductoPedido {
     producto: Producto;
     cantidad: number;
 }

 export type  EstadoPedido = 'enviado' | 'visto' | 'camino' | 'entregado';
