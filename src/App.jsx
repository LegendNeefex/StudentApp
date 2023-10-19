import Topbar from "./components/header";
import Banner from "./components/body";
import StudentList from "./components/StudentList";
import StudentsSummary from "./components/StudentsSummary";
import StudentForm from "./StudentForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Post from "./components/pages/Post";
import NotFound from "./components/pages/NotFound";
import { StudentProvider } from "./context/StudentContext";

function App() {
    return ( 
        <StudentProvider>
            <BrowserRouter>
            <Topbar/> 
            <Routes>
                <Route path="/" element={
                    <>
                        <Banner firstName = "Ifeoluwa" age = {27} />
                        <StudentForm/>
                        <StudentsSummary/>
                        <StudentList />
                    </>
                }/>
                <Route path="/About" element={<About />}/>
                <Route path="/product/:id" element={<Products />}/>
                <Route path="/post" element={<Post />}/>
                <Route path="/notfound" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
        </StudentProvider>
    );
}

export default App;