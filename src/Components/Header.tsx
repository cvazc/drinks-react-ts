import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"

export default function Header() {
    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    })
    
    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === "/", [pathname])
    const {fetchCategories, categories, serachRecipes} = useAppStore()

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleChange = (event:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // TODO: Validate
        if(Object.values(searchFilters).includes('')){
            console.log("Todos los campos son obligatorios")
            return
        }

        serachRecipes(searchFilters)
    }

    return (
        <header
            className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}
        >
            <div className="container px-5 py-16 mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="Logo" />
                    </div>
                    <nav className="flex gap-4 header">
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "font-bold text-orange-500 uppercase"
                                    : "font-bold text-white uppercase"
                            }
                            to="/"
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "font-bold text-orange-500 uppercase"
                                    : "font-bold text-white uppercase"
                            }
                            to="/bookmarks"
                        >
                            Favoritos
                        </NavLink>
                    </nav>
                </div>
                {isHome && (
                    <form className="p-10 my-32 space-y-6 bg-orange-400 rounded-lg shadow md:w-1/2 2xl:w-1/3" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <label
                                htmlFor="ingredient"
                                className="block font-extrabold text-white uppercase text-ls"
                            >
                                Nombre o Ingredientes:
                            </label>
                            <input
                                type="text"
                                id="ingredient"
                                name="ingredient"
                                className="w-full p-3 rounded-lg focus:outline-none"
                                placeholder="Nombre o ingrediente. Ej. Vodka, tequila, café"
                                onChange={handleChange}
                                value={searchFilters.ingredient}
                            />
                        </div>
                        <div className="space-y-4">
                            <label
                                htmlFor="category"
                                className="block font-extrabold text-white uppercase text-ls"
                            >
                                Categoría:
                            </label>
                            <select
                                id="category"
                                name="category"
                                className="w-full p-3 rounded-lg focus:outline-none"
                                onChange={handleChange}
                                value={searchFilters.category}
                            >
                                <option value="">-- SELECCIONAR --</option>
                                {categories.drinks.map((category) => (
                                    <option
                                        key={category.strCategory}
                                        value={category.strCategory}
                                    >
                                        {category.strCategory}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <input
                            type="submit"
                            value="Buscar recetas"
                            className="w-full p-2 font-extrabold text-white uppercase bg-orange-800 rounded-lg cursor-pointer hover:bg-range-900"
                        />
                    </form>
                )}
            </div>
        </header>
    )
}
