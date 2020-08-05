import React, {useState, useEffect, useReducer} from 'react'
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import {useParams} from "react-router-dom";

import classes from './ItemDetail.module.css';
import Spinner from '../Spinner/Spinner'

import APIConnector from '../../APIConnector/APIConnector'

const OptionSelector = ({options, option, value, onChange}) => {

    const handleChange = (event) => {
        // console.log(event.target.value)
        onChange(option, event.target.value)
    }

    return (
        <FormControl variant="outlined" className={classes.Option}>
            <Select
                value={value}
                displayEmpty
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>Select Option</em>
                </MenuItem>

                {options.map((option, index)=>{
                    return <MenuItem key={option.Name} value={index}>{option.Name}</MenuItem>
                })}

            </Select>
        </FormControl>
    )
}

function reducer(options, action){
    switch(action.type){
        case "option1":
            options = {...options}
            options.option1 = action.payload.suboptions
            return options
        case "option2":
            options = {...options}
            options.option2 = action.payload.suboptions
            return options
        case "option3":
            options = {...options}
            options.option3 = action.payload.suboptions
            return options
        default:
            return options
    }
}


export default function ItemDetail({toggleFooter, toggleAuthBar}) {
    const [open, setOpen] = useState(false)
    const [selectedOptions, setSelectedOptions] = useState([])
    const [item, setItem] = useState()
    const [quantity, setQuantity] = useState(0)

    let {id} = useParams()

    const [options, dispatch] = useReducer(reducer, {
        option1:[
            {
                "Name":"Style01",
                "AddtionalCost":1.5,
                "SubOptions":[
                    {
                        "Name":"1",
                        "AddtionalCost":-0.5,
                        "SubOptions":[
                            {
                                "Name":"Red"
                            }
                        ]
                    },
                    {
                        "Name":"2",
                        "SubOptions":[
                            {
                                "Name":"Red"
                            }
                        ]
                    },
                    {
                        "Name":"3",
                        "SubOptions":[
                            {
                                "Name":"Red"
                            }
                        ]
                    }
                ]
            },
            {
                "Name":"Style02",
                "SubOptions":[
                    {
                        "Name":"4",
                        "SubOptions":[
                            {
                                "Name":"Red"
                            },
                            {
                                "Name":"Green"
                            }
                        ]
                    },
                    {
                        "Name":"5",
                        "SubOptions":[
                            {
                                "Name":"Red"
                            }
                        ]
                    },
                ]
            }
        ],
        option2:[],
        option3:[]
    })

    useEffect(()=>{
        APIConnector.getItemByID(id).then(result => {
            console.log(result)
            setItem(result)
            dispatch({type:`option1`, payload:{suboptions:JSON.parse(result.options)}})
        }).catch(error=>
            console.log(error)
        )
    },[])

    useEffect(() => {
        toggleFooter();
        toggleAuthBar();
        return () => {
            toggleFooter();
            toggleAuthBar();
        }
    }, [toggleFooter, toggleAuthBar])

    const onAddCart = () => {
        if (!open){
            setOpen(true)
            return
        }
        console.log(quantity)
        console.log(options.option1[selectedOptions[0]])
        console.log(options.option2[selectedOptions[1]])
        console.log(options.option3[selectedOptions[2]])
    }

    const onClose = () =>{
        setOpen(false)
    }

    const onOptionSelect = (option, value) => {
        setSelectedOptions(prev=>{
            let result = [...prev]
            result.splice(option-1)
            result[option-1] = value
            return result
        })

        if (value !== '' && 'SubOptions' in options[`option${option}`][value]){
            dispatch({type:`option${option+1}`, payload:{suboptions:options[`option${option}`][value].SubOptions}})
        }else if (value===''){
            setSelectedOptions(prev=>{
                prev.splice(option-1)
                console.log(prev)
                return prev
            })

            for (let i = option+1; i < 4; i++){
                dispatch({type:`option${i}`, payload:{suboptions:[]}})
            }

        }
        

    }

    if (!item){
        return <Spinner/>
    }

    return (
      <div>
        <iframe 
            title="gmarket"
            className="gmarket_iframe"
            style={{width:'100%', height:'90vh'}}
            src={item.url}
        />

        <div className={classes.AddCartButton_Outer_Container}>
            <div className={classes.Options_Container} style={{display:open?'flex':'none'}}>
                <div className={classes.Close_Button_Container}>
                    <Button onClick={onClose}><CloseIcon/></Button>
                </div>
                
                <div className={classes.Item_Title}>
                    {item.name}
                </div>
                <div className={classes.Item_Price}>
                    {item.price}
                </div>

                {
                    options['option1'].length > 0 &&
                    <OptionSelector options={options['option1']} value={selectedOptions[0] === undefined ? "" : selectedOptions[0]} option={1} onChange={onOptionSelect}/>
                }

                {
                    options['option2'].length > 0 &&
                    <OptionSelector options={options['option2']} value={selectedOptions[1] === undefined ? "" : selectedOptions[1]} option={2} onChange={onOptionSelect}/>
                }

                {
                    options['option3'].length > 0 &&
                    <OptionSelector options={options['option3']} value={selectedOptions[2] === undefined ? "" : selectedOptions[2]} option={3} onChange={onOptionSelect}/>
                }


                <div className={classes.Quantity_Container}>
                    <TextField
                        className={classes.Quantity}
                        label="Quantity"
                        type="number"
                        variant="outlined"
                        value={quantity===0?"":quantity}
                        onChange={(e)=>setQuantity(e.target.value)}
                    />
                </div>

            </div>

            <div className={classes.AddCartButton_Inner_Container}>
                <Button className={classes.Button} variant="contained" color="primary" onClick={onAddCart}>
                    <ShoppingCartIcon/> ADD TO CART
                </Button>
            </div>
        </div>

      </div>
    );
}


