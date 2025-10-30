import {Outlet} from "react-router-dom";
import Loader from "./Loader";
import {useLoading} from "../supportive/LoadingProvider";

const MainLayout = () => {

    const {isLoading} = useLoading();

    return (
        <>
            {isLoading ? <Loader/> : null}

            {/*<Header/>*/}

            <main>
                <Outlet/>
            </main>

            {/*<Footer/>*/}
        </>
    );
};

export default MainLayout;