import './Products.css'
export function Products({ products }) {
  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div className="">
              <strong>{product.title} - ${product.price}</strong>
            </div>
            <div className="">
              <button>Añadir al carrito</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
