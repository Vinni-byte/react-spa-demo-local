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




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Home - MPA</title>
  <link rel="stylesheet" href="app_php.css">
  <link rel="stylesheet" href="index_index.css">
  
  <!-- GOOGLE FONT -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
  <!-- GOOGLE FONT -->
</head>
<body>

  <nav class="navbar">
    <div class="navbar-left">
      <h1 class="logo">AHAMKARA</h1>
    </div>

    <div class="navbar-links">
      <a href="index.php">Home</a>
      <a href="products.php" class="active">Products </a>
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