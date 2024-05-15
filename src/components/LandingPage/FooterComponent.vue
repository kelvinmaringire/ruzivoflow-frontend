<template>
<footer class="footer">
        <div class="box">
            <h2> Links </h2>
            <ul class="links">
                <li><a href="#"> Home </a></li>
                <li><a href="#"> Blogs </a></li>
                <li><a href="#"> Services </a></li>
                <li><a href="#"> About Us </a></li>
                <li><a href="#"> Contact Us </a></li>
            </ul>
        </div>
        <div class="box">
            <h2> News Letter </h2>
            <form action="" class="registration">
                <input type="email" name="email" id="email" placeholder="Enter your email Address">
                <button type="submit"> Subscibe Now </button>
            </form>
        </div>
        <div class="box">
            <h2> Contact </h2>
            <p class="address"> 123, xyz Road, ABC 20 <br>
                Hisar, Haryana, India
            </p>
            <ul class="social">
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-youtube"></i></li>
            </ul>
        </div>
    </footer>
</template>

<script setup>

</script>

<style>
.footer {
    display: flex;
    color: #fffefe;
    padding: 2rem 0;
    height: auto;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #000000;
}

.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
}

.footer h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-weight: bold;
}

.links li {
    list-style: none;
    line-height: 30px;
    text-align: center;
    font-weight: 100;
}

.links li a {
    text-decoration: none;
    color: #fff;
}

.registration {
    display: flex;
    flex-direction: column;
}

.registration input {
    padding: 10px;
    font-weight: 100;
    border: none;
    outline: none;
    border-radius: 5px;
    text-align: center;
    font-size: 12px;
    margin: 1rem 0;
}

button {
    border: none;
    padding: 12px 0;
    border-radius: 30px;
    cursor: pointer;
}

.address {
    text-align: center;
    margin-bottom: 10px;
}

.social {
    display: flex;
    list-style: none;
}

.social li {
    margin: 0 8px;
    cursor: pointer;
    font-size: 18px;
}
</style>
