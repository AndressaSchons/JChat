<template>

    <div class="all">
        <header>
            <div>
                <img src="https://ac-landing-pages-user-uploads-production.s3.amazonaws.com/0000053730/ae361e8e-dbea-4a4f-a121-e0a04481de1d.png" alt="Logo da empresa">JChat
            </div>
        </header>

        <section class="containerTela">

            <div class="column">
                <div class="columnMensg" style="max-width: 90px">
                    <img src="https://caocidadao.com.br/wp-content/uploads/2019/09/user.png" alt="">
                    <h5 class="nMensg">2</h5>
                    <!--Inserir css com o numero de mensagens-->
                </div>


                <div class="containerChat" style="max-width: 1500px">
                    <div class="headerConversa">
                        <img src="https://i2.wp.com/www.portalzendaat.com.br/wp-content/uploads/2016/06/pertenecer-a-un-grupo-comunidad-1.jpg">
                        <h3 class="nomeConversa">Marias Fifi</h3>
                        <!-- burger menu: sair da sala/definir prioridade-->
                    </div>
                    <div class="container">
                        <img src="https://cdnstatic8.com/emporiodoeva.com.br/wp-content/uploads/2015/05/roxo.jpg" alt="Avatar">
                        <p class="userName" style="margin-bottom: 0px">Diogo</p>
                        <p>Hello. How are you today?</p>
                        <span class="time-right">11:00</span>
                    </div>

                    <div class="container darker">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Chartreuse_verde-lim%C3%A3o.jpg" alt="Avatar" class="right">
                        <p class="userName dir">Kevin</p>
                        <p>Hey! I'm fine. Thanks for asking!</p>
                        <span class="time-left">11:01</span>
                    </div>

                    <div class="container">
                        <img src="https://cdnstatic8.com/emporiodoeva.com.br/wp-content/uploads/2015/05/roxo.jpg" alt="Avatar">
                        <p class="userName">Diogo</p>
                        <p>Sweet! So, what do you wanna do today?</p>
                        <span class="time-right">11:02</span>
                    </div>

                    <div class="container darker">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Chartreuse_verde-lim%C3%A3o.jpg" alt="Avatar" class="right">
                        <p class="userName dir">Kevin</p>
                        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                        <span class="time-left">11:05</span>
                    </div>
                    <div class="envioMensagem">
                        <label for="mensagem"></label>
                        <input type="text" id="mensagem" class="mensagemInput">
                    </div>

                </div>


                <div class="aa" style="max-width: 70px">
                    <div class="pessoaOnline">
                        <img src="https://caocidadao.com.br/wp-content/uploads/2019/09/user.png" alt="">
                        <h3  class="nomeConversa">Nome</h3>
                    </div>
                    <div class="pessoaOnline">
                        <img src="https://caocidadao.com.br/wp-content/uploads/2019/09/user.png" alt="">
                        <h3  class="nomeConversa">Nome</h3>
                    </div>
                    <div class="pessoaOnline">
                        <img src="https://caocidadao.com.br/wp-content/uploads/2019/09/user.png" alt="">
                        <h3  class="nomeConversa">Nome</h3>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "Chat"
}
</script>

<style scoped lang="sass">
body
    background-color: #b3d4fc
    margin: 0
    padding: 0
    font-family: 'Source Sans Pro', sans-serif

header
    display: inline-block
    background-color: rgb(46,52,59)
    width: 100%
    height: 25px
    color: white
    font-size: 20px
    text-align: center
    img
        width: 20px

.containerTela
    width: 100%
    height: 100%

.headerConversa
    background-color: #284670
    color: white
    img
        width: 50px
        border-radius: 15px
        margin: 10px 10px 0 10px
    img, h3
        display: inline-block


.containerTela
    img
        width: 50px
        border-radius: 10px

.onlines
    ul
        list-style-type: none
        padding: 0

.pessoaOnline
    color: white
    background-color: white
    padding: 10px
    display: block

.pessoaOnline
    img
        border: 3px solid green
        border-radius: 30px

.column
    display: grid
    grid-template-columns: 70px 1000px 30px


.containerChat
    background-color: black

.envioMensagem
    width: 100%
    height: 40px

</style>