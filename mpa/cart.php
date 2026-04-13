<?php
session_start();
$cart = $_SESSION['cart'] ?? [];
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cart - MPA</title>
  <link rel="stylesheet" href="app_php.css">
</head>
<body>

<nav class="navbar">
  <h1 class="logo">AHAMKARA</h1>
  <div>
    <a href="index.php">Home</a>
    <a href="products.php">Products</a>
    <a href="cart.php">Cart</a>
  </div>
</nav>

<main class="page-content">
  <h1>CART</h1>

  <?php if (empty($cart)): ?>
    <p>Your cart is empty.</p>
  <?php else: ?>
    <?php foreach ($cart as $item): ?>
      <div>
        <img src="<?php echo $item['image']; ?>" width="120">
        <h2><?php echo $item['name']; ?></h2>
        <p><?php echo $item['price']; ?> kr</p>
      </div>
    <?php endforeach; ?>
  <?php endif; ?>
</main>

</body>
</html>