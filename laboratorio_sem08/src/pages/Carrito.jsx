import { useState } from "react";

export default function Carrito(){
    const [items] = useState([
        { id: 1, nombre: "Laptop", precio: 3500 },
        { id: 2, nombre: "Mouse", precio: 60 },
    ]);
    const total = items.reduce((acc, it) => acc + it.precio, 0);

    return(
        <section>
            <h1 className="text-2x1 font-semibold mb-4 text-gray-900 dark:theme-gray-100">Carrito</h1>

            <div className="overflow-x-auto border rounded-x1 bg-white dark:bg-gray-900 dark:border-gray-800">
                <table className="w-full text-left">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr>
                            <th className="px-4 py-2 text-gray-700 dark:text-gray-300">Producto</th>
                            <th className="px-4 py-2 text-gray-700 dark:text-gray-300">Precio (S/)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((it) => (
                            <tr key={it.id} className="bordert-t dark:border-gray-800">
                                <td className="px-4 py-2 text-gray-900 dark:text-gray-100">{it.nombre}</td>
                                <td className="px-4 py-2">
                                    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm
                                                        bg-gray-200 text-gray-900
                                                        dark:bg-gray-700 dark:text-gray-100">
                                        {it.precio}
                                    </span>
                                </td>
                            </tr>
                        ))};
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-2 text-emerald-9000
                                    dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-200">
                    Total: <span className="font-semibold">S/ {total}</span>
                </div>
                <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:ring
                                    dark:bg-indigo-700 dark:hover:bg-indigo-800">
                    Proceder al pago
                </button>
            </div>
        </section>
    );
}