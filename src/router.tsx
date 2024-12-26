import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import BookmarksPage from "./views/BookmarksPage"
import Layout from "./layouts/Layout"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPage />} index />
                    <Route path="/bookmarks" element={<BookmarksPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
