import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

export default function BookmarksPage() {
    const favorites = useAppStore((state) => state.favorites)

    const hasBookmarks = useMemo(() => favorites.length, [favorites])

    return (
        <>
            <h1 className="text-6xl font-extrabold">Favoritos</h1>
            {hasBookmarks ? (
                <div className="grid grid-cols-1 gap-10 my-10 md:grid-cols-2 2xl:grid-cols-3">
                    {favorites.map((drink) => (
                        <DrinkCard key={drink.idDrink} drink={drink} />
                    ))}
                </div>
            ) : (
                <p className="my-10 text-2xl text-center">
                    Los favoritos se mostraran aquí
                </p>
            )}
        </>
    )
}
