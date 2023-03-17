
import Header from './Header'
import Code from './Code'
import Result from './Result'
const Home = () => {
    return(
        <>
        <Header />
        <Code />
        <Result />
        </>
    )
}

// advantages of using fragments(<> </>)
// 1.Dont crate a extra dom
// 2.memory low
// 3.faster

export default Home;