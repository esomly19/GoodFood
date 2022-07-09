import React from "react";

export default class Panier extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            plats:[]
        }
    }

    addPlat(plat, callback){
        let platInList = this.state.plats.find((pl)=>pl.id===plat.id);
        if(!platInList){
            plat.quantite=1;
            this.setState({
                plats: [...this.state.plats, plat]
            },callback)
        }
        else{
            let copy=[...this.state.plats];
            copy.find((pl)=>pl.id===plat.id).quantite++;
            this.setState({
                plats: copy
            },callback)
        }



    }

    removePlat(plat, callback){
        let platInList = this.state.plats.find((pl)=>pl.id===plat.id);
        if(platInList.quantite===1){
            this.setState({
                plats: this.state.plats.filter(p => p.id !== plat.id)
            },callback)
        }
        else{
            let copy=[...this.state.plats];
            copy.find((pl)=>pl.id===plat.id).quantite--;
            this.setState({
                plats: copy
            },callback)
        }

    }

    getPlats(){
        return this.state.plats;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state)
    }

    render() {
        return(<></>)
    }
}
