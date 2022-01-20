<template>

    <div class="all">
        <header>
            <nav>
                <img src="https://ac-landing-pages-user-uploads-production.s3.amazonaws.com/0000053730/ae361e8e-dbea-4a4f-a121-e0a04481de1d.png" alt="Logo da empresa">JChat
            </nav>
        </header>

        <div class="form" v-if="show" >
            <form action="" @submit.prevent="loginFlag">
                <label for="user">USUÁRIO:</label>
                <input type="text" id="user" class="login" placeholder="Usuário" v-model="userName">
                <button type="submit" class="loginButton">Login</button>
            </form>
        </div>

        <section id="app" class="containerTela" v-else-if="!show">

            <div class="columns" style="height: 100%">
                <div class="column" style="max-width: 90px">
                    <img src="https://caocidadao.com.br/wp-content/uploads/2019/09/user.png" alt="">
                    <h5 class="nMensg">2</h5>
                </div>

                <div class="column chat containerChat" style="max-width: 100%">
                    <div class="headerConversa">
                        <img src="https://i2.wp.com/www.portalzendaat.com.br/wp-content/uploads/2016/06/pertenecer-a-un-grupo-comunidad-1.jpg">
                        <h3 class="title is-4 nomeConversa">Grupo 1</h3>
                          <!-- burger menu: sair da sala/definir prioridade-->
                    </div>
                    <ul id="chatBox">
                        <li v-for="(msg, index) in messages" :key="index">
                            <h4 class="userName"><strong>{{ msg.author }}</strong></h4>
                            <h6 class="mensagem">{{ msg.msg }}</h6>
                        </li>
                    </ul>


                    <form @submit.prevent = "sendMessage" class="envioMensagem">
                        <input type="text" id="msg" name="msg" class="envioMsg" v-model:value="msg" />
                        <button class="button send">Enviar</button>
                    </form>
                </div>

                <div class="column" style="max-width: 100px; height: 100%;">
                    <div class="pessoaOnline">
                        <img src="https://caocidadao.com.br/wp-content/uploads/2019/09/user.png" alt="">
                        <h3  class="nomeConversa">Autor</h3>
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
import io from 'socket.io-client';
const socket = io('http://207.246.125.67');

export default {
    name: "Chat",

    data() {
        return {
            show: true,
            userName: "",
            users: [],
            msg: "",
            messages: [],
            usuario: "",
        }
    },
    methods: {

        loginFlag: function(){
            if (this.userName.length !== 0){
                this.show = false;
                //let input = this.userName
                let user = {
                    usuario: this.userName.trim(),
                    id: socket.id
                }
                socket.emit('user', user);
          }
        },

        sendMessage: function (){
            let message = {
                author: this.userName,
                msg: this.msg,
            }
            socket.emit('message', message);
            this.msg = ''
        }
    },
    created: function () {
        socket.on('newMessage', msg=>{
            this.messages.push(msg);
        });
        socket.on('newUser', user =>{
            //tihis.users.push(user);
            console.log(this.users)
        });
    },

    mounted() {
        socket.on('message', function (message) {
            app.message.push(message);
            app.$nextTick(function (){
                var messageBox = document.getElementById('chatBox');
                messageBox.scrollTop = messageBox.scrollHeight;
            })
        })


    },
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
    height: calc(100vh + 40px)


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

.form
    line-height: 30px
    font-size: larger
    background-color: #000080
    padding: 20px
    margin: 20% 30% 20% 30%
    border-radius: 5px
    color: white

.login
    font-size: 18px
    line-height: 1.2
    display: block
    width: 100%
    height: 30px
    background: transparent
    border-radius: 5px
    border: none
    color: white
    margin: 10px

#user
    margin: 0

.loginButton
    margin-top: 15px
    background-color: rgb(29, 187, 162)
    color: #fff
    line-height: 1.2
    text-transform: uppercase
    display: flex
    justify-content: center
    align-items: center
    border: none
    width: 100%
    height: 40px
    cursor: pointer
    border-radius: 3px


.containerTela
    width: 100%
    height: 100%

.containerTela
    margin-top: 0
    height: calc(100vh - 40px)
    img
        width: 50px
        border-radius: 10px

.containerChat
    position: relative
    margin: 0

.headerConversa
    background-color: #284670
    color: white
    img
        width: 50px
        border-radius: 15px
        margin: 10px 10px 0 10px
    img, h3
        display: inline-block

.nomeConversa
    color: white
    text-align: left

.envioMensagem
    width: 100%
    position: absolute
    bottom: 0
    margin: 0

.mensagem
    text-align: left
    margin-left: 15px

.msg
    margin: 5px 3px

.envioMsg
    width: 80%
    height: 40px
    border: none
    border-radius: 5px
    margin: 3px

.send
    margin-top: 3px

.userName
    color: aquamarine
    text-align: left
    margin-left: 10px

.onlines
    ul
        list-style-type: none
        padding: 0

.pessoaOnline
    color: white
    padding: 10px
    display: block
    img
        width: 25px
        display: inline-block
        border: 3px solid green
        border-radius: 30px

</style>
