import axios from "axios";
const stripe = Stripe(
  "pk_test_51H18gkGdZbvZaXo6dMkYlsIhV0xzLumSMkW7eImbbrDvYPE8jIajPS2PujzxxpN3cZF9ZstK1fspSUSPm08m2nJZ00kGdwrTbd"
);

const buyBtn = document.querySelector("#buy-btn");

if (buyBtn) {
  buyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const { productid } = e.target.dataset;
    console.log(productid);
    buyProduct(productid);
  });
}

export const buyProduct = async (productId) => {
  try {
    const session = await axios(
      `http://127.0.0.1:3000/api/orders/checkout/${productId}`
    );
    console.log(session);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
  }
};
