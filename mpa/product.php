<?php
session_start();

$data = file_get_contents("products.json");
$products = json_decode($data, true);

$id = $_GET['id'] ?? null;
$product = null;

foreach ($products as $item) {
    if ($item['id'] == $id) {
        $product = $item;
        break;
    }
}

// Lägg till i cart
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $product) {
    $_SESSION['cart'][] = $product;
}
?>


<?php
$data = file_get_contents("products.json");
$products = json_decode($data, true);

$id = $_GET['id'] ?? null;
$product = null;

foreach ($products as $item) {
    if ($item['id'] == $id) {
        $product = $item;
        break;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Produkt - MPA</title>
  <link rel="stylesheet" href="app_php.css">
  <link rel="stylesheet" href="index_php.css">
</head>
<body>

  <nav class="navbar">
    <div class="navbar-left">
      <h1 class="logo">AHAMKARA</h1>
    </div>

    <div class="navbar-links">
      <a href="index.php">Home</a>
      <a href="products.php">Products</a>
      <a href="cart.php">Cart</a>
    </div>
  </nav>

  <main class="page-content">
    <?php if ($product): ?>
      <h1><?php echo $product['name']; ?></h1>
      <img
        class="buy-image"
        src="<?php echo $product['image']; ?>"
        alt="<?php echo $product['name']; ?>"
      >
      <p><?php echo $product['price']; ?> kr</p>
        <form method="POST">
            <button id="button-product">Add to cart</button>
        </form>
    <?php else: ?>
      <p>Produkten kunde inte hittas.</p>
    <?php endif; ?>
  </main>

</body>
</html>