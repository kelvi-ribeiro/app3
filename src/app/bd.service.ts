import {Injectable} from '@angular/core'
import{Progresso} from './progresso.service'
import * as firebase from 'firebase'
@Injectable()
export class Bd{
    constructor(private progresso:Progresso){}

    public publicar(publicacao:any):void{
        console.log(publicacao)
        let nomeImagem = Date.now()
        firebase.storage().ref()
        
        .child(`imagens/${nomeImagem}`)
        .put(publicacao.imagem)
        .on(firebase.storage.TaskEvent.STATE_CHANGED,
            //acompanhamento do progresso do upload
            (snapshot:any)=>{
                this.progresso.status ='Andamento'
                this.progresso.estado = snapshot
                console.log('Snapshot capturado no on(): ',snapshot)
            },
            (error)=>{
                this.progresso.status ='Erro'
                //console.log(error)
            },
            ()=>{
                //finalização do processo
                this.progresso.status ='Concluído'
                //console.log('Uplod completo')
            }
        )
        // firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
        // .push({titulo:publicacao.titulo})
        
    }
}