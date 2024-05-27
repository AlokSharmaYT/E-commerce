import './Styles/Main.css'

export default function Main() {
  return (
    <>
      <main>
        <section class="products">
            <article class="product-card">
                <img src="product1.jpg" alt="Product 1"></img>
                <h2>Product 1</h2>
                <p>$19.99</p>
                <button>Add to Cart</button>
            </article>
            <article class="product-card">
                <img src="product2.jpg" alt="Product 2"></img>
                <h2>Product 2</h2>
                <p>$29.99</p>
                <button>Add to Cart</button>
            </article>
            <article class="product-card">
                <img src="product3.jpg" alt="Product 3"></img>
                <h2>Product 3</h2>
                <p>$39.99</p>
                <button>Add to Cart</button>
            </article>
        </section>
    </main>
    </>
  )
}
