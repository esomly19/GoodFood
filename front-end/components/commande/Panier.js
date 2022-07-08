import React from "react";

export default class Panier extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            plats:[]
        }
    }

    addPlat(plat){
        this.setState({
            plats: [...this.state.plats, plat]
        })
    }

    removePlat(plat){
        this.setState({
            plats: this.state.plats.filter(p => p.id !== plat.id)
        })
    }

    getPlats(){
        return this.state.plats;
    }
    render() {
        return(<></>)
    }
}
