"use client"
import { useState } from 'react';

export default function Home() {
  // Estado para las categorías
  const [categories, setCategories] = useState<string[]>([]);
  // Estado para la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  // Estado para el monto ingresado
  const [amount, setAmount] = useState<number>(0);
  // Estado para la nueva categoría (si el usuario quiere crear una)
  const [newCategory, setNewCategory] = useState<string>('');

  // Función para agregar una nueva categoría
  const addCategory = () => {
    if (newCategory.trim() !== '' && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCategory && amount > 0) {
      alert(`Monto: $${amount} - Categoría: ${selectedCategory}`);
      // Aquí podrías guardar el gasto en el estado global (Redux) o en una API
    } else {
      alert('Por favor, selecciona una categoría e ingresa un monto válido.');
    }
  };

  return (
    <div>
      <main className="w-1/2 container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Agregar Gasto</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Selector de categorías */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Categoría
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="" disabled>
                Selecciona una categoría
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Campo para crear una nueva categoría */}
          <div>
            <label htmlFor="newCategory" className="block text-sm font-medium text-gray-700">
              Crear nueva categoría
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="newCategory"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Nombre de la categoría"
              />
              <button
                type="button"
                onClick={addCategory}
                className="mt-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Agregar
              </button>
            </div>
          </div>

          {/* Campo para ingresar el monto */}
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Monto
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Ingresa el monto"
            />
          </div>

          {/* Botón para enviar el formulario */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Agregar Gasto
          </button>
        </form>
      </main>
    </div>
  );
}