import Container from "../layout/Container";
import Header from "../layout/Header";


const Home = () => {
    return (
        <>
        <Header title="Home"/>
        <Container>
        <div className=" dark:text-slate-50 "> esto es home </div>
        </Container>
        </>
    )
}
export default Home;