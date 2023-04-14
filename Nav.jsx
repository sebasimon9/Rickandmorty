import SearchBar from './SearchBar';

const Nav = ({onSearch}) => {
    return(
        <nav>
            <SearchBar oneSearch={onSearch}/>
        </nav>
    )
}
export default Nav;
