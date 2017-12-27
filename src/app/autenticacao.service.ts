import{Usuario} from './acesso/usuario.model'
import * as firebase from  'firebase'
export class Autenticacao{
    public cadastrarUsuario(usuario:Usuario):void{
        //console.log('Chegamos até o serviço',usuario)
        firebase.auth().createUserWithEmailAndPassword(usuario.email,usuario.senha)
        .then((resposta:any)=>{

            //remover a senha do atributo senha do objeto usuário
            delete usuario.senha

            //resgistrando dados complomentares do usuario no path email na base64
            firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
            .set(usuario)
            

        })

        .catch((error:Error)=>{
            console.log(error)
        })
    }
    public autenticar(email:string,senha:string):void{
        console.log('email: '  , email)
        console.log('senha: '  , senha)
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email,senha)
        .then((resposta:any)=> console.log(resposta))
        .catch((error:Error)=>console.log(error))
    }
}