import rating from "../models/review.model.js";

export const ratingData = async (req, res) => {
    try {
        req.body.userId = req.body.user_id
        req.body.prodectId = req.body.prodect_id
        const datas = await rating.findOne({ userId: req.body.userId, prodectId: req.body.prodectId })
        if (datas) {
            res.send({
                status: false,
                msg: "rated allready",
                data: {}
            })
        } else {
            const created = await rating.create(req.body)
            if (created) {
                res.send({
                    status: true,
                    msg: "thank you",
                    data: created
                })
            } else {
                res.send({
                    status: false,
                    msg: "wrong data",
                    data: {}
                })
            }
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "something wring",
            data: error
        })
    }
}

export const ratingGet = async (req, res) => {
    try {
        const getret = await rating.find({ status: "Active" }).populate("userId").populate("prodectId")
        if (getret) {
            res.send({
                status: true,
                msg: "data fech",
                data: getret
            })
        } else {
            res.send({
                status: false,
                msg: "sai gal data",
                data: []
            })

        }
    } catch (error) {

    }
}

export const searchData = async (req, res) => {
   try {
    var how = {

    }
    if (req.body.rating) {
       how.rating=req.body.rating
    }
    // if (req.params.rating) {
    //     how.rating=req.params.rating
    //  }
    const kk = await rating.find(how)
    if (kk.length>0) {
        res.send({
            status:true,
            msg:"mhgresxcvj mhgresgm mhfcbh",
            data:kk
        })
    }else{
        res.send("not working")
    }
   } catch (error) {
    res.send(error)
   }
}