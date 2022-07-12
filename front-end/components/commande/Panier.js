import React from "react";
import {Badge, Tag} from "@chakra-ui/react";

export default class Panier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plats: []
        }
    }

    addPlat(plat, callback) {
        this.setState({
            plats: [...this.state.plats, plat]
        }, callback)

    }

    addPlatAtIndex(index,callback) {
        let copy = [...this.state.plats];
        copy[index].quantite+=1;
        this.setState({
            plats: copy
        }, callback)
    }

    removePlatAtIndex(index, callback) {
        let copy = [...this.state.plats];
        copy[index].quantite-=1;
        if(!copy[index].quantite){
            copy.splice(index,1);
        }
        this.setState({
            plats: copy
        }, callback)
    }

    calculPrix=(element,index)=>{
        let plat = this.state.plats[index];

        let prix = plat.prix_ttc;
        let supplements = plat.selectedSupplements.length?plat.selectedSupplements.map((supplement)=>supplement.value.prix).reduce((acc,supplement)=>acc+supplement):0;
        return (plat.quantite * (prix + supplements)).toFixed(2);
    }

    calculTotalPanier(){
        return this.state.plats.length?this.state.plats.map(this.calculPrix).map(parseFloat).reduce((acc, prix)=>acc + prix).toFixed(2):0;
    }


    getPlats() {
        return this.state.plats;
    }

    getNbPlats(){
        return this.state.plats.length?this.state.plats.map((plat)=>plat.quantite).reduce((acc, qtt)=>acc+qtt):0;
    }

    render() {
        return(
        <div>
            {this.props.children}
            {this.state.plats.length?<Tag borderRadius={100} colorScheme='red' position={"absolute"} marginTop={-8} marginLeft={4}zIndex={1}>{this.getNbPlats()}</Tag>:null}
        </div>);
    }
}
