*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial;
}

body{
  background:#f5f5f5;
}

/* Nav */
nav{
  display:flex;
  justify-content:space-between;
  padding:20px;
  background:#111;
  color:white;
}

nav ul{
  list-style:none;
  display:flex;
  gap:20px;
}

nav li{
  cursor:pointer;
}

/* Hero */
.hero{
  text-align:center;
  padding:80px;
  background:linear-gradient(to right,#111,#333);
  color:white;
}

.hero button{
  margin-top:10px;
  padding:10px 20px;
  border:none;
  background:#ffb800;
  color:#111;
  border-radius:5px;
  cursor:pointer;
}

/* Section Title*/
.title{
  text-align:center;
  margin-top:30px;
}

/* Products */
.products{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:20px;
  padding:30px;
}

.card{
  width:240px;
  background:white;
  padding:10px;
  border-radius:10px;
  box-shadow:0 3px 15px rgba(0,0,0,0.2);
  transition:0.3s;
  text-align:center;
}

.card:hover{
  transform:scale(1.05);
}

.card img{
  width:100%;
  border-radius:10px;
}

button{
  background:#111;
  color:white;
  border:none;
  padding:8px 15px;
  border-radius:6px;
  cursor:pointer;
  margin-top:10px;
}

/* Cart */
.cart-container{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.6);
  display:none;
  justify-content:center;
  align-items:center;
}

.cart-box{
  width:350px;
  background:white;
  padding:20px;
  border-radius:10px;
  position:relative;
}

.close{
  position:absolute;
  right:10px;
  top:10px;
  cursor:pointer;
  color:red;
}

