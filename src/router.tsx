import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"

const IndexPage = lazy(() => import("./views/IndexPage"))
const BookmarksPage = lazy(() => import("./views/BookmarksPage"))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={
                            <Suspense fallback="Cargando...">
                                <IndexPage />
                            </Suspense>
                        }
                        index
                    />
                    <Route
                        path="/bookmarks"
                        element={
                            <Suspense fallback="Cargando...">
                                <BookmarksPage />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
