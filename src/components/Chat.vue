<template>
    <div class="all">
        <header>
            <nav>
                <img src="https://ac-landing-pages-user-uploads-production.s3.amazonaws.com/0000053730/ae361e8e-dbea-4a4f-a121-e0a04481de1d.png" alt="Logo da empresa">JChat
            </nav>
        </header>

        <section class="containerTela">

            <div class="columns">
                <div class="column" style="max-width: 90px">
                    <img src="https://caocidadao.com.br/wp-content/uploads/2019/09/user.png" alt="">
                    <h5 class="nMensg">2</h5>
                    <!--Inserir css com o numero de mensagens-->
                </div>

                <div class="column">
                    <div class="containerChat" style="max-width: 1500px">
                        <div class="headerConversa">
                          <img src="https://i2.wp.com/www.portalzendaat.com.br/wp-content/uploads/2016/06/pertenecer-a-un-grupo-comunidad-1.jpg">
                          <h3 class="title is-4 nomeConversa">Marias Fifi</h3>
                          <!-- burger menu: sair da sala/definir prioridade-->
                        </div>
                        <div class="msg">
                          <h4 class="userName">Diogo</h4>
                          <h6 class="mensagem">Hello. How are you today?</h6>
                        </div>

                          <div class="msg">
                              <h4 class="userName">Kevin</h4>
                              <h6 class="mensagem">Hello.</h6>
                          </div>


                        <div class="envioMensagem">
                            <input type="text" id="msg" name="msg" class="envioMsg">
                            <button class="button">Enviar</button>
                        </div>

                  </div>
                </div>



                <div class="column" style="max-width: 70px">
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
//import Login from './Login.vue'
export default {
    name: "Chat",
    components:{

  }

}
</script>

<style lang="sass">
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat:wght@300&family=Source+Sans+Pro:wght@300&display=swap')
body
    background-color: #b3d4fc
    margin: 0
    padding: 0
    font-family: 'Source Sans Pro', sans-serif
    overflow: hidden

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
    margin-top: 0
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


.nomeConversa
    color: white
    text-align: left


.containerChat
    background-color: pink
    position: absolute
    bottom: 0

.envioMensagem
    width: 100%
    height: 10px

.userName
    color: aquamarine
    text-align: left
    margin-left: 10px
.mensagem
    text-align: left
    margin-left: 15px
.msg
    border: #42b983
    border-style: solid
    margin: 5px 3px 5px 3px

.envioMsg
    width: 70%
    height: 40px
    border: none
    border-radius: 5px
    margin: 3px
    text-align: left
</style>