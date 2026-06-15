body{
    margin:0;
    background:#f7f5ef;
    color:#66786a;
    font-family:'Cormorant Garamond', serif;
    overflow-x:hidden;
}

.hidden{
    display:none;
}

.password-screen{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}

.login-box{
    text-align:center;
}

.login-box h1{
    font-family:'Great Vibes', cursive;
    font-size:5rem;
    color:#7f927e;
}

input{
    padding:15px;
    width:220px;
    border:none;
    border-radius:40px;
}

button{
    background:#7f927e;
    color:white;
    border:none;
    border-radius:40px;
    padding:15px 30px;
    cursor:pointer;
    transition:0.3s;
}

button:hover{
    transform:scale(1.05);
}

.main-page{
    text-align:center;
    padding-top:50px;
}

.names{
    font-size:6rem;
    font-family:'Great Vibes', cursive;
}

.envelope{
    width:320px;
    height:220px;
    background:#ddd6c9;
    position:relative;
    margin:auto;
    border-radius:10px;
    cursor:pointer;
    box-shadow:0 10px 30px rgba(0,0,0,.2);
}

.flap{
    position:absolute;
    width:100%;
    height:120px;
    background:#c8c0b1;
    clip-path:polygon(0 0,100% 0,50% 100%);
    transform-origin:top;
    transition:1s;
}

.envelope.open .flap{
    transform:rotateX(180deg);
}

.letter{
    width:250px;
    position:absolute;
    top:40px;
    left:35px;
    transition:1s;
}

.envelope.open .letter{
    transform:translateY(-180px);
}

.letter img{
    width:100%;
    border-radius:10px;
}

.seal{
    position:absolute;
    left:135px;
    top:90px;

    width:50px;
    height:50px;

    background:#a61f2e;

    border-radius:50%;

    display:flex;
    justify-content:center;
    align-items:center;

    color:white;
}

.countdown{
    margin-top:120px;
    font-size:2rem;
}
