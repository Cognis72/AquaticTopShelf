const lineUrl = "https://lin.ee/xxxxxxxx"; // Replace with real LINE OA link
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  const total = document.getElementById('total');
  const lineBtn = document.getElementById('line-order');

  cartList.innerHTML = "";
  let sum = 0;
  let message = "รายการสั่งซื้อ:%0A";

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ฿${item.price}`;
    cartList.appendChild(li);
    sum += item.price;
    message += `- ${item.name} ฿${item.price}%0A`;
  });

  total.textContent = `รวม: ฿${sum}`;
  lineBtn.href = lineUrl + "?text=" + encodeURIComponent(message + `รวมทั้งหมด ฿${sum}`);
}

const translations = {
  th: {
    koi: "ปลาคาร์ฟ",
    addToCart: "เพิ่มลงตะกร้า",
    cart: "ตะกร้าสินค้า",
    total: "รวม: ฿0",
    orderViaLine: "สั่งผ่าน LINE"
  },
  en: {
    koi: "Koi Fish",
    addToCart: "Add to Cart",
    cart: "Shopping Cart",
    total: "Total: ฿0",
    orderViaLine: "Order via LINE"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}
