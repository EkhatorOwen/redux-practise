

getHouses=(req,res)=>{

    req.app
        .get('db')
        .get_houses()
        .then(response=>{
            res.status(200).json(response)
        })
        .catch(err => conole.log(error))
}

postHouses=(req,res)=>{
   const { houses } = req.body;
  // console.log(houses);
        req.app
            .get('db')
            .insert_houses([houses.name, houses.address, houses.city, houses.state, houses.zip])
            .then(response=>res.status(200).json('data successfully inserted'))
            .catch(err=> console.log(err));
}

deleteHouse=(req, res)=>{
    console.log('hit delete')
    const { id } = req.params;
    req.app 
        .get('db')
        .delete_house([id])
        .then(response=>res.status(200).json("deleted successfully"))
        .catch(err=>console.log(err))
}


module.exports ={
    getHouses,
    postHouses,
    deleteHouse
}