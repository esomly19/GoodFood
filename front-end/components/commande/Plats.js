import React from 'react';
import {
    Badge,
    Container,
    Flex,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    ScaleFade,
    Tag, TagCloseButton, TagLabel,
    Text,
    HStack, Divider, Skeleton
} from "@chakra-ui/react";

import {AiFillStar, AiOutlineSearch} from "react-icons/ai";

import {BsFillPlusCircleFill} from "react-icons/bs";
import PlatsDrawer from "./PlatsDrawer";
import {capitalizeFirstLetter} from "../../utils/stringUtils";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";


const MAIN_TAGS=[{tag:"plat",display:'Plats'},{tag:"boisson",display:'Boissons'},{tag:"dessert",display:'Desserts'},{tag:"entree",display:'Entrées'},];

export default class Plats extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            platsOrigin:[],
            plats:[],
            search:"",
            tags:[],
            selectedTags:[]
        }
        this.drawerRef=React.createRef();
        this.tagsRef=React.createRef();
    }


    componentDidMount() {
        let plats = [...this.props.plats]
        let tags = plats.reduce( (result, plat) => result.concat(plat.tags) , []);
        this.setState({plats:plats,platsOrigin:plats, tags:[...new Set(tags)]});
    }

    handleClickTag = (tag) =>{
        const {selectedTags}=this.state;
        let copy = [...selectedTags];
        if(MAIN_TAGS.find((t)=>t.tag==tag)){
            copy=selectedTags.filter((t)=>{
                return !MAIN_TAGS.map((tt)=>tt.tag).includes(t);
            })
        }
        if(selectedTags.includes(tag))return;
        this.setState({selectedTags:[...copy,tag]},this.refreshList);
    }

    handleRemoveTag = (tag) =>{
        const {selectedTags}=this.state;

        this.setState({selectedTags:selectedTags.filter(t=>t!==tag)},this.refreshList);
    }


    handleSearch = ({target}) => this.setState({search: target.value}, this.refreshList);

    refreshList = () => {
        const {search,platsOrigin,selectedTags} = this.state;
        let plats = [...platsOrigin];
        plats=plats.filter((pl)=>(pl.nom.toUpperCase().includes(search.toUpperCase()))||(pl.cuisine.toUpperCase().includes(search.toUpperCase())));
        if(selectedTags.length)
            plats=plats.filter((pl)=>selectedTags.reduce((result, tag)=>result&&pl.tags.includes(tag),true));
        this.setState({plats});
    }

    renderPlats = (plat,index)=>{
        return(
          <Container key={index} marginTop={10} borderRadius={20} p={0} flexDirection={"row"} bg={"goodfood.white"}>
              <Skeleton isLoaded>
                 <Image src={plat.image} h={"150px"} w={"100%"} borderTopRadius={20}  objectFit='cover' alt={"logo"}/>
              </Skeleton>
              <Flex flexDirection={"column"} pl={5} pr={5}>
                  <Text as={"i"} fontSize={15} mt={2}>{"Cuisine "+plat.cuisine}</Text>
              <Flex justifyContent={"space-between"}>
                      <Text color={'goodfood.blue'} fontSize='20px'>{plat.nom}</Text>
                      <Badge variant='solid' colorScheme='green' display={"flex"} alignItems={"center"} borderRadius={20} p={2}>
                  <Text marginRight={1}>4.5</Text>
                  <AiFillStar size={15}/>
                      </Badge>
                  </Flex>
                  <Flex justifyContent={"space-between"} mt={2} mb={2} alignItems={"center"}>
                      <Text color='tomato' fontSize='30px'>{plat.prix_ttc.toFixed(2)}€</Text>
                      <BsFillPlusCircleFill color={"#FF724C"} size={30} cursor={"pointer"} style={{filter:"drop-shadow(0px 0px 5px #C0C0C0"}} onClick={()=>this.drawerRef.current.handleOpen(plat)}/>
                  </Flex>
              </Flex>
          </Container>
        );
    }

    handleLeft = ()=>{
        let i=0;
        let obj=this;
        let intervalId=setInterval(function(){
            obj.tagsRef.current.scrollLeft-=3;
            i++;
            if(i == 20){
                clearInterval(intervalId);
            }
        }, 10);

    }
    handleRight = ()=>{
        let i=0;
        let obj=this;
        let intervalId=setInterval(function(){
            obj.tagsRef.current.scrollLeft+=3;
            i++;
            if(i == 20){
                clearInterval(intervalId);
            }
        }, 20);

    }
    render() {
        const {plats,search,tags,selectedTags}=this.state;
        return(
            <>
                <Flex flexDirection={"column"}marginX={10} mt={2}>
                    <InputGroup >
                        <Input bg={"goodfood.white"} placeholder='Chercher un plat...' value={search} onChange={this.handleSearch}/>
                        <InputRightElement><AiOutlineSearch style={{cursor: "pointer"}}/></InputRightElement>
                    </InputGroup>
                    <Flex align="center" justifyContent={"space-between"}>
                        <IoIosArrowBack size={25} cursor="pointer" color={"white"} onClick={this.handleLeft}/>
                        <HStack spacing={2} marginY={2} p={"3px"} overflowX={"scroll"} className={"scnone"} ref={this.tagsRef} transitionDuration={"500ms"}>
                            {tags.map((tag,key)=>{
                                    if(MAIN_TAGS.find((t)=>t.tag===tag))return null;
                                    let isSelected=selectedTags.includes(tag);
                                    return(
                                        <Tag
                                            key={key}
                                            borderRadius='full'
                                            variant='solid'
                                            bg={isSelected?"white":"none"}
                                            color={isSelected?"goodfood.blue":"goodfood.white"}
                                            width={"fit-content"}
                                            borderColor={"goodfood.white"}
                                            borderWidth={"1px"}
                                            cursor='pointer'
                                            minW={"none"}
                                            onClick={this.handleClickTag.bind(this, tag)}>
                                            <TagLabel>{capitalizeFirstLetter(tag)}</TagLabel>
                                            {isSelected?<TagCloseButton onClick={this.handleRemoveTag.bind(this, tag)}/>:null}
                                        </Tag>
                                    );
                                }

                            )}
                        </HStack>
                        <IoIosArrowForward size={25} cursor="pointer" color={"white"} onClick={this.handleRight}/>
                    </Flex>
                    <Divider/>
                    <HStack spacing={2}  marginY={2}>
                        {MAIN_TAGS.map(({tag,display},key)=>{
                                let isSelected=selectedTags.includes(tag);
                                return(
                                    <Tag
                                        key={key}
                                        borderRadius='full'
                                        variant='solid'
                                        bg={isSelected?"white":"none"}
                                        color={isSelected?"goodfood.blue":"goodfood.white"}
                                        width={"fit-content"}
                                        borderColor={"goodfood.white"}
                                        borderWidth={"1px"}
                                        cursor='pointer'
                                        minW={"none"}
                                        onClick={this.handleClickTag.bind(this, tag)}>
                                        <TagLabel>{display}</TagLabel>
                                        {isSelected?<TagCloseButton onClick={this.handleRemoveTag.bind(this, tag)}/>:null}
                                    </Tag>
                                );
                            }

                        )}
                    </HStack>
                </Flex>
                <Flex bg={"goodfood.grey"} h={"100%"} overflowY={"scroll"} className={"scnone"} flexDirection={"column"} paddingX={10} borderTopRadius={20}>

                    <ScaleFade initialScale={0.9} in={true}>
                        {plats.map(this.renderPlats)}
                    </ScaleFade>
                </Flex>
                <PlatsDrawer ref={this.drawerRef} panier={this.props.panier}/>
            </>
        );
    }
}
