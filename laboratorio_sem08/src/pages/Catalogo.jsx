import { useState } from "react";

const DATA = [
  { id: 1, nombre: "Laptop", precio: 3500, img: "💻" },
  { id: 2, nombre: "Mouse", precio: 60, img: "🖱️" },
  { id: 3, nombre: "Teclado", precio: 120, img: "⌨️" },
  { id: 4, nombre: "Auriculares", precio: 220, img: "🎧" },
];

export default function Catalogo() {
  const [carrito, setCarrito] = useState([]);
  const agregar = (item) => setCarrito(prev => [...prev, item]);

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Catálogo</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {DATA.map((p) => (
          <article
            key={p.id}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition
            bg-white dark:bg-gray-900 dark:border-gray-800"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg
              bg-gray-100 text-2xl dark:bg-gray-800 dark:text-gray-100">
                {p.img}
              </div>

              <div className="mt-3 sm:mt-0 flex-1">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">{p.nombre}</h2>
                <p className="text-gray-600 dark:text-gray-300">Precio: S/ {p.precio}</p>
                <button
                  onClick={() => agregar(p)}
                  className="mt-3 rounded-lg px-3 py-2
                  bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring
                  dark:bg-emerald-700 dark:hover:bg-emerald-800"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-lg border-l-4 border-sky-500 bg-sky-50 p-3 text-sky-900
      dark:bg-sky-900/30 dark:text-sky-200">
        Carrito: <span className="font-semibold">{carrito.length}</span> producto(s)
      </div>
    </>
  );
}
