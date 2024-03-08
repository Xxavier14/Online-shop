import { Filters} from "./Filters"
export function Header ({changeFilters}){
    return(
        <header>
            <h1>Onine Shop</h1>
            <Filters onChange={changeFilters}/>
        </header>
    )
}