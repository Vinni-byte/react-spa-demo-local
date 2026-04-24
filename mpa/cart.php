<?php
session_start();
$cart = $_SESSION['cart'] ?? [];
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
      <a href="products.php">Products</a>
      <a href="cart.php" class="active"> Cart</a>
    </div>
  </nav>

<main class="page-content">
  <h1>CART</h1>

  <?php if (empty($cart)): ?>
    <p>Your cart is empty.</p>
  <?php else: ?>
    <?php foreach ($cart as $item): ?>
      <div>
         <img src="../img/<?php echo $item['image']; ?>" width="120" alt="<?php echo $item['name']; ?>">
        <h2><?php echo $item['name']; ?></h2>
        <p><?php echo $item['price']; ?> kr</p>
      </div>
    <?php endforeach; ?>
  <?php endif; ?>
</main>

</body>
</html>